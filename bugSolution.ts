function add(a: number, b: number): number {
  return a + b;
}

const num1 = parseFloat("1");
const num2 = 2;
const result = add(num1, num2); // Type safe with explicit conversion

// Alternative solution using type assertion (use cautiously):
const result2 = add(parseFloat("1") as number, 2); 
console.log(result,result2); // Output: 3 3