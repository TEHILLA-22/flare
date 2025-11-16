type Props = Record<string, any>;
type Hook = () => void;
export declare function component(renderFn: (props?: Props, hooks?: {
    onMount: Hook[];
    onUnmount: Hook[];
}) => HTMLElement): (props?: Props) => {
    el: null;
    cleanup: () => void;
};
export {};
