import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Contact Us
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="text-center">
            <p className="text-lg text-gray-700">
              Have questions or feedback? Reach out to us!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Social Media Handles */}
            <div className="bg-white rounded-md p-4 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">
                Connect with Us on Social Media
              </h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="https://www.facebook.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            {/* Email */}
            <div className="bg-white rounded-md p-4 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">
                Send Us an Email
              </h3>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:contact@example.com"
                  className="text-indigo-600 hover:underline"
                >
                  contact@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
