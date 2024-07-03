import { FaBeer, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner=()=>{
    return(
        <div>
            <h1 className="text-white">.</h1>
            <h1 className="mt-20"></h1>
             <div className="mt-20  about-me-container d-flex justify-content-around align-items-center mt-5">
      <div className="about-me-text">
        <h1 className="name-title">
          HI !<br />
          I'M GIAS UDDIN
        </h1>
        <h5>Web Developer || React Develope || Programmer</h5>
        <p className="mt-5 w-75">
          I am an enthusiastic React developer with knowing some
          framework for the frontend and the backend. I'am
           basically a MERN developer.
        </p>
        <div className="social-icons">
            <a href="https://github.com/zahed-git"><FaGithub></FaGithub></a>
          <a href="https://www.linkedin.com/in/abu-zahed-97b39130a/"><FaLinkedin></FaLinkedin></a>
          
        </div>
      </div>
      <div className="about-me-photo">
        <div className="my-photo-box">
          <img className="w-100 pr-2 pt-2" src="" alt="" />
        </div>
      </div>
    </div>
        </div>
    )
}
export default Banner