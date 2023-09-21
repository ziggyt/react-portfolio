export interface Props {
    imgSrc: string,
    title: string
}

const ProjectItem = ({imgSrc, title}: Props) => {
    return (
        <div className={'flex flex-col items-center'}>
            <h2 className={'p-2 '}>{title}</h2>
            <img className={'rounded-md shadow-lg shadow-gray-600 hover:scale-105 ease-in duration-150 cursor-pointer pt'}
                 src={imgSrc}/>

        </div>
    );
};

export default ProjectItem;


// grid sm:grid-cols-2 gap-12