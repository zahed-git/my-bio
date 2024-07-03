import { FaBeer, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <h1 className="text-white">.</h1>
            <h1 className="mt-20"></h1>
            <div className="mt-20  about-me-container d-flex justify-content-around align-items-center ">
                <div className="about-me-text space-y-4">
                    <h1 className="text-4xl font-bold">
                        HI !<br />
                        I'M Abu Zahed
                    </h1>
                    <h5>Web Developer || React Developer || Programmer</h5>
                    <p className="mt-5 w-75">
                        I am an enthusiastic JavaScript developer with knowing some
                        framework for the frontend and the backend. I'am
                        basically a MERN developer.
                    </p>
                    <div className=" flex text-red-600 font-bold text-4xl gap-4">
                        <a href="https://github.com/zahed-git"><FaGithub></FaGithub></a>
                        <a href="https://www.linkedin.com/in/abu-zahed-97b39130a/"><FaLinkedin></FaLinkedin></a>

                    </div>
                    <div className="my-photo-box">
                        <img className="w-100 pr-2 pt-2" src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner