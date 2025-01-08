export async function sleepFor<Output = undefined>(delay: number, result?: Output): Promise<Output> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay, result);
  });
}
