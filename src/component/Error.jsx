import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="">
            <h2></h2>
            <div className=" flex mt-14">
            <div className="mx-auto text-center">
            <h2 className="text-5xl font-bold my-6"> 404 page not found.</h2>
            <Link className="" to='/'> click to  <button className="btn ">Home</button> button</Link>
            </div>
            </div>
            
        </div>
    );
};

export default Error;