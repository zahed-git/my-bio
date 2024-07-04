import {  FaLocationArrow} from "react-icons/fa";
import s1 from '../assets/S1.png'
import s2 from '../assets/S2.png'
import s3 from '../assets/S3.png'
import s4 from '../assets/S4.png'

const MyRecent = () => {
    return (
        <div className="mb-40">
            <div className='flex mb-14'>
                <h1 className='mx-auto text-4xl font-bold text-blue-600 animate__animated animate__rubberBan'>My Recent Projects</h1>
            </div>

            {/* 1st---------------------------- */}
            <div>

                <div>
                    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

                        <div className="w-full h-28 lg:w-1/2 lg:h-auto ">
                            {/* -------------------carosel--------------------- */}
                            <div className="carousel carousel-vertical rounded-box h-96">
                                <div className="carousel-item">
                                    <img src={s4 }alt="screenshoot" />
                                </div>
                                <div className="carousel-item">
                                    <img src={s1} alt="screenshoot" />
                                </div>
                                <div className="carousel-item">
                                    <img src={s2} alt="screenshoot" />
                                </div>
                                <div className="carousel-item">
                                    <img src={s3} alt="screenshoot" />
                                </div>
                                
                            </div>
                            <div className="flex  justify-end">
                            <h2 className="text-2xl uppercase text-green-800 lg:text-2xl font-bold lg:mr-20">Scroll</h2>
                            </div>
                            
                            {/* -------------------carosel--------------------- */}
                        </div>
                        <div
                            className="max-w-lg bg-black md:max-w-xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-10 lg:mt-16 lg:ml-20 xl:mt-24 xl:ml-12">

                            <div className="flex flex-col p-6 md:px-10">
                                <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-2xl">Moment-Weddings</h2>
                                <div className="mt-4 text-amber-700">
                                <p className='text-base'>
                                This is an single page website.In this platform anyone can creat his/her Biodata and start searching and explore his/her ideal mate.Concept was invented in the COVID-19 time.
                                </p>
                                <ul className='text-sm pr-3 mt-4'>
                                    <li className="flex gap-2 text-center justify-start"><FaLocationArrow className="text-xs font-thin my-auto text-red-700"/> <p className="text-wrap">User  Login via Google or create an free account</p></li>
                                    <li className="flex gap-2 text-center justify-start"><FaLocationArrow className="text-xs font-thin my-auto text-red-700"/> <p className="text-wrap">User can Create Biodata</p> </li>
                                    <li className="flex gap-2 text-center justify-start"><FaLocationArrow className="text-xs font-thin my-auto text-red-700"/> <p className="text-wrap">Search filters</p></li>
                                    <li className="flex gap-2 text-center justify-start"><FaLocationArrow className="text-xs font-thin my-auto text-red-700"/> <p className="text-wrap">Different Admin and User Dashbord</p></li>
                                    <li className="flex gap-2 text-center justify-start"><FaLocationArrow className="text-xs font-thin my-auto text-red-700"/><p className="text-wrap"> Front-end technology:React js,Tailwind,Firebase,React-Router</p></li>
                                    <li className="flex gap-2 text-center justify-start"><FaLocationArrow className="text-xs font-thin my-auto text-red-700"/><p className="text-wrap">Back-end technology:Express,Cors,Jwt,Nodejs,MongoDB</p> </li>
                                    
                                </ul>
                                </div>
                                

                                <div className="mt-8 flex gap-2">
                                    <a href="https://moments-weddings.web.app/"
                                        className="btn btn-link text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md ">Live Link</a>
                                    <a href="https://github.com/zahed-git/Moment-Weddings-12"
                                        className="btn btn-link text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md ">Code Link</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* 1st-end--------------------------- */}
        </div>
    );
};

export default MyRecent;