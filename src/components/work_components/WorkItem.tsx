interface Props {
    year: number,
    duration: string,
    company: string,
    title: string,
    details: string,
    skills: string []

}

const WorkItem = ({year, duration, company, title, details, skills}: Props) => {

    return (
        <ol className={'flex flex-col md:flex-row relative border-l border-stone-200 backdrop-blur-[1px]'}>
            <li className={'mb-10 ml-4'}>
                <div className={'absolute w-3 h-3 bg-stone-200 rounded-full mt-5 -left-1.5 border-white'}/>
                <p className={'flex flex-wrap gap-4 flex-row items-center justify-start'}>
                    <span
                        className={'inline-block px-2 py-1 font-semibold text-white bg-[#cda715] rounded-md'}>{year}</span>
                    <div className={'flex flex-col'}>
                        <span className={'text-lg font-semibold text-[#efedff]'}>{company}</span>
                        <div className={'flex flex-row space-x-4 justify-between'}>
                            <span
                                className={'text-base font-semibold text-primary'}>{title}</span>
                            <span className={'my-1.5 text-sm font-normal leading-none text-stone-400'}>{duration}</span>
                        </div>
                    </div>
                </p>
                <p className={'my-2 text-base font-normal'}>{details}</p>

                <div className={'flex flex-row space-x-2 pt-2'}>
                    {skills.map((skill, index) => (
                        <div key={index}>
                            <span
                                className={'inline-block px-2 py-1 font-semibold text-[#efedff] bg-[#777586] rounded-md'}>{skill}</span>
                        </div>
                    ))}
                </div>
            </li>

        </ol>
    );
};

export default WorkItem;