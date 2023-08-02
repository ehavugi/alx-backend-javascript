export const weakMap = new WeakMap();
export function queryAPI(data) {
  if (weakMap.has(data)) {
    weakMap.set(data, weakMap.get(data) + 1);
    if (weakMap.get(data) >= 4) {
      throw new Error('Endpoint load is high');
    }
    return weakMap.get(data);
  }
  weakMap.set(data, 1);
  return weakMap.get(data);
}
