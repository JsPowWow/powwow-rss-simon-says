export async function sleepFor<Output = undefined>(delay: number, result?: Output): Promise<Output> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay, result);
  });
}

/**
 * @description Return shuffled array.
 */
export const toShuffledArray = <T>(arr: Array<T>): Array<T> => {
  const result = [];
  let j;
  let x;
  let index;
  for (index = arr.length - 1; index > 0; index -= 1) {
    j = Math.floor(Math.random() * (index + 1));
    x = arr[index];
    result[index] = arr[j];
    result[j] = x;
  }
  return result;
};

/**
 * @description Return random item from array.
 */
export function getRandomItem<T>(items: Array<T>): T {
  return items[Math.floor(Math.random() * items.length)];
}

export const noop = (..._: unknown[]): void => {
  /** This is intentional */
};

export const identity = <T>(source: T): T => source;
