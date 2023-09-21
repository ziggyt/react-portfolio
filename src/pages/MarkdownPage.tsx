import React, { useState, useEffect } from 'react';
import ParticleBackground from "../components/visual_components/ParticleBackground.tsx";
import MarkdownRenderer from "../components/markdown_components/MarkdownRenderer.tsx";

;

const MarkdownPage: React.FC = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ziggyt/react-portfolio/main/src/assets/_posts/cirrus.md')
            .then(response => response.text())
            .then(text => setContent(text));
    }, []);

    return (
        <div className={'p-4 pt-8'}>
            <ParticleBackground/>
            <MarkdownRenderer content={content} className="prose prose-invert prose-lg mx-auto backdrop-blur-[1px]"/>
        </div>
    );
};

export default MarkdownPage;
