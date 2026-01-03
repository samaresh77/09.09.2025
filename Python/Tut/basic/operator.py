# Arithmetic Operators
print(5 + 3)  # Addition
print(5 - 3)  # Subtraction
print(5 * 3)  # Multiplication
print(5 / 3)  # Division
print(5 // 3) # Floor Division
print(5 % 3)  # Modulus
print(5 ** 3) # Exponentiation
""" Arithmetic Operators: These operators are used to perform mathematical operations."""

# Comparison Operators
print(5 == 3)  # Equal to
print(5 != 3)  # Not equal to
print(5 > 3)   # Greater than
print(5 < 3)   # Less than
print(5 >= 3)  # Greater than or equal to
print(5 <= 3)  # Less than or equal to
""" Comparison Operators: These operators compare two values and return a boolean result (True or False)."""

# Logical Operators
print(True and False)  # Logical AND
print(True or False)   # Logical OR
print(not True)        # Logical NOT
""" Logical Operators: These operators are used to combine conditional statements."""

# Assignment Operators
x = 5
x += 3  # Equivalent to x = x + 3
print(x)
x -= 2  # Equivalent to x = x - 2
print(x)
x *= 4  # Equivalent to x = x * 4
print(x)
x /= 2  # Equivalent to x = x / 2
print(x)
""" Assignment Operators: These operators are used to assign values to variables with shorthand notation."""

# Bitwise Operators
print(5 & 3)  # Bitwise AND
print(5 | 3)  # Bitwise OR
print(5 ^ 3)  # Bitwise XOR
print(~5)     # Bitwise NOT
print(5 << 1) # Left Shift
print(5 >> 1) # Right Shift
""" Bitwise Operators: These operators perform bit-level operations on integers."""

# Membership Operators
fruits = ["apple", "banana", "cherry"]
print("banana" in fruits)    # Membership test
print("grape" not in fruits)  # Membership test
""" Membership Operators: These operators test for membership in a sequence (like lists, tuples, or strings)."""

# Identity Operators
a = 5
b = 5
c = a
print(a is b)   # Identity test
print(a is c)   # Identity test
print(a is not c) # Identity test
""" Identity Operators: These operators compare the memory locations of two objects to determine if they are the same object."""
""" Operator Overview: Operators are special symbols in Python that perform operations on variables and values. They can be categorized into several types, including: Arithmetic, Comparison, Logical, Assignment, Bitwise, Membership, and Identity Operators."""
""" Operator Precedence: In Python, operators have a defined order of precedence that determines the sequence in which operations are performed in an expression. For example, multiplication and division have higher precedence than addition and subtraction. Parentheses can be used to explicitly define the order of operations."""
""" Example:
result = (5 + 3) * 2  # Parentheses change the order of operations
print(result)  # Output: 16"""

""" Combining Operators: Operators can be combined in complex expressions to perform multiple operations. For example:
x = 10
y = 5
result = (x + y) * (x - y) / y  # Combines addition, subtraction, multiplication, and division
print(result)  # Output: 30.0"""

""" Operator Overloading: In Python, operators can be overloaded, meaning that their behavior can be defined for user-defined data types. For example, the '+' operator can be used to concatenate two strings or add two numbers, depending on the context."""
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)
p1 = Point(2, 3)
p2 = Point(4, 5)
p3 = p1 + p2  # Uses overloaded '+' operator
print(f"Point p3: ({p3.x}, {p3.y})")  # Output: Point p3: (6, 8)
""" Operator Overloading: This allows custom behavior for operators in user-defined classes, enabling intuitive operations on objects of those classes."""
""" Summary: Operators are essential components in Python that facilitate various operations on data. Understanding their types, precedence, and how to combine them is crucial for effective programming."""
""" Operator Types: Python supports various types of operators, each serving a specific purpose:
1. Arithmetic Operators: Used for mathematical calculations.
2. Comparison Operators: Used to compare values.
3. Logical Operators: Used to combine conditional statements.
4. Assignment Operators: Used to assign values to variables.
5. Bitwise Operators: Used to perform bit-level operations.
6. Membership Operators: Used to test for membership in a sequence.
7. Identity Operators: Used to compare the memory locations of two objects."""

""" Operator Functions: Python provides built-in functions that can be used as operators. For example:
- divmod(a, b): Returns a tuple containing the quotient and remainder of a divided by b.
- pow(a, b): Returns a raised to the power of b.
Example:
quotient, remainder = divmod(10, 3)
print(quotient, remainder)  # Output: 3 1
power = pow(2, 3)
print(power)  # Output: 8"""

""" Operator Functions: These built-in functions provide additional ways to perform operations that are commonly needed in programming."""
