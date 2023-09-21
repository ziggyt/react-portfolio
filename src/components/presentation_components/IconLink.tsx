import React from "react";

interface Props {
    icon: React.ReactElement,
    link: string,
    size?: number
}

const IconLink = ({ icon, link, size = 50 }: Props) => {
    const iconWithSize = React.cloneElement(icon, { size });

    return (
        <a href={link} className={'hover:scale-110 ease-in duration-100 cursor-pointer p-6'}>
            {iconWithSize}
        </a>
    );
};

export default IconLink;