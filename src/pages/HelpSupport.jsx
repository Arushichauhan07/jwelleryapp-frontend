import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiChevronDown,
  FiChevronUp,
  FiPackage,
  FiRefreshCcw,
  FiShield,
} from "react-icons/fi";

const faqs = [
  {
    question: "How can I track my order?",
    answer:
      "Go to My Orders in your account and click on the order to view its current status.",
  },
  {
    question: "Can I return my jewelry?",
    answer:
      "Yes. We offer a 7-day return policy for eligible products. Customized items cannot be returned.",
  },
  {
    question: "How do I know my jewelry is authentic?",
    answer:
      "All our jewelry comes with authenticity certification and quality assurance.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, Credit/Debit Cards, Net Banking, Wallets, and Cash on Delivery (where available).",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us via phone, email, or live chat from this page.",
  },
];

export default function HelpSupport() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="">
        <div className="max-w-7xl mx-auto px-6 py-14 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Help & Support
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We're here to help with your orders, returns, jewelry care,
            payments, and anything else you need.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Contact Cards */}

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition">
            <FiPhone className="mx-auto text-4xl text-yellow-600 mb-4" />
            <h3 className="font-semibold text-xl">
              Call Us
            </h3>
            <p className="text-gray-500 mt-2">
              +91 98765 43210
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition">
            <FiMail className="mx-auto text-4xl text-yellow-600 mb-4" />
            <h3 className="font-semibold text-xl">
              Email
            </h3>
            <p className="text-gray-500 mt-2">
              support@yourstore.com
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition">
            <FiMessageCircle className="mx-auto text-4xl text-yellow-600 mb-4" />
            <h3 className="font-semibold text-xl">
              Live Chat
            </h3>
            <p className="text-gray-500 mt-2">
              Available 9 AM - 8 PM
            </p>
          </div>

        </div>

        {/* Quick Help */}

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FiPackage className="text-3xl text-yellow-600 mb-4" />

            <h3 className="font-semibold text-lg">
              Order Support
            </h3>

            <p className="text-gray-500 mt-2">
              Track orders, update shipping address, or report delivery issues.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FiRefreshCcw className="text-3xl text-yellow-600 mb-4" />

            <h3 className="font-semibold text-lg">
              Returns & Refunds
            </h3>

            <p className="text-gray-500 mt-2">
              Learn about returns, exchanges, and refund timelines.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <FiShield className="text-3xl text-yellow-600 mb-4" />

            <h3 className="font-semibold text-lg">
              Jewelry Care
            </h3>

            <p className="text-gray-500 mt-2">
              Keep your jewelry shining with our care and storage tips.
            </p>
          </div>

        </div>

        {/* FAQ */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >

                <button
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-5"
                >
                  <span className="font-medium text-left">
                    {faq.question}
                  </span>

                  {active === index ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </button>

                {active === index && (
                  <div className="px-5 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                )}

              </div>

            ))}

          </div>

        </div>

        {/* Contact Form */}

        <div className="mt-16 bg-white rounded-2xl shadow-sm p-8">

          <h2 className="text-3xl font-bold mb-8">
            Contact Support
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg p-3 w-full"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-lg p-3 w-full"
            />

          </div>

          <input
            type="text"
            placeholder="Order ID (Optional)"
            className="border rounded-lg p-3 w-full mt-6"
          />

          <textarea
            rows={5}
            placeholder="How can we help you?"
            className="border rounded-lg p-3 w-full mt-6"
          />

          <button className="mt-6 bg-[#6D0F24] hover:bg-[#52091b] text-white px-8 py-3 rounded-lg transition">
            Submit Request
          </button>

        </div>

        {/* Support Hours */}

        <div className="mt-16 text-center">

          <h3 className="text-2xl font-semibold">
            Customer Support Hours
          </h3>

          <p className="text-gray-500 mt-3">
            Monday - Saturday
          </p>

          <p className="text-gray-700 font-medium">
            9:00 AM - 8:00 PM IST
          </p>

        </div>

      </div>

    </div>
  );
}