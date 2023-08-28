declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }
  
  declare module "*.svg" {
    const SVG: React.VFC<React.SVGProps<SVGElement>>;
    export default SVG;
  }

  declare module "*.png";
  declare module "*.jpg";
  declare module "*.jpeg";

  declare const __IS_DEV__: boolean;