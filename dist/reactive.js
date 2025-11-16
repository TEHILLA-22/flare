let activeEffect = null;
// Signal type
export function signal(initialValue) {
    let value = initialValue;
    const subscribers = new Set();
    function get() {
        // Track dependencies
        if (activeEffect) {
            subscribers.add(activeEffect);
        }
        return value;
    }
    function set(newValue) {
        if (newValue === value)
            return;
        value = newValue;
        // Notify subscribers
        subscribers.forEach((fn) => fn());
    }
    return { get, set };
}
// Effect — runs function whenever dependencies change
export function effect(fn) {
    const wrapped = () => {
        activeEffect = wrapped;
        fn();
        activeEffect = null;
    };
    wrapped();
}
