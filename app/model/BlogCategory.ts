
export interface BlogCategory {
    name: string;
    description: string;
}


export const BlogCategories: BlogCategory[] = [
        {name: "Ramblings", description:"This is the page for stream of conciousness to be posted. All information that does not have a category that makes sense should go here"},
        {name: "Philosophy", description:"Philosphical ramblings, should be indistinguishable from ramblings"},
        {name: "Code", description:"Articles about coding"},
        {name: "Hobby", description:"Anything about my hobbies: reading, roleplaying, board games, miniatures, and more"}
    ];