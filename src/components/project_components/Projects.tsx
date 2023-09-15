import ProjectItem from "./ProjectItem.tsx";
import {Props as ProjectItemProps} from './ProjectItem.tsx';

const projectData: ProjectItemProps [] = [
    {
        imgSrc: 'https://raw.githubusercontent.com/draforfrogan/portfolio-blog/master/assets/images/irl_cirrus_front.png',
        title: 'Cirrus'
    }, {
        imgSrc: 'https://raw.githubusercontent.com/draforfrogan/portfolio-blog/master/assets/images/top.png',
        title: 'CirrusPCB'
    }
]

const Projects = () => {


    return (
        <div className={'p-5'}>
            <h2>Projects</h2>
            <div className={'m-auto max-w-[1040px] grid gap-12 sm:grid-cols-2 pb-5 pl-5 pr-5'}>
                {projectData.map((item, index) => (
                        <ProjectItem key={index} imgSrc={item.imgSrc} title={item.title}/>
                    )
                )
                }

            </div>
        </div>
    );
};

export default Projects;

// grid sm:grid-cols-2 gap-12