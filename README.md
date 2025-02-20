# Type Mismatch in TypeScript Function

This repository demonstrates a common type mismatch error in TypeScript.  The `add` function is defined to accept two numbers, but the code attempts to call it with a string and a number.  TypeScript's type system correctly identifies this as an error, preventing runtime exceptions.

The solution demonstrates how to properly type-check the input parameters, or use type assertion if necessary, ensuring only numbers are passed to the function. 