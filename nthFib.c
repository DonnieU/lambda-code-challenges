// Write a program that reads an integer from stdin and uses that integer N to calculate the Nth Fibonacci number.
// Your program should print out your answer in the form of "Nth Fibonacci number is [YOUR ANSWER]".

// Your program should prompt the user with "Enter an integer:".
#include <stdio.h>
#include <assert.h>

// Recursion works but fails the test due to runtime for integer 48
/*
int fib(int n)
{
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
} */

int fib(int n)
{
  int f[n + 1];
  int i;

  f[0] = 0;
  f[1] = 1;

  for (i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }

  return f[n];
}


int main(int argc, char* argv[])
{
  int n;
  printf("Enter an integer: ");
  scanf("%d", &n);

  printf("Nth Fibonacci number is %d\n", fib(n));
  return 0;
}