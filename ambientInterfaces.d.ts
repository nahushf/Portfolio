interface Window {
    webkitAudioContext: typeof AudioContext;
}

declare interface IProject {
    id: number;
    title: string;
    description: string;
    gradient: string[];
    image: string;
    route: string;
}
