export interface Props {
    imgSrc: string,
    title: string
}

const ProjectItem = ({imgSrc, title}: Props) => {
    return (
        <div>
            <h1 className={'pb-2'}>{title}</h1>
            <img className={'rounded-md shadow-lg shadow-gray-600 hover:scale-105 ease-in duration-150 cursor-pointer pt'}
                 src={imgSrc}/>

        </div>
    );
};

export default ProjectItem;


// grid sm:grid-cols-2 gap-12