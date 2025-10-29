"use client";

import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dkz739d", // your actual service ID
        "template_6jxfp0a", // your actual template ID
        form.current!,
        "nZEO4bX0a9up3zctf" // your public key
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        alert("Failed to send message: " + error.text);
      });
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#0a0909] text-white p-6 md:p-12">

      {/* Left Side — Form */}
      <div className="w-full md:w-[420px] bg-[#131a3d] rounded-2xl p-8 shadow-2xl hover:shadow-[#f3683a]/40 transition-all duration-300">
        
        {/* Rotated Title */}
        <div className="text-center mb-10">
          <h1 className="inline-block bg-[#d64b1f] text-white text-3xl md:text-4xl font-extrabold py-3 px-8 transform -rotate-3 shadow-lg rounded-md">
            CONTACT ME
          </h1>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="Your_Name"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f3683a]"
          />

          <input
            type="email"
            name="Email_Id"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f3683a]"
          />

          <input
            type="number"
            name="Phone_No"
            placeholder="Phone Number"
            required
            className="w-full p-3 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f3683a]"
          />

          <textarea
            name="Message"
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f3683a]"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-[#f3683a] hover:bg-[#f57c40] transition-colors font-semibold"
          >
            Send
          </button>
        </form>
      </div>

      {/* Right Side — Personal Info */}
      <div className="mt-10 md:mt-0 md:ml-16 text-gray-300 max-w-sm">
        <h4 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">Get in Touch</h4>
        <ul className="space-y-4 text-lg">
          <li>📍 Karachi, Pakistan</li>
          <li>📧 iqrakhan2998@gmail.com</li>
          <li>📞 +92 323-0207681</li>
          <li>
            💼{" "}
            <a
              href="https://www.linkedin.com/in/iqra-khan2998"
              target="_blank"
              className="text-[#f3683a] hover:underline"
            >
              LinkedIn Profile
            </a>
          </li>
        
        </ul>
      </div>
    </section>
  );
}

// "use client";

// import { useRef } from "react";
// import emailjs from "emailjs-com";

// export default function Contact() {
//   const form = useRef(null);

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_dkz739d",     // ← Replace this with your actual service ID
//         "template_6jxfp0a",    // ← Replace this with your template ID
//         form.current!,
//         "nZEO4bX0a9up3zctf"      // ← Replace this with your public key
//       )
//       .then(() => {
//         alert("Message sent successfully!");
//       })
//       .catch((error) => {
//         alert("Failed to send message: " + error.text);
//       });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#EFEBE9] px-4">
//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md space-y-4"
//       >
//         <h3 className="font-bold text-3xl text-center text-[#5D4037]">Contact Me</h3>

//         <input
//           type="text"
//           name="Your_Name"
//           placeholder="Your Name"
//           required
//           className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
//         />

//         <input
//           type="email"
//           name="Email_Id"
//           placeholder="Email"
//           required
//           className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
//         />

//         <input
//           type="number"
//           name="Phone_No"
//           placeholder="Phone"
//           required
//           className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
//         />

//         <textarea
//           name="Message"
//           placeholder="Message"
//           rows={4}
//           className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full bg-[#8D6E63] text-white py-3 rounded-md hover:bg-[#6D4C41] transition-colors"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }
