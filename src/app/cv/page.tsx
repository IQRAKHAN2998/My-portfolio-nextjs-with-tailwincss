"use client";

import { Download } from "lucide-react";

export default function Resume() {
  return (
    <section className="bg-gray-100 text-gray-900 py-16 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 border border-gray-200">

        {/* Header */}
        <div className="text-center border-b-4 border-gray-300 pb-6 mb-10">
          <h1 className="text-5xl font-extrabold tracking-wide text-gray-800">IQRA KHAN</h1>
          <p className="text-lg text-gray-600 mt-2 font-medium">Front-End Web Developer</p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left Column */}
          <div className="space-y-8">
            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-700 border-b pb-1 mb-3 border-gray-300">Contact</h2>
              <p>📞 0323-0207681</p>
              <p>📧 iqrakhan2998@gmail.com</p>
              <p>📍 Liaquatabad, Karachi Division, Sindh, Pakistan</p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-2xl font-bold text-gray-700 border-b pb-1 mb-3 border-gray-300">Skills</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>HTML, CSS, JavaScript, TypeScript</li>
                <li>Tailwind CSS, Next.js, React</li>
                <li>Responsive & Mobile-First Design</li>
                <li>UI/UX Focused & Clean Layouts</li>
                <li>Version Control: Git & GitHub</li>
                <li>Python + Streamlit (Data & Web Apps)</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Profile */}
            <div>
              <h2 className="text-2xl font-bold text-gray-700 border-b pb-1 mb-3 border-gray-300">Profile</h2>
              <p className="text-gray-700 leading-relaxed">
                A detail-oriented and innovative Frontend Developer with a strong passion
                for crafting seamless digital experiences. I have hands-on experience in
                designing and developing responsive, user-friendly, and visually appealing
                interfaces that enhance engagement and satisfaction.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold text-gray-700 border-b pb-1 mb-3 border-gray-300">Education</h2>
              <ul className="space-y-1 text-gray-700">
                <li>🎓 Matriculation (Science) — S-G School</li>
                <li>🎓 Intermediate (Commerce) — HI Osmania College</li>
                <li>🎓 Karachi University — Bachelor Studies</li>
              </ul>
            </div>

            {/* Certificate */}
            <div>
              <h2 className="text-2xl font-bold text-gray-700 border-b pb-1 mb-3 border-gray-300">Certificate</h2>
              <p className="text-gray-700">
                🏅 2019 | Apptech Learning — Best Presentation Award, Excelled in MS Office (Office Automation)
              </p>
            </div>
          </div>
        </div>

        {/* Download PDF Button */}
        <div className="text-center mt-12">
          <a
            href="/Iqra_Khan_Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300"
          >
            <Download className="w-5 h-5" /> Download Resume (PDF)
          </a>
        </div>

      </div>
    </section>
  );
}
