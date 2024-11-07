"use client";

import emailjs from 'emailjs-com';
import React, { useEffect } from 'react';
// (function () {
//     emailjs.init( 'Jng0gxxK5C2jcsbXWip4q')
    
// })()
const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_dkz739d', 'template_6jxfp0a', e.target as HTMLFormElement ,'Jng0gxxK5C2jcsbXWip4q')
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
        }, (error) => {
            console.log(error.text);
            alert("message send..");
        });
};

export default function Contact() {
    useEffect(() => {
        emailjs.init('Jng0gxxK5C2jcsbXWip4q'); // Initialize EmailJS in useEffect
    }, []);
    return (
        <div className="flex w-100% h-100vh bg-slate-900 justify-center m-20">
        <form className="bg-white flex flex-col p-2 w-90% max-w-screen-md" onSubmit={sendEmail}>
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
