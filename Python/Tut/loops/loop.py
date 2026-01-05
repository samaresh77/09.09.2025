# What is loops in Python?
# Loops are used in programming to repeat a block of code multiple times until a certain condition is met.
# In Python, there are two main types of loops: 'for' loops and 'while' loops.
# Example of a 'for' loop
print("For loop example:")
for i in range(5):
    print("Iteration:", i)
# Example of a 'while' loop
print("\nWhile loop example:")
count = 0
while count < 5:
    print("Count:", count)
    count += 1

# Differences:
# 1. Structure: 'for' loops iterate over a sequence (like a list, tuple, or string) or other iterable objects, while 'while' loops continue to execute as long as a specified condition is true.
# 2. Use Cases: 'for' loops are typically used when the number of iterations is known beforehand, while 'while' loops are used when the number of iterations is not predetermined and depends on a condition.
# 3. Control Flow: 'for' loops automatically handle the iteration variable, while in 'while' loops, the programmer must manually manage the loop variable and ensure the condition eventually becomes false to avoid infinite loops.    
