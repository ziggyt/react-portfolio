import EducationItem from './EducationItem.tsx'

const data = [
    {
        year: 2020,
        university: "Chalmers University of Technology",
        program: "MSc, Software Engineering and Technology",
        duration: "Aug 2020 - Jun 2022",
        details: "Thesis: Applying and Maintaining Security Assurance Cases in the Medical Domain",

    },
    {
        year: 2017,
        university: "Chalmers University of Technology",
        program: "BSc, Software Engineering (Informationsteknik)",
        duration: "Aug 2017 - Jun 2020 ",
        details: "Thesis: Collaboration Mechanics for Children in Game Environments",

    },

];
const Education = () => {
    // const color: string = '#efedff'
    return (
        <div id={'education'} className={'max-w-5xl m-auto md:pl-20 p-4 py-8'}>
            <h1 className={'pb-5'}>Education</h1>
            {data.map((item, index) => (
                <div key={index}><EducationItem year={item.year} duration={item.duration} university={item.university}
                                    program={item.program} details={item.details}/></div>

                )
            )}
        </div>
    );
};

export default Education;