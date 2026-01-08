# Functions: A function is a block of code which only runs when it is called. 
# You can pass data, known as parameters, into a function. 
# A function can return data as a result.

# Defining a function
def greet() :
    name = input("Enter your name: ").capitalize()
    print("Good Morning!", name)

greet() # Calling a function

# Function with parameters
def greet_user(name) :
    print("Good Morning!", name.capitalize())
greet_user("alice") # Calling a function with argument

# Function with return value
def add(a, b) :
    return a + b
result = add(5, 3) # Calling a function and storing the return value
print("Sum is:", result)

# Function with default parameters
def greet_person(name="Guest") :
    print("Hello,", name)
greet_person() # Calling function without argument
greet_person("Bob") # Calling function with argument

# Function with variable number of arguments
def sum_all(*args) :
    total = 0
    for num in args :
        total += num
    return total
print("Sum of all numbers:", sum_all(1, 2, 3, 4, 5)) # Calling function with multiple arguments

# Recursive function
def factorial(n) :
    if n == 0 or n == 1 :
        return 1
    else :
        return n * factorial(n - 1)
print("Factorial of 5 is:", factorial(5)) # Calling recursive function

# Lambda function (anonymous function)
square = lambda x : x * x
print("Square of 4 is:", square(4)) # Calling lambda function

# Function with keyword arguments
def display_info(name, age) :
    print("Name:", name)
    print("Age:", age)
display_info(age=25, name="Charlie") # Calling function with keyword arguments  

# Function with docstring
def multiply(a, b) :
    """This function returns the product of two numbers."""
    return a * b
print("Product is:", multiply(4, 5)) # Calling function
print(multiply.__doc__) # Accessing the docstring of the function

# Nested function
def outer_function(text) :
    def inner_function() :
        print(text)
    inner_function()
outer_function("Hello from the nested function!") # Calling outer function

# Function with type hints
def divide(a: float, b: float) -> float :
    return a / b
print("Division result is:", divide(10.0, 2.0)) # Calling function with type hints

# Function with global variable
counter = 0
def increment_counter() :
    global counter
    counter += 1
increment_counter() # Calling function to modify global variable
print("Counter value is:", counter)

# Function with nonlocal variable
def outer() :
    count = 0
    def inner() :
        nonlocal count
        count += 1
        return count
    return inner
counter_function = outer()
print("Nonlocal counter value is:", counter_function()) # Calling inner function
print("Nonlocal counter value is:", counter_function()) # Calling inner function again

# Function with exception handling
def safe_divide(a, b) :
    try :
        return a / b
    except ZeroDivisionError :
        return "Error: Division by zero is not allowed."
print("Safe division result is:", safe_divide(10, 0)) # Calling function
print("Safe division result is:", safe_divide(10, 2)) # Calling function

# Function with list as parameter
def print_list(items) :
    for item in items :
        print(item)
print_list(["apple", "banana", "cherry"]) # Calling function with list argument

# Function with dictionary as parameter
def print_dict(info) :
    for key, value in info.items() :
        print(f"{key}: {value}")
print_dict({"name": "David", "age": 30, "city": "New York"}) # Calling function with dictionary argument
# Function with keyword-only arguments
def display_details(*, name, age) :
    print("Name:", name)
    print("Age:", age)
display_details(name="Eve", age=28) # Calling function with keyword-only arguments
# Function with positional-only arguments (Python 3.8+)
def add_numbers(a, b, /) :
    return a + b
print("Addition result is:", add_numbers(3, 7)) # Calling function with positional-only arguments
# Function with mutable default argument
def append_to_list(value, lst=None) :
    if lst is None :
        lst = []
    lst.append(value)
    return lst
print("List after appending:", append_to_list(1)) # Calling function
print("List after appending:", append_to_list(2)) # Calling function again
# Function with generator
def generate_squares(n) :
    for i in range(n) :
        yield i * i
for square in generate_squares(5) : # Calling generator function
    print("Square:", square)
# Function with closure
def make_multiplier(factor) :
    def multiply(number) :
        return number * factor
    return multiply
double = make_multiplier(2) # Creating a closure
print("Double of 5 is:", double(5)) # Calling the closure function
triple = make_multiplier(3) # Creating another closure
print("Triple of 5 is:", triple(5)) # Calling the closure function
# Function with async/await (Python 3.5+)
import asyncio
async def async_greet(name) :
    await asyncio.sleep(1)
    print("Hello,", name)
async def main() :
    await async_greet("Frank")
asyncio.run(main()) # Running the async function
# Function with method inside a class
class Person :
    def __init__(self, name) :
        self.name = name
    def introduce(self) :
        print("My name is", self.name)
p = Person("Grace")
p.introduce() # Calling method inside class
# Function with partial application
from functools import partial
def power(base, exponent) :
    return base ** exponent
square = partial(power, exponent=2)
print("Square of 6 is:", square(6)) # Calling partially applied function
cube = partial(power, exponent=3)
print("Cube of 3 is:", cube(3)) # Calling partially applied function
# Function with memoization
def memoize(func) :
    cache = {}
    def wrapper(n) :
        if n not in cache :
            cache[n] = func(n)
        return cache[n]
    return wrapper
@memoize
def fibonacci(n) :
    if n <= 1 :
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
print("Fibonacci of 10 is:", fibonacci(10)) # Calling memoized function
print("Fibonacci of 15 is:", fibonacci(15)) # Calling memoized function

