let myString: string = 'abc';
let myBoolean: boolean = true;
let myNumber:number = 10.5;
let myArray: string[] = ['A', 'B', 'C'];
let myTuple: [string, number] = ['A', 10];

myTuple[2] = 20;

const myUnknown: any = [10, 'A', false];

const a: string|null = null;
console.log(typeof a);
console.log(a);

const test = (): never => {
  while(true) { }
};

console.log(myString);
console.log(myBoolean);
console.log(myNumber);
console.log(myArray);
console.log(myTuple);