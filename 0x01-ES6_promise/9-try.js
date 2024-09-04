/// guardrail function ///
/// one argument mathFunction ///
/// function should create and return an array named queue.//
/// when mathFunction function is executed ///
/// value returned by the function should be appended to the queue///
/// if  mathFunction() => throw error should be appended to the queue In every case with message///
/// message = 'Guardrail was processed' ///
/// message => should be added to the queue///
/// we will use .push to add in queue = [] ///

export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(error);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
