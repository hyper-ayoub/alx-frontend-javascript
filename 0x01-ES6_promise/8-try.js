/// divideFunction ///
/// 2 argument numerator && denominator ///
/// if (denominator == 0) => throw new error cannot divide by 0.///
/// else return the result numerator/denominator ///

export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  } else {
    return (numerator / denominator);
  }
}
