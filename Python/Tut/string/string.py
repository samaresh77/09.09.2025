# String : A string is a sequence of characters enclosed within single quotes (' '), double quotes (" "), or triple quotes (''' ''' or """ """).
# Strings are immutable, meaning once created, their content cannot be changed.
# Strings can be created using single quotes, double quotes, or triple quotes.
# Example of creating strings
single_quote_str = 'Hello, World!'
double_quote_str = "Hello, World!"
triple_quote_str = '''Hello,
World!'''
# Accessing characters in a string using indexing
first_char = single_quote_str[0]  # 'H'
last_char = single_quote_str[-1]   # '!'
# Slicing strings to get substrings
substring = single_quote_str[0:5]  # 'Hello'
# String methods
upper_str = single_quote_str.upper()  # 'HELLO, WORLD!'
lower_str = single_quote_str.lower()  # 'hello, world!'
split_str = single_quote_str.split(', ')  # ['Hello', 'World!']
# Concatenation of strings
greeting = single_quote_str + " How are you?"  # 'Hello, World! How are you?'
# Repetition of strings
repeat_str = single_quote_str * 3  # 'Hello, World!Hello, World!Hello, World!'
# String formatting using f-strings
name = "Alice"
age = 30
formatted_str = f"My name is {name} and I am {age} years old."  # 'My name is Alice and I am 30 years old.'
# Checking membership
is_hello_in_str = 'Hello' in single_quote_str  # True
is_bye_in_str = 'Bye' not in single_quote_str  # True
# Length of a string
str_length = len(single_quote_str)  # 13
# Stripping whitespace
whitespace_str = "   Hello, World!   "
stripped_str = whitespace_str.strip()  # 'Hello, World!'
# Replacing substrings
replaced_str = single_quote_str.replace('World', 'Python')  # 'Hello, Python!'
# Finding substrings
index_of_world = single_quote_str.find('World')  # 7
# Joining a list of strings
words = ['Hello', 'World']
joined_str = ' '.join(words)  # 'Hello World'
# Checking if a string starts or ends with a specific substring
starts_with_hello = single_quote_str.startswith('Hello')  # True
ends_with_exclamation = single_quote_str.endswith('!')  # True
# Iterating through each character in a string
for char in single_quote_str:
    print(char)
