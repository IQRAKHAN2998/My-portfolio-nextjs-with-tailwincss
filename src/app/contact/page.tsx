"use client";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EFEBE9] px-4">
      <form className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md space-y-4">
        <h3 className="font-bold text-3xl text-center text-[#5D4037]">Contact Me</h3>

        <input
          type="text"
          name="Your_Name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
        />

        <input
          type="email"
          name="Email_Id"
          placeholder="Email"
          required
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
        />

        <input
          type="number"
          name="Phone_No"
          placeholder="Phone"
          required
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
        />

        <textarea
          name="Message"
          placeholder="Message"
          rows={4}
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#8D6E63] text-white py-3 rounded-md hover:bg-[#6D4C41] transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}
