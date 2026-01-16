// PackageContent.jsx
import React from "react"; // needed for JSX
import { Link } from "react-router-dom"; // use react-router-dom instead of next/link

export const createSlug = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function PackageContent({ packages, mode = "list", currentSlug }) {
  if (mode === "list") {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* Use normal <img> instead of Next.js <Image> */}
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{pkg.name}</h2>
              <p className="text-sm text-gray-600 mb-3">
                {pkg.duration} · LKR {pkg.price}
              </p>

              <Link
                to={`/sri-lanka-tour-packages/${createSlug(pkg.name)}`} // react-router-dom Link
                className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-full text-sm hover:bg-emerald-700"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (mode === "detail") {
    const pkg = packages.find((p) => createSlug(p.name) === currentSlug);
    if (!pkg) return <h1 className="text-center text-2xl py-20">Package not found</h1>;

    return (
      <div>
        <h1 className="text-4xl font-bold mb-4">{pkg.name}</h1>
        <p className="text-gray-600 mb-6">{pkg.description}</p>
        <img
          src={pkg.image}
          alt={pkg.name}
          className="rounded-xl mb-8 w-full max-h-[600px] object-cover"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Detail title="Tour Type" value={pkg.type} />
          <Detail title="Duration" value={pkg.duration} />
          <Detail title="Price" value={`LKR ${pkg.price}`} />
        </div>

        {/* Related Packages */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages
              .filter((p) => p.type === pkg.type && p.id !== pkg.id)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  to={`/sri-lanka-tour-packages/${createSlug(p.name)}`}
                  className="border rounded-lg p-4 hover:shadow-lg"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="rounded-md mb-3 w-full h-48 object-cover"
                  />
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-sm text-gray-600">{p.duration}</p>
                </Link>
              ))}
          </div>
        </section>
      </div>
    );
  }

  return null;
}

function Detail({ title, value }) {
  return (
    <div className="border rounded-lg p-4 text-center">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-600">{value}</p>
    </div>
  );
}
