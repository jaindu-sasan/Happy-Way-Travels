import Image from "next/image";
import Link from "next/link";
import { packagesdata } from "../data/PackageData";

/* ---------------- SLUG HELPER ---------------- */
const createSlug = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* ---------------- METADATA (SEO) ---------------- */
export async function generateMetadata({ params }) {
  const pkg = packagesdata.find(
    (p) => createSlug(p.name) === params.slug
  );

  if (!pkg) return {};

  return {
    title: `${pkg.name} | Sri Lanka Tour Package`,
    description: pkg.description,
    openGraph: {
      title: pkg.name,
      description: pkg.description,
      images: [pkg.image],
      type: "website",
    },
  };
}

/* ---------------- PAGE COMPONENT ---------------- */
export default function PackagePage({ params }) {
  const pkg = packagesdata.find(
    (p) => createSlug(p.name) === params.slug
  );

  if (!pkg) {
    return <h1 className="text-center text-2xl">Package not found</h1>;
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      
      {/* ---------- SCHEMA MARKUP ---------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: pkg.name,
            description: pkg.description,
            touristType: pkg.type,
            itinerary: {
              "@type": "ItemList",
              itemListElement: pkg.stops.map((stop, index) => ({
                "@type": "TouristAttraction",
                position: index + 1,
                name: stop.name,
              })),
            },
            offers: {
              "@type": "Offer",
              price: pkg.price,
              priceCurrency: "LKR",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {/* ---------- HERO SECTION ---------- */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {pkg.name}
      </h1>

      <p className="text-gray-600 mb-6">{pkg.description}</p>

      <Image
        src={pkg.image}
        alt={pkg.name}
        width={1200}
        height={600}
        className="rounded-xl mb-8"
        priority
      />

      {/* ---------- PACKAGE DETAILS ---------- */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Detail title="Tour Type" value={pkg.type} />
        <Detail title="Duration" value={pkg.duration} />
        <Detail title="Price" value={`LKR ${pkg.price}`} />
      </div>

      {/* ---------- INCLUDES ---------- */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">What’s Included</h2>
        <ul className="list-disc pl-6">
          {pkg.includes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* ---------- ITINERARY ---------- */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Tour Itinerary</h2>

        {pkg.itinerary.map((day, index) => (
          <div key={index} className="mb-8">
            {day.title && (
              <h3 className="text-xl font-bold mb-2">{day.title}</h3>
            )}

            <p className="mb-4 text-gray-700">{day.description}</p>

            <Image
              src={day.image}
              alt={pkg.name}
              width={1000}
              height={500}
              className="rounded-lg mb-4"
            />

            <ul className="text-sm text-gray-600">
              {day.locations.map((loc, i) => (
                <li key={i}>📍 {loc.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* ---------- RELATED PACKAGES ---------- */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Related Sri Lanka Tour Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {packagesdata
            .filter((p) => p.type === pkg.type && p.id !== pkg.id)
            .slice(0, 3)
            .map((p) => (
              <Link
                key={p.id}
                href={`/packages/${createSlug(p.name)}`}
                className="border rounded-lg p-4 hover:shadow-lg transition"
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={400}
                  height={250}
                  className="rounded-md mb-3"
                />
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.duration}</p>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}

/* ---------------- REUSABLE DETAIL COMPONENT ---------------- */
function Detail({ title, value }) {
  return (
    <div className="border rounded-lg p-4 text-center">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-600">{value}</p>
    </div>
  );
}
