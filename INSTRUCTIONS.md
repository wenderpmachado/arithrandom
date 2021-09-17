# Assignment: Backend / Full-stack

The assignment is to build a simple Producer/Consumer system. In this system, the producer will send a series of random expressions consisting of numbers and arithmetic operators (e.g. 1+1=).

The Evaluator will accept these expressions, compute the result and report the solution to the Generator.

## Requirements

At a minimum, we would like to see the following implemented:

 - The Producer and Consumer as separate services.
 - The Producer generating random addition expressions of two positive integers, e.g. "2+3="
 - The Consumer computing and returning the correct mathematical result for the each expression it receives
 - The Consumer successfully processing requests from two Producers concurrently at a rate of at least 1 req/sec from each Producer (2 req/sec in aggregate)
 - The Consumer and Producer should log all messages they generate and receive.
 - You are free to support more than simple addition, but it is not required.

The end product should:

 - Be implemented in a language of the applicant's choice
 - NOT rely on any external services like Redis, ZeroMQ or similar technologies
 - Include instructions for how to run your code
 - Include Unit tests
 - For bonus points, include a simple web front-end (don't worry about styling) that displays the messages that the producer(s) and consumer log.