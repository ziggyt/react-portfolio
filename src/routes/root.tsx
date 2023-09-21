import ParticleBackground from "../components/visual_components/ParticleBackground.tsx";
import Hero from "../components/presentation_components/Hero.tsx";
import About from "../components/presentation_components/About.tsx";
import Work from "../components/work_components/Work.tsx";
import Projects from "../components/project_components/Projects.tsx";
import Articles from "../components/article_components/Articles.tsx";
import ContactMe from "../components/contact_components/ContactMe.tsx";
import Icons from "../components/presentation_components/Icons.tsx";
const Root = () => {
    return (
        <div className={'relative w-full h-screen'}>
            <ParticleBackground/>
            <div id={'main'}
                 className={"w-full h-screen flex flex-col justify-start items-center space-y-10 z-10 max-w-[700px] mx-auto"}>
                <div className="h-24"></div>
                <Hero name={'Max Fransson'} description={'Software Engineer'}
                      website={'fransson.lol'}/>
                <div className={'pl-5 pr-5'}><About/></div>
                <Work/>
                <Projects/>
                <Articles/>
                <ContactMe/>
                <Icons/>


            </div>

        </div>
    );
};

export default Root;
