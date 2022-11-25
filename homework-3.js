// Create an IIFE that returns an object with fields:
// method setValue(),
// method showValue()
// and method reverseValue().
// Calling showValue should log the value, or if there is no value
// - tell us about that.
// Calling setValue will set given number or string in closure,
// if the argument is other type - throw an error.
// Value can be type string or number.
// reverseValue(): If number do (*(-1)), if string reverse it.  Closure pattern.

const myObject = (() => {
  let storedValue;
  return {
    setValue(value) {
      if (typeof value === "number" || typeof value === "string") {
        storedValue = value;
        return storedValue;
      }
      throw new Error("Value can be type string or number");
    },
    showValue() {
      if (storedValue) {
        console.log(storedValue);
      } else {
        console.log("There is no value");
      }
    },
    reverseValue() {
      if (typeof storedValue === "number") {
        storedValue *= -1;
        return storedValue;
      }
      if (typeof storedValue === "string") {
        storedValue = storedValue.split("").reverse().join("");
        return storedValue;
      }
    },
  };
})(); // YOUR CODE HERE

myObject.setValue(5);
myObject.showValue();
myObject.reverseValue();
myObject.showValue();
myObject.setValue("hello");
myObject.showValue();
myObject.reverseValue();
myObject.showValue();
