interface Props {
    year: number,
    duration: string,
    university: string,
    program: string,
    details: string,
}

const EducationItem= ({year, duration, university, program, details}: Props) => {

    return (
        <ol className={'flex flex-col md:flex-row relative border-l border-stone-200'}>
            <li className={'mb-10 ml-4'}>
                <div className={'absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'}/>
                <p className={'flex flex-wrap gap-4 flex-row items-center justify-start'}>
                    <span
                        className={'inline-block px-2 py-1 font-semibold text-white bg-[#cda715] rounded-md'}>{year}</span>
                    <div className={'flex flex-col'}><span
                        className={'text-lg font-semibold text-[#efedff]'}>{university}</span>
                        <div className={'flex flex-row space-x-4 justify-between'}>
                            <span
                                className={'text-base font-semibold text-[#efedff]'}>{program}</span>
                            <span className={'my-1.5 text-sm font-normal leading-none text-stone-400'}>{duration}</span>
                        </div>
                    </div>
                </p>
                <p className={'my-2 text-base font-normal'}>{details}</p>
            </li>

        </ol>
    );
};

export default EducationItem;