import img1 from '../assets/web-design.webp'
import img2 from '../assets/hh.webp'
import img3 from '../assets/Mern-Stack-Developer.png'
import 'animate.css';

const Service = () => {
    return (
        <div>
            <div className='flex mb-14'>
                <h1 className='mx-auto text-4xl font-bold text-blue-600 animate__animated animate__rubberBan'>Chose I Provide</h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-around">
                <div className="card glass w-96 animate__animated animate__jackInTheBox ">
                    <figure>
                        <img
                            src={img1}
                            alt="" className="p-2" 
                            />
                    </figure>
                    <div className="card-body ">
                        <h2 className="text-2xl font-bold">Web Designing</h2>
                        <p className="text-wrap">I am expert in web designing. I can add functionality besides designing a webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works below</p>
                        
                    </div>
                </div>
                 
                <div className="card glass w-96 animate__animated animate__jackInTheBox">
                    <figure>
                        <img
                            src={img2}
                            alt="" className="p-2" 
                            />
                    </figure>
                    <div className="card-body ">
                        <h2 className="text-2xl font-bold">PSD To HTML</h2>
                        <p className="text-wrap">I can covert any PSD design to a responsive webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works in portfolio tab in this website.</p>
                        
                    </div>
                </div>
                 
                <div className="card glass w-96 animate__animated animate__jackInTheBox">
                    <figure>
                        <img
                            src={img3}
                            alt="" className="p-2" 
                            />
                    </figure>
                    <div className="card-body ">
                        <h2 className="text-2xl font-bold">MERN Stack Developer</h2>
                        <p className="text-wrap">I am a MERN stack web developer. I use MongoDB for database and Express JS, Node Js for server side work. You can see i have done some MERN project.</p>
                        
                    </div>
                </div>
                 
            </div>
        </div>
    );
};

export default Service;