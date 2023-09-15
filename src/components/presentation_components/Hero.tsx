interface Props {
    name: string,
    description: string
    website: string
}

const Hero = ({name, description, website}: Props) => {
    return (
        <div className={'flex flex-row'}>
            <img className={'w-24 hover:scale-105 ease-in duration-150 rounded-lg'}
                 src={'https://bonhomme.lol/profile.png'}/>
            <div className={'flex flex-col pl-4'}>
                <h2>{name}</h2>
                <p>{description}</p>
                <div>
                    <a href={website}>
                        <h3 className={'hover:bg-sky-700'}>{website}</h3>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Hero;