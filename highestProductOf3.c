// Given an array of integers, write a function that finds the highest product of three from amongst any three integers in the array. You can assume any input arrays have at least three integers. 

// You'll need to take into account the fact that it is possible for the highest product of three from a given array to be the product of two negative numbers and a positive number. 

// For example, given the array [-90, -15, 6, 9, 10], the highest product of any three numbers from this array is -90 * -15 * 10 which yields 13,500.
#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

#define MAX(a, b) (((a) > (b)) ? (a) : (b))
#define MIN(a, b) (((a) < (b)) ? (a) : (b))
#define SIZE(arr) (sizeof(arr) / sizeof(arr[0]))

void swap(int *x, int *y)
{
  int tmp = *x;
  *x = *y;
  *y = tmp;
}

void bubbleSort(int arr[], int n)
{
  if (n == 1)
    return;

  for (int i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i+1]) {
      swap(&arr[i], &arr[i+1]);
    }
  }

  bubbleSort(arr, n - 1);
}

int highestProductOf3(int arr[], int length)
{
  int count = 0;
  int tmp[3];

  for (int i = 0; i < length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  if (count % 2 == 0) { // if there are an even amount of negative numbers...
    // ...turn neg # to pos #
    for (int i = 0; i < length; i++) {
      if (arr[i] < 0) {
        arr[i] = arr[i] * -1;
      }
    }
    bubbleSort(arr, length);
    // for (int i = 0; i < length; i++) {
    //   printf(" %d ", arr[i]);
    // }
    // printf("\n");
    // for (int i = 1; i < length; i++) {
    //   printf("MIN(%d, %d): %d\t\t", arr[i], arr[i - 1], MIN(arr[i], arr[i - 1]));
    //   printf("MAX(%d, %d): %d\n", arr[i], arr[i - 1], MAX(arr[i], arr[i - 1]));

    // }
      
  } else {
    bubbleSort(arr, length);
  }
  int prod = arr[length - 1] * arr[length - 2] * arr[length - 3];

  return prod;
}

int main(int argc, char* argv)
{
  int arr1[] = {-10, -10, 1, 3, 2};
  int arr2[] = {1, 10, -5, 1, -100};
  int arr3[] = {5, -20, 19, 16, 4};
  
  printf("Highest product of arr1 is: %d\n", highestProductOf3(arr1, SIZE(arr1)));
  printf("Highest product of arr2 is: %d\n", highestProductOf3(arr2, SIZE(arr2)));
  printf("Highest product of arr3 is: %d\n", highestProductOf3(arr3, SIZE(arr3)));
  
  return 0;
}