'use client'
import React, {useState, useEffect} from 'react';
import Markdown from 'react-markdown';
export default function MarkdownPage(url: URL) {
    let markdown: string;
    let setMarkdown: any;
    [markdown, setMarkdown] = useState<string>("");
    
    useEffect(()=>{
        fetch(url).then(res => res.text()).then(text => setMarkdown(text));
    }, [])

    return <Markdown>{markdown}</Markdown>;
      
}