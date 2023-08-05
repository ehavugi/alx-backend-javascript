export const weakMap = new WeakMap();
export function queryAPI(data) {
  if (weakMap.has(data)) {
    weakMap.set(data, weakMap.get(data) + 1);
    if (weakMap.get(data) >= 5) {
      throw new Error('Endpoint load is high');
    } else {
      return weakMap.get(data);
    }
  }
  weakMap.set(data, 1);
  return weakMap.get(data);
}
