import IconLink from "./IconLink.tsx";
import {FaGithub, FaLinkedin} from "react-icons/fa";

const Icons
    = () => {
    return (
        <div className={'flex flex-row justify-between pt-6 max-w-[200px] w-full'}>
            <IconLink icon={<FaLinkedin/>} link={'https://www.linkedin.com/in/fransson-max/'}/>
            <IconLink icon={<FaGithub/>} link={'https://github.com/ziggyt'}/>
        </div>
    );
};

export default Icons;