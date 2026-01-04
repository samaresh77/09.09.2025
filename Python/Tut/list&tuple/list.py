# list: list is a mutable sequence type in Python that can hold a collection of items.
# tuple: tuple is an immutable sequence type in Python that can also hold a collection of items.
# Example of a list
my_list = [1, 2, 3, 4, 5]
print("Original list:", my_list)
my_list.append(6)  # Adding an item to the list
print("List after appending 6:", my_list)
# Example of a tuple
my_tuple = (1, 2, 3, 4, 5)
print("Original tuple:", my_tuple)
# Tuples are immutable, so we cannot add items to it
# The following line would raise an error if uncommented
# my_tuple.append(6)
# However, we can create a new tuple by concatenation
new_tuple = my_tuple + (6,)
print("New tuple after adding 6:", new_tuple)
# Demonstrating mutability of list
my_list[0] = 10
print("List after modifying the first element:", my_list)
# Demonstrating immutability of tuple
# The following line would raise an error if uncommented
# my_tuple[0] = 10
print("Tuple remains unchanged:", my_tuple)

# Differences:
# 1. Mutability: Lists are mutable (can be changed), while tuples are immutable (cannot be changed).
# 2. Syntax: Lists use square brackets [], while tuples use parentheses ().
# 3. Performance: Tuples can be more memory efficient and faster than lists for certain operations due to their immutability.
# 4. Use Cases: Lists are typically used for collections of items that may need to change, while tuples are used for fixed collections of items.   


# Difference between list , array and tuple in python
# List: A list is a built-in Python data structure that can hold a collection of items.
# It is mutable, meaning you can change its contents (add, remove, or modify items).
# Lists can hold items of different data types (e.g., integers, strings, objects).
# Example:
my_list = [1, "hello", 3.14, True]
print("List:", my_list)
# Array: An array is a data structure provided by the 'array' module in Python.
# Arrays are more efficient for storing large collections of items of the same data type.
# They are mutable, but they require you to specify the data type when creating the array.
# Example:
import array
my_array = array.array('i', [1, 2, 3, 4, 5])  # 'i' indicates an array of integers
print("Array:", my_array)
# Tuple: A tuple is another built-in Python data structure that can hold a collection of items.
# It is immutable, meaning once it is created, its contents cannot be changed.
# Tuples can also hold items of different data types.
# Example:
my_tuple = (1, "hello", 3.14, True)
print("Tuple:", my_tuple)
# Summary of differences:
# 1. Mutability: Lists and arrays are mutable, while tuples are immutable.
# 2. Data Types: Lists and tuples can hold items of different data types, while arrays require items to be of the same data type.
# 3. Performance: Arrays can be more memory efficient and faster for large collections of items of the same type compared to lists.
