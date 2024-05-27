export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  (function taskBlockInner() {
    /* eslint-disable no-unused-vars */
    if (trueOrFalse) {
      const task = true;
      const task2 = false;
    }
    /* eslint-enable no-unused-vars */
  }());

  return [task, task2];
}
