declare module '*.module.sass' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare const __ENV__: 'production' | 'development';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
