const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f0f0f] via-[#1b1b1b] to-[#2b2b2b] text-gray-300 py-6 mt-16 border-t border-[#f3683a]/30 shadow-inner">
      <div className="container mx-auto text-center space-y-3">
        {/* Copyright */}
        <p className="text-sm tracking-wide text-gray-400">
          &copy; {new Date().getFullYear()} Iqra Khan. All Rights Reserved.
        </p>

        {/* Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-[#f3683a] transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#f3683a] transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#f3683a] transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Accent bar */}
        <div className="w-20 h-[2px] bg-gradient-to-r from-[#f3683a] to-[#ff9f59] mx-auto mt-3 rounded-full" />
      </div>
    </footer>
  );
};

export default Footer;


// const Footer = () => {
//   return (
    
//     <footer className="bg-[#5D4037] text-white py-4 mt-8">
//   <div className="container mx-auto text-center">
//     <p className="text-sm">&copy; 2024 My Website. All Rights Reserved.</p>
//     <div className="mt-2">
//       <a href="#" className="text-gray-400 hover:text-white px-3">Privacy Policy</a>
//       <a href="#" className="text-gray-400 hover:text-white px-3">Terms of Service</a>
//       <a href="#" className="text-gray-400 hover:text-white px-3">Contact Us</a>
//     </div>
//   </div>
//   </footer>

//   )
// }

// export default Footer