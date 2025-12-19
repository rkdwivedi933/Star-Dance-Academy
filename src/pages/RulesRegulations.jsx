import React from 'react';

export default function RulesRegulations() {
  return (
    <div className="min-h-full bg-gray-400 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Rules & Regulations
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our guidelines ensure a safe, respectful, and productive learning environment for all students
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          {/* Student Behavior Rules */}
          <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-secondary px-8 py-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Student Behavior Rules
              </h2>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                All students are expected to maintain high standards of behavior and respect. The following rules must be followed at all times:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mt-0.5">
                    <span className="text-rose-600 font-semibold text-sm">1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Respect for Others</h3>
                    <p className="text-gray-600">Show courtesy and respect to instructors, staff, and fellow students at all times. Treat everyone with kindness and consideration.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mt-0.5">
                    <span className="text-rose-600 font-semibold text-sm">2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Positive Attitude</h3>
                    <p className="text-gray-600">Maintain a positive and enthusiastic attitude. Support your fellow dancers and contribute to an encouraging atmosphere.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mt-0.5">
                    <span className="text-rose-600 font-semibold text-sm">3</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Focus and Attention</h3>
                    <p className="text-gray-600">Give your full attention during class. Minimize distractions and listen carefully to instructions and corrections.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mt-0.5">
                    <span className="text-rose-600 font-semibold text-sm">4</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">No Bullying or Harassment</h3>
                    <p className="text-gray-600">Bullying, harassment, or discrimination of any kind will not be tolerated. This includes verbal, physical, or cyber bullying.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mt-0.5">
                    <span className="text-rose-600 font-semibold text-sm">5</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Appropriate Language</h3>
                    <p className="text-gray-600">Use appropriate and respectful language at all times. Profanity, offensive language, or inappropriate gestures are strictly prohibited.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mt-0.5">
                    <span className="text-rose-600 font-semibold text-sm">6</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Studio Property</h3>
                    <p className="text-gray-600">Treat all studio equipment, facilities, and property with care. Report any damage immediately to staff.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mt-0.5">
                    <span className="text-rose-600 font-semibold text-sm">7</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Mobile Devices</h3>
                    <p className="text-gray-600">Mobile phones must be silenced and stored away during class. No unauthorized photography, video recording, or social media posting during classes.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Attendance Policy */}
          <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Attendance Policy
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg ml-3">Punctuality</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Students must arrive at least 10 minutes before class start time to prepare properly. Late arrivals disrupt the class and may not be permitted to enter.
                  </p>
                  <p className="text-gray-600 text-sm">
                    If you arrive late, wait at the door and enter only when the instructor signals it is appropriate.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg ml-3">Regular Attendance</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Consistent attendance is essential for skill development and class cohesion. Students are expected to attend all scheduled classes.
                  </p>
                  <p className="text-gray-600 text-sm">
                    More than 3 unexcused absences in a term may affect your progression to the next level.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg ml-3">Absence Notification</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    If you cannot attend class, notify the academy at least 24 hours in advance via email or phone whenever possible.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Emergency absences should be communicated as soon as reasonably possible.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg ml-3">Make-Up Classes</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Make-up classes may be available for excused absences, subject to space availability and instructor discretion.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Contact the office to arrange make-up classes. No make-ups for unexcused absences.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Dress Code */}
          <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-violet-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Dress Code
              </h2>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Proper attire is required for all classes to ensure safety, freedom of movement, and a professional learning environment.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="font-semibold text-gray-900 text-lg mb-3">General Requirements</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700">Fitted, form-fitting clothing that allows instructors to see body alignment and movement</p>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700">Hair must be securely tied back and away from face (long hair in a bun or ponytail)</p>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700">Minimal jewelry - remove all dangling earrings, bracelets, and necklaces for safety</p>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700">Appropriate dance footwear as specified for each class style</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-purple-50 rounded-lg p-5">
                    <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Ballet Classes
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">Leotard, tights, and ballet shoes</p>
                    <p className="text-gray-600 text-sm">Optional: Ballet skirt or shorts</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-5">
                    <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Jazz/Contemporary
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">Leotard and fitted pants or leggings</p>
                    <p className="text-gray-600 text-sm">Jazz shoes or bare feet</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-5">
                    <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      Hip Hop/Street
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">Comfortable athletic wear</p>
                    <p className="text-gray-600 text-sm">Clean sneakers (indoor use only)</p>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-5">
                  <h3 className="font-semibold text-red-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Not Permitted
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Baggy or oversized clothing, jeans, outdoor shoes, chewing gum, or any attire that restricts movement or poses safety risks
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Safety Guidelines */}
          <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Safety Guidelines
              </h2>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Your safety is our top priority. All students must follow these safety guidelines to prevent injuries and maintain a secure environment.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mt-0.5">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">Warm-Up Participation</h3>
                      <p className="text-gray-600 text-sm">Always participate in warm-up exercises. Never skip or rush through them as they prevent injuries.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mt-0.5">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">Report Injuries Immediately</h3>
                      <p className="text-gray-600 text-sm">Inform your instructor immediately if you experience pain, discomfort, or injury during class.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mt-0.5">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">Hydration</h3>
                      <p className="text-gray-600 text-sm">Bring a water bottle to every class. Stay hydrated before, during, and after dancing.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mt-0.5">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">Personal Space</h3>
                      <p className="text-gray-600 text-sm">Maintain appropriate spacing from other dancers to avoid collisions during movement.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mt-0.5">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">Medical Disclosure</h3>
                      <p className="text-gray-600 text-sm">Inform instructors of any medical conditions, injuries, or physical limitations that may affect participation.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mt-0.5">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">Studio Access</h3>
                      <p className="text-gray-600 text-sm">Do not enter the studio before your instructor. Wait in the designated waiting area until called.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mt-0.5">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">Emergency Procedures</h3>
                      <p className="text-gray-600 text-sm">Familiarize yourself with emergency exits and evacuation procedures. Follow instructor directions during emergencies.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mt-0.5">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">Clean Environment</h3>
                      <p className="text-gray-600 text-sm">Help keep the studio clean. Report spills or hazards immediately to prevent accidents.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Instructor Authority */}
          <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Instructor Authority
              </h2>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Instructors are responsible for maintaining a safe, productive, and respectful learning environment. Their authority must be respected at all times.
              </p>
              <div className="space-y-5">
                <div className="bg-amber-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Instructors Have the Right To:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-amber-600 mr-3 mt-1">•</span>
                      <p className="text-gray-700">Set and enforce classroom rules and expectations for behavior and performance</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-600 mr-3 mt-1">•</span>
                      <p className="text-gray-700">Make corrections and provide constructive feedback to improve technique and artistry</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-600 mr-3 mt-1">•</span>
                      <p className="text-gray-700">Modify choreography, class structure, or exercises based on student needs and safety</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-600 mr-3 mt-1">•</span>
                      <p className="text-gray-700">Remove disruptive students from class and report behavioral issues to academy administration</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-600 mr-3 mt-1">•</span>
                      <p className="text-gray-700">Determine appropriate class placement and level advancement for each student</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-600 mr-3 mt-1">•</span>
                      <p className="text-gray-700">Refuse entry to students who arrive excessively late or are improperly dressed</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Students Must:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-amber-600 mr-3 mt-1">•</span>
                      <p className="text-gray-700">Follow all instructions promptly and without argument or complaint</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-600 mr-3 mt-1">•</span>
                      <p className="text-gray-700">Accept corrections graciously and work to implement feedback</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-600 mr-3 mt-1">•</span>
                      <p className="text-gray-700">Speak to instructors respectfully and professionally at all times</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-600 mr-3 mt-1">•</span>
                      <p className="text-gray-700">Address concerns through appropriate channels (speak to instructor after class or contact administration)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">Note:</span> If you have concerns about an instructor's feedback or teaching methods, please schedule a private meeting with the instructor or academy director. Do not confront instructors during class time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Discipline Policy */}
          <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-rose-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Discipline Policy
              </h2>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                We maintain a progressive discipline policy to address rule violations while giving students opportunities to improve their behavior.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-400 rounded-r-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 text-white font-bold flex items-center justify-center mr-4">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">First Offense - Verbal Warning</h3>
                      <p className="text-gray-700">Student receives a private verbal warning from the instructor. Incident is documented and parents/guardians are informed for students under 18.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-400 rounded-r-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-400 text-white font-bold flex items-center justify-center mr-4">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Second Offense - Written Warning</h3>
                      <p className="text-gray-700">Formal written warning issued and placed in student file. Meeting with parents/guardians required for students under 18. Student may be temporarily removed from class.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-rose-50 border-l-4 border-red-500 rounded-r-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 text-white font-bold flex items-center justify-center mr-4">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Third Offense - Suspension</h3>
                      <p className="text-gray-700">Student suspended from classes for 1-2 weeks without refund. Mandatory meeting with academy director and parents/guardians to discuss path forward and conditions for return.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-100 to-gray-200 border-l-4 border-gray-600 rounded-r-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-600 text-white font-bold flex items-center justify-center mr-4">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Fourth Offense - Dismissal</h3>
                      <p className="text-gray-700">Permanent dismissal from the academy. No refunds issued for remaining classes or fees. Student may not re-enroll for a minimum of one year.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-red-900 mb-3 flex items-center text-lg">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Severe Violations - Immediate Dismissal
                </h3>
                <p className="text-gray-700 mb-3">The following behaviors will result in immediate dismissal without progressive discipline:</p>
                <div className="space-y-2 ml-6">
                  <div className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <p className="text-gray-700">Physical violence or threats of violence toward anyone</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <p className="text-gray-700">Possession of weapons, drugs, or alcohol on academy premises</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <p className="text-gray-700">Theft or vandalism of academy or personal property</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <p className="text-gray-700">Sexual harassment or inappropriate conduct of any kind</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <p className="text-gray-700">Severe or repeated bullying, harassment, or discriminatory behavior</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">Appeals Process:</span> Students or parents/guardians may appeal disciplinary decisions by submitting a written request to the academy director within 7 days of the incident. The director's decision on appeals is final.
                </p>
              </div>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-gradient-to-br from-primary  to-secondary rounded-2xl shadow-xl p-8 text-center text-white">
            <svg className="w-16 h-16 mx-auto mb-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <h3 className="text-2xl font-bold mb-3">Acknowledgment</h3>
            <p className="text-lg leading-relaxed mb-4 opacity-95">
              By enrolling in classes at our Dance Academy, you acknowledge that you have read, understood, and agree to abide by all rules and regulations outlined on this page.
            </p>
            <p className="text-base opacity-90">
              Thank you for helping us maintain a positive, safe, and inspiring environment for all dancers!
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}