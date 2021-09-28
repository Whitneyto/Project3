export const re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;

export function test(input:string) {
  console.log("%s is valid? %s", input, re.test(input));
  if (re.test(input)===true){
    try {
      return eval(input).toString()
    }
    catch(e) {
      return "Invalid Input!"
    }
  }
  else {
    return "Invalid Input!"
  }
}