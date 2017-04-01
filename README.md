# ngCalculator

Calculator made with Angular 1.6. This is an exercise in component-based architecture. 

## Core components

### Basic Version

* Number buttons.
    * Digits from 0 to 9.
* Operation buttons.
    * Division, multiplication, subtraction, addition.
* Function buttons.
    * Compute operation, clear board.
* Calculator board.
    * Display current operation and result digits.
* Symbol buttons.
    * Percentage sign, +/- sign, decimal point. 

    

## Operations

Operations occur between integers and decimal numbers.

Operations will be handled as Angular services.


## Functions

* Clear board: the board is cleared and a zero is displayed. Any ongoing cumulative operation is canceled. 
* Computer operation:
    * If there is only one number in the operation stack and the Result Button is pressed, there is no computation - the number is simply re-displayed.
    * If there is only one number in the operation stack and you press an operation button followed by the Result Button, the operation is carried against the number in the stack. For example: `2 + =` will result in `4`; 
     * If there is a number on the stack, you press an operation button, you enter another number to that is placed in the operation stack, and you press the result button, the operation will be carried between the two numbers on the stack: the older number being operated on by the second number. For example: `2 + 3 =` will result in `5`.
     
## Symbols:

* Percentage: creates the percentage rate of the given number. For example: `10 %` will result in `0.1` being shown.
 
* +/- sign: assigns a negative or positive sign to the current number in the stack. The positive sign is not shown. 


