---
title: Fundamentals of computer organisation and architecture
unit: 4.7
description: The role of the processor, main memory, address bus, data bus, control bus and IO controllers
---

## 4.7.1 Internal Hardware Components of a Computer

### Components 
Processor:  responds to and processes the basic instructions that drive a computer. CPUs will perform most basic arithmetic, logic and I/O operations, as well as allocate commands for other chips and components running in a computer.

Main memory: holds instructions and data when a program is executing.

Address bus: identifies the address of the location in cache or main memory that is to be read from or written to.

Data bus: distributes and manages real-time data in intelligent distributed systems. It allows applications and devices to work together as one, integrated system.

Control bus: carries control signals from the processor to other components.

I/O controllers: connects input and output (I/O) devices to the bus system of a central processing unit

### Von Neumann vs Harvard architecture
Von Neumann architecture is stored-program digital computer that keeps its program instructions, as well as its data, in read-write, random-access memory.

#### Harvard architecture
Harvard architecture is a type of computer architecture that separates its memory into two parts so data and instructions are stored separately. The architecture also has separate buses for data transfers and instruction fetches. This allows the CPU to fetch data and instructions at the same time.


## 4.7.2 The Stored Program Concept
The stored program concept is the idea that instructions and data are stored together in memory the program is then fetched from memory and executed an instruction at a time.

## 4.7.3.1 The Processor and it’s Components
The processor is made up of many smaller components such as registers which work together encompassed by the overall package.

 - Program Counter (PC) - Used to hold the ​ memory address​ of the ​ next instruction to be executed​ in the fetch-execute cycle.

 - Current Instruction Register (CIR) - Holds the ​ instruction ​ that is ​ currently being executed by the processor.

Memory Address Register (MAR) - Stores the memory address that the data is going to be read or written from/to.

Memory Buffer Register (MBR) - Holds the contents of a memory location after being fetched from RAM, or it holds the contents of the memory location that is going to be written to.

Clock - The processors clock is the component that generates a timing signal for synchronisation between different components in the processor.

Control Unit - The control unit houses the program counter which holds the current memory address, as well as controlling the timing and execution of events within the other components of the processor.

Arithmetic Logic Unit (ALU) - The ALUs purpose is to perform arithmetic and logic operations for instructions fetched from RAM such as AND OR 

## 4.7.3.2 Fetch Decode Execute 

The fetch decode execute cycle is followed by the CPU to carry out the instructions of a program in order. It involves three stages with an intermediary interrupt phase.



### Fetch
In the fetch stage of the cycle the next instruction is loaded.
The content of the PC is copied into RAM to fetch at location PC
The RAM responds back with the data at that address which is then stored in the MAR
Data/instruction copied from memory at the address in the PC into the MAR
The PC is incremented by 1
The content of the MBR is copied into the Current Instruction Register ready to be decoded and executed

### Decode
In the decode stage the previously fetched instruction is decoded ready to be run
The content in the CIR is taken to the Control Unit and decoded into the opcode and operand
The opcode specifies the operation to be carried out, the operand(s) are the data in which the operation is performed on

### Execute
The decoded instruction is carried out in this stage.
If there is any data needed at this point in the operands then they are fetched.
The instruction is carried out, using the ALU if necessary to perform logical operations.
The result of this operation is stored in general purpose registers or back in main memory depending on the opcode.

### Interrupts
Between the execute and the fetch stage of the cycle, the content of the status register is checked for changes in the programs environment that could signal an interrupt.

## 4.7.3.3 The processor instruction set

### Instruction set
Instruction set - the range of instructions that a CPU can execute
There are many different instructions that we can use in machine code, you have already met three (LDA, ADD, STO), but some processors will be capable of understanding many more. The selection of instructions that a machine can understand is called the instruction set.

## 4.7.3.4 Addressing Modes

Typically one bit in a machine code instruction is used to determine the addressing mode in use. There are four main types of addressing modes.

Immediate addressing - Uses the value in the operand as the value to be used in the operation

Direct addressing - The operand specifies a memory address to go to to fetch the contents. This is then used in the operation

Indirect addressing - Goes to address x to get contents x, then contents x takes us to y, where contents y are then used in the operation

Indexed addressing - One instruction is carried out multiple times 

## 4.7.3.5 Machine Code and assembly language

Machine code is the fundamental code that consists of binary data which runs directly on the hardware.
Assembly language is one generational layer above machine code, made up of operations which related one to one to machine code.
Assembly code instructions are made up of an opcode and an operand 

