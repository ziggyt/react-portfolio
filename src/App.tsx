import ParticleBackground from './components/visual_components/ParticleBackground.tsx';
import Hero from "./components/presentation_components/Hero.tsx";
import About from "./components/presentation_components/About.tsx";
import Work from "./components/work_components/Work.tsx";
import Projects from "./components/project_components/Projects.tsx";
import Articles from "./components/article_components/Articles.tsx";
import Icons from "./components/presentation_components/Icons.tsx";

const App = () => {
    return (
        <div className={'relative w-full h-screen'}>
            <ParticleBackground/>
            <div id={'main'}
                 className={"w-full h-screen flex flex-col justify-start items-center space-y-10 z-10 max-w-[700px] mx-auto"}>
                <div className="h-24"></div>
                <Hero name={'Max Fransson'} description={'Research and Development Engineer'}
                      website={'www.subuniver.se'}/>
                <div className={'pl-5 pr-5'}><About/></div>
                <Work/>


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
