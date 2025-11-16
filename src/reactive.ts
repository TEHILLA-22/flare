type Subscriber = () => void;

let activeEffect: Subscriber | null = null;

// Signal type
export function signal<T>(initialValue: T) {
  let value = initialValue;
  const subscribers = new Set<Subscriber>();

  function get() {
    // Track dependencies
    if (activeEffect) {
      subscribers.add(activeEffect);
    }
    return value;
  }

  function set(newValue: T) {
    if (newValue === value) return;
    value = newValue;
    // Notify subscribers
    subscribers.forEach((fn) => fn());
  }

  return { get, set };
}

// Effect — runs function whenever dependencies change
export function effect(fn: () => void) {
  const wrapped = () => {
    activeEffect = wrapped;
    fn();
    activeEffect = null;
  };
  wrapped();
}
