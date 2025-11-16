import { component } from "./component";
type Route = {
    path: string;
    component: ReturnType<typeof component>;
};
export declare function createRouter(routeList: Route[]): void;
export declare function navigate(path: string): void;
export declare const RouterView: (props?: {
    [x: string]: any;
}) => {
    el: null;
    cleanup: () => void;
};
export {};
