interface Props {
    name: string,
    description: string
    website: string
}

const Hero = ({name, description, website}: Props) => {
    return (
        <div id={"max"} className={'flex flex-row'}>
            <img className={'w-24 hover:scale-105 ease-in duration-[120] rounded-lg'}
                 src={'https://bonhomme.lol/profile.png'}/>
            <div className={'flex flex-col pl-4'}>
                <h2>{name}</h2>
                <p>{description}</p>
                <a href={website} target="_blank" rel="noopener noreferrer">fransson.lol</a>
            </div>

        </div>
    );
};

export default Hero;