AQA assembly language:
Load - LDR Rx, < memory reference >:   Load the value stored in the memory location specified by < memory reference > into register x.

Store - STR Rx, < memory reference >  Store the value that is in registerx into the memory location specified by < memory reference >

Add - ADD Rx, Ry, < operand > - Add the value specified by < operand >to register y and store the result in register x

Subtract - SUB Rx, Ry, < operand > - Subtract the value specified by < operand > from the value in register y and store the result in register x.

Move l MOV Rx, < operand > - Copy the value specified by operand into register x

Compare - CMP Rx, < operand > - Compare the value stored in register x with the value in operand 

Logical Right Shift - LSR Rx, Ry, < operand > - Binary right shift y by bits operand and store in x

Logical Left Shift - LSL Rx, Ry, < operand > - Binary left shift y by bits operand and store in x

A logical shift is an operation that can be performed on binary numbers which involves shifting all of the bits in a number (doubling or halving the number) a​ specified number of positions​ to the right or to the left.

## 4.7.3.6 Interrupts

An interrupt is a signal sent from another component of the computer or part of a program that needs the immediate attention from the CPU. Some examples include input devices such as keyboards.

Programs can push interrupts to the CPU as well for fatal errors 
Eg:
Div by 0
Stack overflow
Out of memory


Vectored interrupts: 
Vectored interrupts handle interrupts by saving the volatile environment, meaning the contents of the registers are dumped onto the system stack so that the handling of the interrupt can proceed. The interrupt service routine that follows is unique to the error that is being thrown, and it involves a series of instructions for handling the interrupt.

Once the program finishes executing the ISRm it restores the volatile environment from the stack and resumes the execution of the program that was previously running.

## 4.7.3.7 Factors Affecting Processor Performance

There are multiple factors which directly affect the performance of a processor which in turn affect execution time of a program.

Number of cores: Each core can perform its own fetch decode execute cycle independently allowing different processes to run in each core. As a result more cores allows for a higher multitasking performance.

Cache memory: There are three layers of cache on a CPU L1, L2 and L3 with L1 being the fastest and smallest and L3 the largest and slowest. Cache is used to store​ frequently used information​ and reduces time wasted in fetching the same information from main memory time and time again.

Clock speed: A processor’s clock speed relates to the frequency of the pulses generated by the system clock. The higher the frequency, the more cycles of the fetch-execute cycle can be completed in the same period of time.

Word length: The length of a word is the number of bits that are assigned to it, with higher word lengths allowing for more bits to be transferred and manipulated as a single unit . Therefore a higher word size increases the performance of a computer system.

Address bus width:  Increasing the width of the address bus increases the range of addresses that it can specify as more parallel wires to RAM exist, hence increasing the computer’s amount of addressable memory. Adding a single wire doubles the number of addressable memory locations.

## 4.7.4.1 Input Output Devices
Input and output external hardware devices interface with a computer through IO ports. This allows for different devices to be connected when needed and typically through a universal protocol. 

Examples: 
Digital camera
RFID scanner
Keyboard
Mouse
Barcode reader
Monitor

## 4.7.4.2 Secondary Storage Devices

Secondary storage systems depend on the application that they are needed for.


In a home PC:
SSD - Solid State Drives are very fast drives made up of flash memory
+ Extremely fast
+ Low latency
+ Durable, drop resist
- Expensive
- Limit on number of writes before flash degrades

    HDD - Hard Disk Drives are made up of magnetics disks rotating on a spinning motor, data is stored with the magnetic polarity of ions on the surface divided into tracks and sectors. It is written and read from a head which can move to access a different track.
    + Relatively inexpensive per GB
    + Data will last a long time
    - Not durable


Other forms of magnetic storage includes other magnetic media such as magnetic tapes which are fast, high in capacity but write and read slowly and manually.

Optical media - Optical media works by creating a disc with a pitted metallic surface. There are several different types of disc out there ranging from 300 MB to 128 GB, with the pits and lands getting closer together for higher volume disks. Some can be rewritten.
CR-ROM - read only
CD-R - Write once then read only
CD-RW - Writable and rewritable

DVD-ROM - read only
DVD-R - Write once then read only
DVD-RW - Writable and rewritable

Performance of secondary storage devices comes down to some factors: 
Seek time - The average time taken from requesting data to starting to read the requested data
Capacity - The amount of data it is possible to store on a medium
Write type - Whether it is read only, write only, or readable and writable
Cost - How much it costs per megabyte

