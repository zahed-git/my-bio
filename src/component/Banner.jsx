import { FaGithub, FaLinkedin, FaDownload, FaCheck } from "react-icons/fa";
import img from '../assets/img.png'
import 'animate.css';

const Banner = () => {


    return (
        <div className="px-6">
            <h1 className="text-white">.</h1>
            <h1 className="mt-20"></h1>
            <div className="mt-20 my-10  md:flex lg:flex  justify-around ">
                <div className="about-me-text  max-w-96  my-auto text-center animate__animated animate__fadeInRight" >
                    <h1 className="text-4xl font-bold text-blue-600 animate__animated animate__rubberBand">
                        HI !<br />
                        I'M Abu Zahed
                    </h1>

                    <div className="text-xl font-bold text-red-500 py-4">

                        Web Developer  || React Developer || Programmer</div>
                    <p className="mt-5 w-75 text-xl">
                        I am an enthusiastic JavaScript developer with knowing some
                        framework for the frontend and the backend. I'am
                        basically a MERN developer.
                    </p>
                    <div className=" flex text-red-600 font-bold text-4xl gap-4 justify-center my-6">
                        <a href="https://github.com/zahed-git"><FaGithub></FaGithub></a>
                        <a href="https://www.linkedin.com/in/abu-zahed-97b39130a/"><FaLinkedin></FaLinkedin></a>

                    </div>
                    <div className=" flex gap-4 mx-auto justify-center">
                        <button className="btn btn-outline text-gray-100 bg-green-600  text-xl font-bold "><FaCheck></FaCheck> Hire me</button>
                        <a href='https://drive.google.com/file/d/1uBeP_T_qPNsUflAoSdIYbb3HXOnqpTFY/view?usp=drive_link' download="CV.txt">
                        <button className="btn btn-outline text-gray-100 bg-green-600  text-xl font-bold"><FaDownload></FaDownload> Resume</button>
                        </a>
                        
                    </div>
                </div>
                <div className="my-auto animate__animated animate__fadeInLeft" >
                    <img className="w-150 pr-2 pt-2" src={img} alt="img" />
                </div>

            </div>
        </div>
    )
}
export default Banner