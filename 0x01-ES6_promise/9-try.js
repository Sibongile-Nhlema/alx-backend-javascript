export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const ans = mathFunction();
    queue.push(ans);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
