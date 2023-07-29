export default function guardrail(mathFunction) {
  let queue = [];
  try {
    queue = [mathFunction(), 'Guardrail was processed'];
    return queue;
  } catch (e) {
    queue = [e, 'Guardrail was processed'];
    return queue;
  }
}
