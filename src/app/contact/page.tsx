"use client";

export default function Contact() {
  
    return (
        <div className="flex w-100% h-100vh bg-slate-900 justify-center m-20">
        <form className="bg-white flex flex-col p-2 w-90% max-w-screen-md" 
       
        >
            <h3 className="font-bold mb-4 text-3xl text-center">Contact Me</h3>

            <input type="text" name="Your_Name" placeholder="Your_Name" required className="border-0 m-1 p-2 font-semibold bg-slate-300" />
            <input type="email" name="Email_Id" placeholder="Email_Id" required className="border-0 m-1 p-2 font-semibold bg-slate-300" />
            <input type="number" name="Phone_No" placeholder="Phone_No" required className="border-0 m-1 p-2 font-semibold bg-slate-300" />
            <textarea name="Message" placeholder="Message" className="border-0 m-1 p-2 font-semibold bg-slate-300"></textarea>
            <button type="submit" className="m-4 border-2 font-semibold bg-slate-400">Send</button>
        </form>
    </div>

    );
}
