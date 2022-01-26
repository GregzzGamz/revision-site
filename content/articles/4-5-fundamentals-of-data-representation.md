---
title: Fundamentals of data representation
unit: 4.5
description: Includes images, sounds, vector graphics
---

## 3.5.6.5 Digital Representation of Sound    

### Sample resolution
                
Sample resolution (the number of bits per sample) determines how many gradations of amplitude (corresponding to loudness) can be represented in the digital waveform        

### Sample rate               
Sampling rate or sampling frequency defines the number of samples per second (or per other unit) 
            
### Nyquist's theorem 
                
Nyquist's theorem states that a periodic signal must be sampled at more than twice the highest frequency component of the signal.

### Calculating audio size 
sampling rate * sample resolution * time * channel

One example is:

A typical, uncompressed high-quality audio file has
a sample rate of 44,100 samples per second, a bit depth of 16 bits per sample and 2 channels of stereo audio. The bit rate for this file would be:
44,100 samples per second × 16 bits per sample × 2 channels = 1,411,200 bits per second (or 1,411.2 kbps)
A four-minute (240 second) song at this bit rate would create a file size of:
1,411,200 × 240 = 338,688,000 bits (or 40.37 megabytes)

## 3.5.6.6 Musical Instrument Digital Interface
<br>

#### MIDI


MIDI stands for Musical Instrument Digital Interface.
It's a way to connect devices that make and control sound and don't store sound waves at all, instead it stores digital representation of the notes such as synthesizers, samplers, and computers. This allows them to communicate with each other using MIDI messages.

<br>
                
#### Use of event messages in MIDI 
the message structure is oriented to performance events, such as picking a note and then striking it, or setting  typical parameters available on electronic keyboards.

## 4.5.3.2 Units

<square-image src="https://i0.wp.com/fewnow.com/wp-content/uploads/2017/05/File-size-2-Wikipedia.jpg" ></square-image>

## 4.5.6.4 Bitmapped Graphics 
Bitmap images are organised as a grid of coloured squares called pixels. Each colour of an image is stored as a binary number.

The resolution of a bitmap image = number of pixels per square inch.

The colour depth of an image is measured in bits. The number of bits indicates how many colours are available for each pixel. For example in the black and white image, only two colours are needed. This means it has a colour depth of 1 bit.

The size of an image in pixels is width of image in pixels x height of image in pixels.

File size of the image = pixel width * pixel height * resolution * bit depth
metadata is commonly defined as data about data.

An example of metadata for a document might include a collection of information like the author, file size, the date the document was created, and keywords to describe the document.

## 4.5.6.5 Vector Graphics
Vector graphics are made up of geometric primitives such as points, lines, curves and shapes/polygons all based on mathematical equations.

## 4.5.6.9 Data Compression
Files are compressed so that the size of the file can be reduced. This is done by lossy or lossless compression

### Lossy compression 
Lossy compression is a method of data compression in which the size of the file is reduced by eliminating data in the file. An advantage is that this method makes the size of the file considerably smaller but the disadvantage that comes with it is that quality of the image is sacrificed.

### Lossless compression
Lossless compression reduces file size without removing any bits of information. Instead, this format works by removing redundancies within data to reduce the overall file size. With lossless, it is possible to perfectly reconstruct the original file. The advantage to this is no quality of the image is lost but the disadvantage is that it doesn't reduce the size of the file as much as lossy compression

### Run length encoding (RLE) 
RLE is a basic form of data compression that converts consecutive identical values into a code consisting of the character and the number marking the length of the run.
