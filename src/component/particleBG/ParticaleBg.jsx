import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
 //import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
 import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
//import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import particaleConfig from "./particaleConfig";


const ParticaleBg = () => {
    const [ init, setInit ] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    const particlesLoaded =useCallback (async (container)=>{
        await console.log(container)
            },[]) 
    return (
        <div >
           <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            params={particaleConfig}
            ></Particles>
        </div>
    );
};

export default ParticaleBg;