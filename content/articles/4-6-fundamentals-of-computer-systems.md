---
title: Fundamentals of computer systems
unit: 4.6
description: Logic gates - NOT, AND, OR, XOR, NAND, NOR, truth tables, boolean expressions, adders, half adders
---

## 4.6.4 Logic Gates


### NOT Gate
A not gate is used to invert the input signal
<square-image class="w-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/NOT_ANSI_Labelled.svg/120px-NOT_ANSI_Labelled.svg.png"></square-image>




### AND Gate
AND gates have two inputs, say A and B. The result Q is A * B
<square-image class="w-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/NOT_ANSI_Labelled.svg/120px-NOT_ANSI_Labelled.svg.png"></square-image>


### OR Gate
In the same way AND essentially multiplies A and B, OR adds A and B
<square-image class="w-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/OR_ANSI_Labelled.svg/120px-OR_ANSI_Labelled.svg.png"></square-image>

### XOR Gate
The XOR gate’s full name is exclusively or and it outputs TRUE when strictly one of its
inputs is TRUE<
<square-image class="w-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/XOR_ANSI_Labelled.svg/120px-XOR_ANSI_Labelled.svg.png"></square-image>

### NAND Gate
NAND is short for NOT AND
<square-image class="w-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/NAND_ANSI_Labelled.svg/120px-NAND_ANSI_Labelled.svg.png"></square-image>

### NOR Gate
OR, short for NOT OR is a combination of the two logic gates NOT and OR
<square-image class="w-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/NOR_ANSI_Labelled.svg/120px-NOR_ANSI_Labelled.svg.png"></square-image>



<div class="flex flex-col mb-16">
    <div>
      <h3>Truth tables</h3>
      <p>Here are all the truth tables for every logic gates</p>
    </div>
  <square-image src="https://www.researchgate.net/profile/Seth-Abels/publication/291418819/figure/fig3/AS:718510820962304@1548317737478/Summary-of-the-common-Boolean-logic-gates-with-symbols-and-truth-tables.png"></square-image>
</div>

## Logic Circuits

### Half Adder
The half adder is a circuit which allows for two inputs to be added, and the result S and carry C are the result. It is a very
simple circuit that only makes use of an XOR and AND gate.
<square-image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Half_Adder.svg/1200px-Half_Adder.svg.png"></square-image>

### Full Adder
A full adder extends the half adder to take in the carry value. These circuits can be chained to perform arithmetic on larger numbers.
<square-image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Full-adder.svg/550px-Full-adder.svg.png"></square-image>


## 4.6.5 Boolean Algebra
Order of precedence:
- 1 ) Brackets
- 2 ) NOT
- 3 ) XOR
- 4 ) AND
- 5 ) OR

### Expanding brackets

The same way normal algebraic expressions can be expanded out in maths, boolean algebra follows these same laws. 
For example 3(7 + y) can be expanded out to 21 + 3y.


When doing this in boolean algebra, expressions can be expanded if the two brackets are ANDed together:

A.(B + C) = A.B + A.C

### Factorising brackets

The opposite of expanding brackets can also be done by factorising the brackets.

A.C + A.B = A.(C + B)

### Identity Law
A . 1 = A

A + 0 = A

### Null Law
A . 0 = 0

A + 1 = 1

### Idempotence Law

A . A = A

A + A = A


### Inverse Law

A . !A = 0

A + !A = 1

### Commutative Law

A . B = B . A

A + B = B + A

### Associative Law

(A . B).C = A.(B . C)

(A + B)+C = A+(B + C)

### Distributive Law

A + B . C = (A + B).(A + C)

A . (B + C) = A . B + A . C

### Absorption Law
A . (A + B) = A

!B  (A . !B) = !B


### De Morgan's Law 

!(A . B) = !A + !B

!(A + B) = !A . !B

### Double Complement Law

!!B = B


