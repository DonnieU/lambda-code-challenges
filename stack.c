// Implement a stack data structure. You're provided with a struct representing the Stack,
// the createStack method, and a main function.
// Note how the createStack function allocates memory in order to initialize a new stack structure. 

// Implement the methods isFull, isEmpty,  push, and pop. 

// When the stack reaches its capacity, have it double in capacity so as to be able to accommodate additional inputs.
// Look into the realloc method as a possible way to do this. 

#include <stdio.h>
#include <stdlib.h>

// Struct representing a Stack that holds an integer representing the 
// the index of the top of the stack, the total capacity that the stack
// can hold, and a pointer to an array of integers
typedef struct Stack {
    int top;
    unsigned capacity;
    int* array;
} Stack;
 
// Function to create a stack of given capacity. It initializes size of
// stack as 0
Stack* createStack(unsigned capacity)
{
    Stack* stack = (struct Stack*) malloc(sizeof(struct Stack));
    stack->capacity = capacity;
    stack->top = -1;
    stack->array = malloc(stack->capacity * sizeof(int));
    return stack;
}
 
// Stack is full when top is equal to the last index
int isFull(Stack* stack)
{
  if (stack->top == stack->capacity - 1)
    return 1;
  return 0;
}
 
// Stack is empty when top is equal to -1
int isEmpty(Stack* stack)
{
  if (stack->top == -1)
    return 1;
  return 0;
}
 
// Function to add an item to stack. It increases top by 1
void push(Stack* stack, int item)
{
  if (isFull(stack)) {
    stack->capacity = stack->capacity * 2;
    stack->array = realloc(stack->array, stack->capacity * sizeof(int));
  }
  stack->top++;
  stack->array[stack->top] = item;
  printf("%d pushed to stack\n", item);
}
 
// Function to remove an item from stack. It decreases top by 1
int pop(Stack* stack)
{
  if (isEmpty(stack))
    return -1;
    
  stack->top--;
  return stack->array[stack->top + 1];
}

// Program to test above functions
int main()
{
    // Stack* stack = createStack(100);
    Stack* stack = createStack(5);
 
    // push(stack, 10);
    // push(stack, 20);
    // push(stack, 30);
 
    // printf("%d popped from stack\n", pop(stack));
    // printf("The stack is full: %d\n", isFull(stack));
    
    // printf("%d popped from stack\n", pop(stack));
    // printf("%d popped from stack\n", pop(stack));
    // printf("The stack is empty: %d\n", isEmpty(stack));
 

    printf("The stack is empty: %d\n", isEmpty(stack));
    printf("The capacity of stack is: %d\n", stack->capacity);
    push(stack, 10);
    push(stack, 20);
    push(stack, 30);
    printf("%d popped from stack\n", pop(stack));
    printf("The stack is full: %d\n", isFull(stack));
    push(stack, 40);
    push(stack, 50);
    push(stack, 60);
    printf("The stack is full: %d\n", isFull(stack));
    push(stack, 70);
    printf("The stack is full: %d\n", isFull(stack));
    printf("The capacity of stack is: %d\n", stack->capacity);
    printf("%d popped from stack\n", pop(stack));
    printf("%d popped from stack\n", pop(stack));
    printf("The stack is empty: %d\n", isEmpty(stack));
 

    return 0;
}