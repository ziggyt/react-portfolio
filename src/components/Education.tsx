

const data = [
    {
        year: 2022,
        company: "Research Institutes of Sweden (RISE)",
        title: 'Research and Development Engineer',
        duration: "Aug 2022 - Present (1 yr 2 mos)",
        details: "System development and product development focusing on autonomous technology. Conducted research through prototyping.",
        skills: ['Prototyping', 'Research', 'Software Engineering']
    },
    {
        year: 2022,
        company: "AstraZeneca",
        title: 'Master Thesis Student',
        duration: "Jan 2022 - Jun 2022 (6 mos)",
        details: "Thesis: Applying and Maintaining Security Assurance Cases in the Medical Domain. A case study evaluating security assurance methodology in the medical domain.",
        skills: ['Cybersecurity', 'Requirements Engineering']

    },
    {
        year: 2020,
        company: "Chalmers University of Technology",
        title: 'Teaching Assistant',
        duration: "Mar 2020 - Jun 2020 (4 mos)",
        details: "Assisted with the course DAT216 (Design and implementation of graphical interfaces). Responsibilities included lab supervision, mentoring, and grading.",
        skills: ['Graphical Interfaces', 'UI/UX', 'Mentoring']

    },
    {
        year: 2018,
        company: "AstraZeneca",
        title: 'Summer Intern',
        duration: "Jun 2018 - Jul 2018 (2 mos)",
        details: "Worked on visualizing datasets using tools like Jupyter Notebook, Pandas, and Python.",
        skills: ['Data Visualization', 'Pandas', 'Jupyter Notebook']

    }
];
const Work = () => {
    // const color: string = '#efedff'
    return (
        <div id={'work'} className={'max-w-5xl m-auto md:pl-20 p-4 py-8'}>
            <h1 className={'pb-5'}>Work</h1>
            {data.map((item, index) => (
                    <WorkItem key={index} year={item.year} title={item.title}
                              duration={item.duration}
                              details={item.details} company={item.company} skills={item.skills}/>
                )
            )}
        </div>
    );
};

export default Work;