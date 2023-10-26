
import AboutMe from './aboutMe.mdx';
export interface BlogCategory {
    name: string;
    description?: string;
    render?: ()=>JSX.Element;
}


export const BlogCategories: BlogCategory[] = [
        {name: "About", render: () => <AboutMe>}},
        {name: "Ramblings", description:"This is the page for stream of conciousness to be posted. All information that does not have a category that makes sense should go here"},
        {name: "Philosophy", description:"Philosphical ramblings, should be indistinguishable from ramblings"},
        {name: "Code", description:"Articles about coding"},
        {name: "Hobby", description:"Anything about my hobbies: reading, roleplaying, board games, miniatures, and more"}
    ];