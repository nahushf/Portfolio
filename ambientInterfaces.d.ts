interface Window {
    webkitAudioContext: typeof AudioContext;
}

declare interface IProject {
    id: number;
    title: string;
    description: string;
    gradient: string[];
    image: StaticImageData;
    route: string;
    tags: string[];
    badges?: {img: StaticImageData; tagline: string;}[];
    cssGradient?: string;
}

declare type VariantType = import('framer-motion').Variant;

declare type IProjectTileVariant = { [key: 'rest' | 'show' | 'hover' | 'active']: VariantType };
