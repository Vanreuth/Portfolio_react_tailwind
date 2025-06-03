import {code1,code2} from '../assets'

const Story = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-16">
                <div className="flex items-center justify-start">
                    <img
                        src={code1}
                        alt="Profile"
                        className="rounded-2xl shadow-xl object-cover w-full max-w-[480px] h-[320px] md:h-[360px] bg-[#23272b]"
                        style={{ objectPosition: 'center top' }}
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className=" font-semibold text-lg mb-2 tracking-wide">/ MY STORY</div>
                    <h1 className="text-4xl md:text-5xl font-medium  mb-6 leading-tight">
                        How I started as a web<br />developer
                    </h1>
                    <p className="text-lg  mb-4 max-w-xl">
                        I started my journey as a web developer by learning foundational technologies such as HTML, CSS, and JavaScript. Over time, I expanded my skills through online courses, practical projects, and collaborative experiences. This hands-on approach allowed me to gain proficiency in web development, leading to opportunities where I could apply and further refine my expertise in designing and building web solutions.
                    </p>
                </div>
            </div>
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-16">
                <div className="flex flex-col justify-center order-2 md:order-1">
                    <div className="font-semibold text-lg mb-2 tracking-wide">/ MY STORY</div>
                    <h1 className="text-4xl md:text-5xl font-medium  mb-6 leading-tight">
                        My first website design back in 2024<br />
                    </h1>
                    <p className="text-lg mb-4 max-w-xl">
                        In 2024, I have the opportunity for a Real-World Projects at KiloIT Specializing in ReactJS Framework and Software Development Life Cycle. My first project with my team involves creating a company profile. It is my first time working on a real project
                    </p>
                </div>
                <div className="flex items-center justify-center order-1 md:order-2">
                    <img
                        src={code2}
                        alt="Profile"
                        className="rounded-2xl shadow-xl object-cover w-full max-w-[480px] h-[320px] md:h-[360px] bg-[#23272b]"
                        style={{ objectPosition: 'center top' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Story
