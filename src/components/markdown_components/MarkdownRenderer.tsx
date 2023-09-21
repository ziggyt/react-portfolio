// MarkdownRenderer.tsx
import React from 'react';

import ReactMarkdown from 'react-markdown';

interface Props {
    content: string,
    className: string
}

const MarkdownRenderer: React.FC<Props> = ({ content, className }) => {
    return <ReactMarkdown className={className} children={content} />;
};

export default MarkdownRenderer;
