// Write a C program that accepts exactly five floats from a user and calculates
// the total, average, and percentage of those five floats. 

// When your program is executed, it should prompt the user to enter 5 floats.
// Once the user has done so, your program should receive those inputs
// and calculate the total, average, and percentage of those input floats.

// Your program's output should look something like the following:

// Example Input

//     Enter 5 floats: 95.2 76.6 85.4 90.0 89.1

// Output

//   Total = 436.30
//   Average = 87.27
//   Percentage = 87.26 %

// You all know about printf function for printing some output from a C program.
// Look up how to have a C program accept user input in response to a prompt. 
#include <stdio.h>

int main()
{
  float a, b, c, d, e;
  float total, avg, percentage;

  printf("Enter 5 floats: ");
  scanf("%f %f %f %f %f", &a, &b, &c, &d, &e);
  
  total = a + b + c + d + e;
  avg = total / 5;
  percentage = total / 500 * 100;

  printf("Total = %.2f\n", total);
  printf("Average = %.2f\n", avg);
  printf("Percentage = %.2f %\n", percentage);
  return 0;
}