export type IThemes = "dark" | "light";

export interface Content {
    tag: any;
    class?: string;
    content: Array<JSX.Element> | string;
}

export interface PageContent {
    id: number;
    title: string;
    content: Array<Content>
}
