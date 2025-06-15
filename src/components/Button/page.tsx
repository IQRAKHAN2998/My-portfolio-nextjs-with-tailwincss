"use client";

interface Iprops {
  text: string;
}

const Button = (props: Iprops) => {
  return (
    <button
      className="bg-[#5D4037] text-white font-semibold text-xl tracking-wide px-6 py-3 rounded-full shadow-md hover:bg-[#4E342E] hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      {props.text}
    </button>
  );
};

export default Button;
