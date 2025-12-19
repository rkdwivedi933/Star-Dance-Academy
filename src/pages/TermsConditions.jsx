import React from "react";

export default function TermsConditions() {
  return (
    <div className="min-h-full py-10  bg-gray-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-20">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Last updated: December 19, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 space-y-10">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-8 bg-primary mr-3 rounded"></span>
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to our Dance Academy. These Terms and Conditions govern your enrollment and participation in our dance classes and programs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree with any part of these terms, you should not register for our classes.
            </p>
          </section>

          {/* Admission */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-8 bg-primary mr-3 rounded"></span>
              Admission & Enrollment Rules
            </h2>

            <div className="space-y-4">
              {["Eligibility", "Registration Process", "Class Capacity"].map(
                (title, i) => (
                  <div key={i} className="bg-primary/5 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                      {title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Students must meet academy requirements. Enrollment is
                      subject to availability and instructor assessment.
                    </p>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Fee Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-8 bg-primary mr-3 rounded"></span>
              Fee Payment Policy
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-primary/20 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Payment Methods
                </h3>
                <p className="text-gray-600 text-sm">
                  Cash, cards, bank transfer & online payments accepted.
                </p>
              </div>

              <div className="border border-primary/20 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Late Payments
                </h3>
                <p className="text-gray-600 text-sm">
                  Late fees may apply. Pending dues may restrict attendance.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-5 mt-4">
              <p className="text-gray-700">
                <span className="font-semibold">Important:</span> Fees are
                non-refundable and non-transferable.
              </p>
            </div>
          </section>

          {/* Attendance */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-8 bg-primary mr-3 rounded"></span>
              Class Timings & Attendance
            </h2>

            <div className="bg-primary/5 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                Students must arrive on time. Missed classes are not refundable.
              </p>
            </div>
          </section>

          {/* Cancellation */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-8 bg-primary mr-3 rounded"></span>
              Cancellation & Refund Policy
            </h2>

            <div className="space-y-3 ml-4">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold mr-3">
                    {n}
                  </span>
                  <p className="text-gray-700">
                    Refund eligibility depends on cancellation timing.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Code of Conduct */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-8 bg-primary mr-3 rounded"></span>
              Code of Conduct
            </h2>

            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                Respect instructors, students, and academy property at all
                times.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-primary/5 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-8 bg-primary mr-3 rounded"></span>
              Questions or Concerns
            </h2>

            <p className="text-gray-700 mb-4">
              Contact us for any questions regarding terms & conditions.
            </p>

            <a
              href="mailto:info@danceacademy.com"
              className="text-primary hover:underline"
            >
              info@danceacademy.com
            </a>
          </section>

          {/* Footer */}
          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              By enrolling, you agree to these Terms & Conditions.
            </p>
            <p className="text-sm font-medium text-gray-900">
              Thank you for choosing our Dance Academy!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
