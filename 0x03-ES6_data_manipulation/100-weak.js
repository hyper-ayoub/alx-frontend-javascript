export const weakMap = new WeakMap();

const hight_End_point = 5;

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= hight_End_point) {
    throw new Error('Endpoint load is high');
  }
}
