"use client";

interface Iprops {
  text: string;
}

const Button = (props: Iprops) => {
  return (
    <button
      className="bg-gradient-to-r from-[#f3683a] to-[#ff9f59] text-white font-semibold text-lg tracking-wide px-8 py-3 rounded-full shadow-lg hover:from-[#ff9f59] hover:to-[#f3683a] hover:shadow-[#f3683a]/50 hover:scale-105 transition-all duration-300"
    >
      {props.text}
    </button>
  );
};

export default Button;
