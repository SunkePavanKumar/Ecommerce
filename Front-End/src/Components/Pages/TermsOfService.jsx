import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto mt-8 p-4 shadow-md rounded-md bg-slate-100">
      <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Acceptance of Terms</h2>
        <p>
          By accessing or using this website, you agree to be bound by these
          Terms of Service. If you do not agree with any part of these terms,
          you may not use our services.
        </p>
      </section>

      {/* Add other sections similarly */}

      <div className="mt-8">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox text-blue-500" />
          <span className="ml-2">
            I have read and agree to the Terms of Service
          </span>
        </label>
      </div>

      <div className="mt-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue">
          Accept and Continue
        </button>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p>
          Please note that these terms may be revised, and you are responsible
          for regularly reviewing any changes.
        </p>
        <p>
          For any questions or concerns, contact us at{" "}
          <a href="mailto:info@example.com">pavan.1413489@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
