import { useState } from "react";

export default function ModalForm({
  title,
  fields = [],
  hiddenFields = [],
  submitText = "Submit",
  apiUrl,
  onClose,
  buttonColor = "blue" // ✅ new prop for button color
}) {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data
      });

      if (response.ok) {
        setSuccessMessage(`${title} submitted successfully!`);
        form.reset();
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        alert("Failed to submit. Try again!");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form. Try again!");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => { if(e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-auto relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>

        {successMessage && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center font-semibold">
            {successMessage}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Hidden fields */}
          {hiddenFields.map((hf, i) => (
            <input key={i} type="hidden" name={hf.name} value={hf.value} />
          ))}

          {/* Render all fields */}
          {fields.map((field, i) => {
            if (field.type === "textarea") {
              return (
                <div key={i}>
                  <label className="block text-gray-700">{field.label}</label>
                  <textarea
                    name={field.name}
                    rows={field.rows || 4}
                    required={field.required}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  ></textarea>
                </div>
              );
            }

            return (
              <div key={i}>
                <label className="block text-gray-700">{field.label}</label>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    required={field.required}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  >
                    <option value="">Select {field.label}</option>
                    {field.options.map((opt, idx) => (
                      <option key={idx} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    defaultValue={field.defaultValue}
                    min={field.min}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                  />
                )}
              </div>
            );
          })}

          {/* Submit button with dynamic color */}
          <button
            type="submit"
            className={`w-full py-3 rounded-full text-lg font-semibold hover:brightness-90 transition text-white ${
              buttonColor === "green" ? "bg-green-700" : buttonColor === "blue" ? "bg-blue-600" : "bg-gray-600"
            }`}
          >
            {submitText}
          </button>
        </form>
      </div>
    </div>
  );
}
