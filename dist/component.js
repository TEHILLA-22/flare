import { effect } from "./reactive";
export function component(renderFn) {
    return function mount(props) {
        let rootEl = null;
        const hooks = { onMount: [], onUnmount: [] };
        // Create and render element
        const update = () => {
            if (rootEl) {
                // Call unmount hooks
                hooks.onUnmount.forEach(fn => fn());
                rootEl.remove();
            }
            rootEl = renderFn(props, hooks);
            // Call mount hooks
            hooks.onMount.forEach(fn => fn());
        };
        effect(update);
        return {
            el: rootEl,
            cleanup: () => hooks.onUnmount.forEach(fn => fn())
        };
    };
}