# Output:
# H
# e
# l
# l
# o
# , 
#  
# W
# o
# r
# l
# d
# !
# Multiline strings using triple quotes
multiline_str = """This is a string
that spans multiple
lines."""
print(multiline_str)
# Output:
# This is a string
# that spans multiple
# lines.
# Escape sequences in strings
escape_str = "He said, \"Hello, World!\"\nWelcome to Python programming."
print(escape_str)
# Output:
# He said, "Hello, World!"
# Welcome to Python programming.
# Raw strings to ignore escape sequences
raw_str = r"C:\Users\Name\Documents"
print(raw_str)
# Output:
# C:\Users\Name\Documents
# String comparison
str1 = "apple"
str2 = "banana"
is_equal = str1 == str2  # False
is_greater = str1 > str2  # False
is_less = str1 < str2  # True
print(f"Is '{str1}' equal to '{str2}'? {is_equal}")
print(f"Is '{str1}' greater than '{str2}'? {is_greater}")
print(f"Is '{str1}' less than '{str2}'? {is_less}")
# Output:
# Is 'apple' equal to 'banana'? False
# Is 'apple' greater than 'banana'? False
# Is 'apple' less than 'banana'? True
# String immutability demonstration
immutable_str = "Immutable"
# immutable_str[0] = 'i'  # This will raise a TypeError
# Instead, create a new string
new_str = 'i' + immutable_str[1:]  # 'immutable'
print(new_str)  # Output: 'immutable'
# Output: immutable
# Note: The line that attempts to change a character in the string is commented out because it raises an error.
# Demonstrating various string operations in Python
print(f"First character: {first_char}")
print(f"Last character: {last_char}")
print(f"Substring: {substring}")
print(f"Uppercase: {upper_str}")
print(f"Lowercase: {lower_str}")
print(f"Split string: {split_str}")
print(f"Greeting: {greeting}")
print(f"Repeated string: {repeat_str}")
print(f"Formatted string: {formatted_str}")
print(f"Is 'Hello' in string? {is_hello_in_str}")
print(f"Is 'Bye' not in string? {is_bye_in_str}")
print(f"String length: {str_length}")
print(f"Stripped string: '{stripped_str}'")
print(f"Replaced string: {replaced_str}")
print(f"Index of 'World': {index_of_world}")
print(f"Joined string: {joined_str}")
print(f"Starts with 'Hello'? {starts_with_hello}")
print(f"Ends with '!'? {ends_with_exclamation}")        
# Output:
# First character: H
# Last character: !
# Substring: Hello
# Uppercase: HELLO, WORLD!  
# Lowercase: hello, world!
# Split string: ['Hello', 'World!']
# Greeting: Hello, World! How are you?
# Repeated string: Hello, World!Hello, World!Hello, World!
# Formatted string: My name is Alice and I am 30 years old.
# Is 'Hello' in string? True
# Is 'Bye' not in string? True
# String length: 13 
# Stripped string: 'Hello, World!'
# Replaced string: Hello, Python!
# Index of 'World': 7
# Joined string: Hello World
# Starts with 'Hello'? True
# Ends with '!'? True   
# Note: The line that attempts to change a character in the string is commented out because it raises an error.
# Demonstrating various string operations in Python
print(f"First character: {first_char}")
print(f"Last character: {last_char}")
print(f"Substring: {substring}")
print(f"Uppercase: {upper_str}")
print(f"Lowercase: {lower_str}")
print(f"Split string: {split_str}")
print(f"Greeting: {greeting}")
print(f"Repeated string: {repeat_str}") 
print(f"Formatted string: {formatted_str}")
print(f"Is 'Hello' in string? {is_hello_in_str}")
print(f"Is 'Bye' not in string? {is_bye_in_str}")
print(f"String length: {str_length}")
print(f"Stripped string: '{stripped_str}'")
print(f"Replaced string: {replaced_str}")
print(f"Index of 'World': {index_of_world}")
print(f"Joined string: {joined_str}")
print(f"Starts with 'Hello'? {starts_with_hello}")
print(f"Ends with '!'? {ends_with_exclamation}")
# Output:
# First character: H
# Last character: !
# Substring: Hello  
# Uppercase: HELLO, WORLD!
# Lowercase: hello, world!
# Split string: ['Hello', 'World!']
# Greeting: Hello, World! How are you?
# Repeated string: Hello, World!Hello, World!Hello, World!
# Formatted string: My name is Alice and I am 30 years old.
# Is 'Hello' in string? True
# Is 'Bye' not in string? True
# String length: 13
# Stripped string: 'Hello, World!'
# Replaced string: Hello, Python!
# Index of 'World': 7
# Joined string: Hello World
# Starts with 'Hello'? True
# Ends with '!'? True
# Note: The line that attempts to change a character in the string is commented out because it raises an error.
# Demonstrating various string operations in Python
print(f"First character: {first_char}")
print(f"Last character: {last_char}")
print(f"Substring: {substring}")
print(f"Uppercase: {upper_str}")
print(f"Lowercase: {lower_str}")
print(f"Split string: {split_str}")
print(f"Greeting: {greeting}")
print(f"Repeated string: {repeat_str}")
print(f"Formatted string: {formatted_str}")
print(f"Is 'Hello' in string? {is_hello_in_str}")
print(f"Is 'Bye' not in string? {is_bye_in_str}")
print(f"String length: {str_length}")
print(f"Stripped string: '{stripped_str}'")
print(f"Replaced string: {replaced_str}")
print(f"Index of 'World': {index_of_world}")
print(f"Joined string: {joined_str}")   
print(f"Starts with 'Hello'? {starts_with_hello}")
print(f"Ends with '!'? {ends_with_exclamation}")
# Output:
# First character: H        
# Last character: !
# Substring: Hello
# Uppercase: HELLO, WORLD!  
# Lowercase: hello, world!  
# Split string: ['Hello', 'World!']
# Greeting: Hello, World! How are you?
# Repeated string: Hello, World!Hello, World!Hello, World!
# Formatted string: My name is Alice and I am 30 years old.
# Is 'Hello' in string? True
# Is 'Bye' not in string? True
# String length: 13
# Stripped string: 'Hello, World!'
# Replaced string: Hello, Python!
# Index of 'World': 7
# Joined string: Hello World
# Starts with 'Hello'? True
# Ends with '!'? True
# Note: The line that attempts to change a character in the string is commented out because it raises an error.
