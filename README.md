# Incorrect GCD Calculation in Recursive Function

This repository demonstrates an uncommon bug in a recursive JavaScript function designed to calculate the greatest common divisor (GCD) of two numbers using Euclid's algorithm. The function incorrectly handles cases where the inputs are not coprime, leading to incorrect results.

## Bug Description

The `foo` function recursively applies Euclid's algorithm.  However, it contains a flaw in how it handles cases where the initial inputs share a common divisor greater than 1. This results in the function returning `true` (implying GCD is 0) even when it shouldn't.  The test case `foo(12, 18)` demonstrates the error, producing `true` instead of `false`. 

## Solution

The solution involves correcting the base case of the recursion. Instead of just checking for equality, the function must explicitly check if the result is 1 or 0. If it is 1, then the inputs are coprime and the GCD is 1; if it is 0, then the function has returned the wrong result. 