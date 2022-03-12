export type IThemes = "dark" | "light";

export interface Content {
    tag: any;
    class?: string;
    content: string;
}

export interface PageContent {
    id: number;
    title: string;
    content: Array<Content>
}
