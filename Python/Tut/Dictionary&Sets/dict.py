# Dictionary and Sets
# A dictionary is a collection which is unordered, changeable and indexed. In Python dictionaries are written with curly brackets, and they have keys and values.
# A set is a collection which is unordered and unindexed. In Python sets are written with curly brackets.
# Example of a dictionary
my_dict = {'name': 'Alice', 'age': 25, 'city': 'New York'}
print("Original dictionary:", my_dict)
# Accessing a value by key
print("Name:", my_dict['name'])
# Adding a new key-value pair
my_dict['job'] = 'Engineer'
print("Dictionary after adding job:", my_dict)
# Modifying an existing value
my_dict['age'] = 26
print("Dictionary after modifying age:", my_dict)
# Example of a set
my_set = {1, 2, 3, 4, 5}
print("Original set:", my_set)
# Adding an item to the set
my_set.add(6)
print("Set after adding 6:", my_set)
# Removing an item from the set
my_set.remove(3)
print("Set after removing 3:", my_set)
# Demonstrating that dictionaries are mutable
my_dict['city'] = 'Los Angeles'
print("Dictionary after modifying city:", my_dict)
# Demonstrating that sets are mutable
my_set.add(7)
print("Set after adding 7:", my_set)

# Differences:
# 1. Structure: Dictionaries store data in key-value pairs, while sets store only unique values.
# 2. Indexing: Dictionaries are indexed by keys, while sets are unordered and do not support indexing.
# 3. Mutability: Both dictionaries and sets are mutable, meaning their contents can be changed.
# 4. Use Cases: Dictionaries are used when you need to associate values with keys, while sets are used when you need to store unique items and perform operations like union, intersection, and difference.
# Difference between dictionary and set in python
# Dictionary: A dictionary is a built-in Python data structure that stores data in key-value pairs.
# It is mutable, meaning you can change its contents (add, remove, or modify key-value pairs).
# Dictionaries are indexed by keys, which can be of various data types (e.g., strings, numbers, tuples).
# Example:
my_dict = {'name': 'Bob', 'age': 30, 'city': 'Chicago'}
print("Dictionary:", my_dict)
# Set: A set is another built-in Python data structure that stores a collection of unique items.
# It is also mutable, allowing you to add or remove items.
# Sets are unordered and do not support indexing or duplicate values.
# Example:
my_set = {1, 2, 3, 4, 5}
print("Set:", my_set)
# Summary of differences:
# 1. Structure: Dictionaries store data in key-value pairs, while sets store only unique values.
# 2. Indexing: Dictionaries are indexed by keys, while sets are unordered and do not support indexing.
# 3. Use Cases: Dictionaries are used for associative arrays where you need to map keys to values, while sets are used for storing unique items and performing mathematical set operations like union and intersection.

# Empty dictionary and set
empty_dict = {}
print("Empty dictionary:", empty_dict)
print(type(empty_dict))
empty_set = set()
print("Empty set:", empty_set)
print(type(empty_set))