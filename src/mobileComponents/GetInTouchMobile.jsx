import React from "react";
import Line from "../components/Line";
import Heading from "../components/Heading";
import { SiMinutemailer } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion"
import toast from "react-hot-toast";

function GetInTouchMobile() {
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
            toast.success("Message Sent!!");
        }
    };

    return (
        <div className="h-[auto] w-[100%] flex flex-col items-center">
            <Line />
            <Heading heading={"Get In Touch"} />
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                onSubmit={onSubmit} className="w-[100%] m-auto h-auto flex flex-col p-[15px] rounded-xl"
            >
                <h1 className="text-2xl mb-[30px] text-[#fb8500] font-semibold flex flex-row justify-start gap-[20px] items-center"><MdEmail className="text-4xl text-white" />Send me a Message</h1>
                <div className="mb-[20px] flex flex-col gap-[10px] w-[100%]">
                    <label className="text-white text-lg mb-[0px]">Please enter your name</label>
                    <input placeholder="Your name" type="text" name="name" className="h-[40px] outline-none rounded-lg bg-[white] border-b-[4px] border-[#fb8500] px-[20px] text-black text-lg tracking-tighter placeholder:text-black" />
                </div>
                <div className="mb-[20px] flex flex-col gap-[10px] w-[100%]">
                    <label className="text-white text-lg tracking-tighter mb-[0px]">Please enter your email</label>
                    <input placeholder="Your email" type="email" name="email" className="h-[40px] outline-none rounded-lg bg-[white] border-b-[4px] border-[#fb8500] px-[20px] text-black text-lg tracking-tighter placeholder:text-black" />
                </div>
                <div className="flex flex-col gap-[10px] w-[100%] mt-[10px]">
                    <h1 className="text-white text-lg mb-[0px]">Please enter your message</h1>
                    <textarea placeholder="Your message" name="message" className="h-[120px] outline-none rounded-lg bg-[white] border-b-[4px] border-[#fb8500] px-[20px] pt-[10px] text-black text-xl tracking-tighter placeholder:text-black"></textarea>
                </div>
                <button type="submit" className="px-[5px] py-[10px] text-[white] bg-[#fb8500] text-lg mt-[60px] font-medium rounded-md w-[180px] flex flex-row justify-center items-center gap-[10px] m-auto">
                    Send Message <SiMinutemailer className="text-2xl" />
                </button>
            </motion.form>
            <Line />
        </div>
    );
}

export default GetInTouchMobile;