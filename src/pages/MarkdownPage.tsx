import React, { useState, useEffect } from 'react';
import ParticleBackground from "../components/visual_components/ParticleBackground.tsx";
import MarkdownRenderer from "../components/markdown_components/MarkdownRenderer.tsx";

;

const MarkdownPage: React.FC = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/draforfrogan/portfolio-blog/master/_posts/2022-03-14-cirrus.md')
            .then(response => response.text())
            .then(text => setContent(text));
    }, []);

    return (
        <div className={'p-4'}>
            <ParticleBackground/>
            <MarkdownRenderer content={content} className="prose prose-lg mx-auto"/>
        </div>
    );
};

export default MarkdownPage;
