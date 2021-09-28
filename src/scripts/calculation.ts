export const re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;

export function test(input:string) {
  console.log("%s is valid? %s", input, re.test(input));
  if (re.test(input)===true){
    return eval(input).toString()
  }
  else {
    return "Invalid Input!"
  }
}