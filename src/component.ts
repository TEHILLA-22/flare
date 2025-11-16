import { effect, signal } from "./reactive";

type Props = Record<string, any>;
type Hook = () => void;

export function component(renderFn: (props?: Props, hooks?: { onMount: Hook[], onUnmount: Hook[] }) => HTMLElement) {
  return function mount(props?: Props) {
    let rootEl: HTMLElement | null = null;
    const hooks = { onMount: [] as Hook[], onUnmount: [] as Hook[] };

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
