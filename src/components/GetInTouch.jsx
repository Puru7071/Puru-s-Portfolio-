import React from "react";
import Line from "./Line";
import Heading from "./Heading";
import { SiMinutemailer } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion"

function GetInTouch() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "a6cfd389-4133-4e9e-b73a-96cf77dd417e");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    return (
        <div className="h-[auto] w-[100%] flex flex-col items-center">
            <Line />
            <Heading heading={"Get In Touch"} />
            <motion.form
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1}}
                onSubmit={onSubmit} className="w-[90%] m-auto h-auto flex flex-col p-10 rounded-xl"
            >
                <h1 className="text-3xl mb-[40px] text-[#fb8500] font-semibold flex flex-row justify-start gap-[20px] items-center"><MdEmail className="text-4xl text-white" />Send me a Message</h1>
                <div className="flex flex-row w-[100%] gap-[10px] justify-between">
                    <div className="mb-[20px] flex flex-col gap-[10px] w-[48%]">
                        <label className="text-white text-xl mb-[5px]">Please enter your name</label>
                        <input placeholder="Your name" type="text" name="name" className="h-[50px] outline-none rounded-lg bg-[white] border-b-[4px] border-[#fb8500] px-[20px] text-black text-xl tracking-tighter placeholder:text-black" />
                    </div>
                    <div className="mb-[20px] flex flex-col gap-[10px] w-[48%]">
                        <label className="text-white text-xl tracking-tighter mb-[5px]">Please enter your email</label>
                        <input placeholder="Your email" type="email" name="email" className="h-[50px] outline-none rounded-lg bg-[white] border-b-[4px] border-[#fb8500] px-[20px] text-black text-xl tracking-tighter placeholder:text-black" />
                    </div>
                </div>
                <div className="flex flex-col gap-[10px] w-[100%] mt-[20px]">
                    <h1 className="text-white text-xl mb-[5px]">Please enter your message</h1>
                    <textarea placeholder="Your message" name="message" className="h-[150px] outline-none rounded-lg bg-[white] border-b-[4px] border-[#fb8500] p-[20px] text-black text-xl tracking-tighter placeholder:text-black"></textarea>
                </div>
                <button type="submit" className="px-[10px] py-[10px] text-[white] bg-[#fb8500] text-xl mt-[60px] font-medium rounded-md w-[220px] flex flex-row justify-center items-center gap-[10px]">
                    Send Message <SiMinutemailer className="text-3xl" />
                </button>
            </motion.form>
            <Line />
        </div>
    );
}

export default GetInTouch;