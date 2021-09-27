
export function operationKey(operation: number[]) {
  const opAdd = operation[0];
  const opMinus = operation[1];
  const opDiv = operation[2];
  const opMul = operation[3];
  if ((opAdd + opMinus + opDiv + opMul) === 1) {
    return true;
  } else {
    return false;
  }
}

export function assignNum(bool: boolean, input: string, num1: number) {
  if (bool === true) {
    return parseInt(input.replace(num1.toString(), ""));
  } else {
    return 0;
  }
}

export function op(operation: number[], num1: number, num2: number) {
  if ((operationKey(operation)) && (operation[0] === 1)) {
    console.log(num1 +":"+num2);
    return num1 + num2;
  } else if ((operationKey(operation)) && (operation[1] === 1)) {
    console.log(num1 +":"+num2);
    return num1 - num2;
  } else if ((operationKey(operation)) && (operation[2] === 1)) {
    console.log(num1 +":"+num2);
    return num1 * num2;
  } else if ((operationKey(operation)) && (operation[3] === 1)) {
    console.log(num1 +":"+num2);
    return num1 / num2;
  } else {
    return 0;
  }
}
