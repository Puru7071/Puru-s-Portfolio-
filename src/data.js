import images from "./assets/images";
const data = {
    expArr: [
        {
            image: images.belzabar,
            post: "Computer Scientist",
            name: "Belzabar Software Design",
            timeline: "07/2024 – Present",
            desc: <ul className='text-white list-disc list-inside tracking-tighter text-xl'>
                <li>Transitioned to a full-time role, continuing to work on MERN stack projects.</li>
                <li>Collaborated with the UI team to design and implement user-friendly interfaces.</li>
                <li>Enhanced and optimized applications, leveraging DSA for performance improvements.</li>
                <li>Worked closely with the backend team for API integration and seamless data flow.</li>
            </ul>,
            mobileDesc: <p className="text-white tracking-tighter text-base text-justify">
                Transitioned to a full-time role, working on MERN stack projects and
                collaborating with the UI team on user-friendly interfaces. Optimized
                applications using DSA for better performance and worked with the backend team
                for smooth API integration.
            </p>
        },
        {
            image: images.belzabar,
            post: "Computer Scientist Intern",
            name: "Belzabar Software Design",
            timeline: "08/2023 – 06/2024",
            desc: <ul className='text-white list-disc list-inside tracking-tighter text-xl'>
                <li>Contributed to projects using the MERN stack.</li>
                <li>Collaborated with senior developers to learn MVC architecture.</li>
                <li>Designed and implemented user-friendly interfaces as part of the UI team.</li>
                <li>Enhanced understanding of full-stack development through hands-on experience.</li>
            </ul>,
            mobileDesc: <p className="text-white tracking-tighter text-base text-justify">
                Contributed to MERN stack projects, collaborating with senior developers to
                learn MVC architecture. Designed and implemented user-friendly interfaces as
                part of the UI team while enhancing full-stack development skills through hands-on
                experience.
            </p>
        },
        {
            image: images.boiam,
            post: "Website Developer Intern",
            name: "Baoiam Innovations Pvt Ltd",
            timeline: "05/2022 – 11/2022",
            desc: <ul className='text-white list-disc list-inside tracking-tighter text-xl'>
                <li>Collaborated on projects using Git and stand-up meetings for task management.</li>
                <li>Created responsive, cross-browser-compatible websites with JavaScript and React.</li>
                <li>Developed scalable server-side applications with Node.js and RESTful APIs.</li>
                <li>Delivered modern, responsive designs for various devices.</li>
            </ul>,
            mobileDesc: <p className="text-white tracking-tighter text-base text-justify">
                Collaborated on projects using Git and stand-up meetings for task management.
                Created responsive websites with JavaScript and React,
                and developed scalable server-side applications with Node.js and RESTful APIs.
                Delivered modern, responsive designs for various devices.
            </p>
        }
    ],
    projects: [
        {
            id: "01",
            name: "Instagram Clone",
            description: <p className='text-white mt-[10px] tracking-tighter text-[20px] text-justify h-[180px] overflow-hidden'>
                This MVC based application features a modern, responsive design with enhanced security,
                including email verification, community guidelines, and account privacy options.
                It offers dynamic stories, highlights, posts, comments,
                likes, real-time notifications, and custom APIs for seamless functionality.
            </p>,
            youtubeFrame: <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/hal-K0-5fZ0?si=3VWqjQW67YlPIfe1&autoplay=1&mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>,
            linkedInLink: "https://www.linkedin.com/feed/update/urn:li:activity:7201714107215998976/",
            githubURL: "https://github.com/Puru7071/INSTA-CLONE-MERN",
            techUsed: [images?.javaScript, images?.mongo, images?.express, images?.reactJs, images?.node, images?.tailwind, images?.material],
            thumbnail: images?.p1
        },
        {
            id: "02",
            name: "CipherSpace: D-Chat App",
            description: <p className='text-white mt-[10px] tracking-tighter text-[20px] text-justify h-[180px] overflow-hidden'>
                A decentralized chat application offering secure messaging and
                real-time notifications on blockchain. Features include custom
                captcha for registration, avatar personalization, and seamless user
                registration with friend addition through smart contracts. The intuitive
                UI ensures smooth interactions.
            </p>
            ,
            youtubeFrame: <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/LQdwT71puEI?si=zdWJ3cB85yJpMyIQ&autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>,
            linkedInLink: "https://www.linkedin.com/feed/update/urn:li:activity:7258899408811876352/",
            githubURL: "https://github.com/Puru7071/Decentralised-Chat-App",
            techUsed: [images?.javaScript, images?.solidity, images?.ether, images?.reactJs, images?.tailwind, images?.metamask],
            thumbnail: images?.p2
        },
        {
            id: "03",
            name: "Portfolio Website",
            description: <p className='text-white mt-[10px] tracking-tighter text-[20px] text-justify h-[180px] overflow-hidden'>
                Built a ReactJS portfolio website with a modern,
                responsive design showcasing projects, skills, and achievements.
                Features include dynamic project cards, smooth animations with Framer Motion,
                and links to GitHub/LinkedIn.It highlights my expertise in React and front-end development.
            </p>
            ,
            youtubeFrame: <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/sSTXOTqC_3g?si=NmFjm92oODlnYXIj&autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>,
            linkedInLink: "https://www.linkedin.com/feed/update/urn:li:activity:7258899408811876352/",
            githubURL: "https://github.com/Puru7071/Puru-s-Portfolio-",
            techUsed: [images?.javaScript, images?.reactJs, images?.tailwind, images?.framer],
            thumbnail: images?.p3
        },
        {
            id: "04",
            name: "FAssist: Market Analyzer",
            description: <p className='text-white mt-[10px] tracking-tighter text-[20px] text-justify h-[180px] overflow-hidden'>
                Developed FAssist, an award-winning website using MVC architecture
                and web scraping to monitor market competition. Features include
                top performer insights, trending keywords, images from social media,
                and expert advice. Won 3rd prize at Flipkart GRiD 4.0 Challenge.
            </p>
            ,
            youtubeFrame: <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/cMFjmnN_1Og?si=2fd4GMFt55IfkFLL&autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>,
            githubURL: "https://github.com/Puru7071/FlipKart-Grid-4.0",
            techUsed: [images?.mongo, images?.express, images?.node, images?.javaScript, images?.html, images?.boot],
            thumbnail: images?.p4
        }
    ],
    techs: [
        { image: images?.cpp, desc: "" },
        { image: images?.html, desc: "" },
        { image: images?.javaScript, desc: "" },
        { image: images?.mongo, desc: "" },
        { image: images?.express, desc: "" },
        { image: images?.reactJs, desc: "" },
        { image: images?.node, desc: "" },
        { image: images?.tailwind, desc: "" },
        { image: images?.solidity, desc: "" },
        { image: images?.css, desc: "" },
    ],
    educations: [
        {
            name: "BE-Computer Science",
            insitute: "Chandigarh University",
            timeline: "2020 – 2024",
            location: "Gharuan ,Mohali, India",
            grade: "CGPA 8.47",
            mobileGrade: "8.47 / 10"
        },
        {
            name: "Class XII",
            insitute: "Vishwa Bharati Public School",
            timeline: "2019 – 2020",
            location: "Yamuna Nagar, India",
            grade: "Percentage 94.4%(PCM)",
            mobileGrade: "94.47% / 100"
        },
        {
            name: "Class X",
            insitute: "Swami Vivekananda Public School",
            timeline: "2017 - 2018",
            location: "Yamuna Nagar, India",
            grade: "Percentage 94%",
            mobileGrade: "94% / 100"
        }
    ],
    achievements: [
        {
            name: "Flipkart GRiD 4.0",
            desc: "Secured 3rd place among 1.6L+ teams.",
            link: "https://drive.google.com/file/d/1LYct9KThtrb7CrGmVoASjM5jVrSIdI6x/view?usp=sharing"
        },
        {
            name: "Google Hash Code",
            desc: "Ranked 3768 globally out of 9000+ teams.",
            link: "https://drive.google.com/file/d/1m7OJEY2hAI2xkRFKkDYTTd-MNu51ldbl/view?usp=sharing"
        },
        {
            name: "GFG Top 20",
            desc: "Top 20 coder from CU on GFG platform.",
            link: "https://www.geeksforgeeks.org/user/purubhargava011/"
        },
        {
            name: "Smart-Tech Ideathon",
            desc: "Finalist at CU's Engineers Day event.",
            link: "https://drive.google.com/file/d/1od4N9EJ1rfe-pYKDk1pteNzmUeLf0lYp/view?usp=drive_link"
        }
    ]
}

export default data; 