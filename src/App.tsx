import ParticleBackground from './components/ParticleBackground';
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";

import {FaGithub, FaLinkedin} from "react-icons/fa";
import IconLink from "./components/IconLink.tsx";
import Work from "./components/Work.tsx";
import Projects from "./components/Projects.tsx";
import Education from "./components/Education.tsx";

const App = () => {
    return (
        <div className={'relative w-full h-screen'}>
            <ParticleBackground/>
            <div id={'main'}
                 className={"w-full h-screen flex flex-col justify-start items-center space-y-10 z-10 max-w-[700px] mx-auto"}>
                <div className="h-24"></div>
                <Hero name={'Max Fransson'} description={'Software Engineer'}
                      website={'www.subuniver.se'}/>
                <div className={'pl-5 pr-5'}><About/></div>
                <Work/>

                <Education/>

                <Projects/>


                <div className={'flex flex-row justify-between pt-6 max-w-[200px] w-full'}>
                    <IconLink icon={<FaLinkedin/>} link={'https://www.linkedin.com/in/fransson-max/'}/>
                    <IconLink icon={<FaGithub/>} link={'https://github.com/ziggyt'}/>
                </div>



            </div>

        </div>
    );
}

export default App;
