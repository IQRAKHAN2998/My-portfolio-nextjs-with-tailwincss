"use client"

interface Iprops{
  text:string
}

const Button = (props:Iprops) => {
  return (
    <button className="bg-slate-800 text-white text-bold text-3xl shadow-lg px-8 py-4 hover:shadow-lg duration-100 hover:scale-105 border-4 border-pink-950 rounded-lg ">
      {props.text}

    </button>
  )
}

export default Button

