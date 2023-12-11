import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto mt-8 p-4 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Information Collection and Use
        </h2>
        <p>
          We collect and use your personal information for various purposes,
          including but not limited to providing and improving our services.
        </p>
      </section>

      {/* Add other sections similarly */}

      <div className="mt-8">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox text-blue-500" />
          <span className="ml-2">
            I have read and agree to the Privacy Policy
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
          Please note that this policy may be revised, and you are responsible
          for regularly reviewing any changes.
        </p>
        <p>
          For any questions or concerns, contact us at{" "}
          <a href="mailto:privacy@example.com">privacy@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
