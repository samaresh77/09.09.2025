# write file
# st = "Hello, World!\nThis is a sample file.\n"
# file = open("./sample.txt", "w")
# file.write(st)
# file.close()

import os
print(os.getcwd())

# read file
# file = open("ex2.txt", "r")
# content = file.read()
# print(content)
# file.close()

with open("ex2.txt", "r") as file:
    content = file.read()
    print(content)

# append file
file = open("ex2.txt", "a")
file.write("\nThis is an appended line.")
file.close()

# read file after appending
file = open("ex2.txt", "r")
content = file.read()
print(content)
file.close()

# # using 'with' statement
# with open("ex2.txt", "r") as file:
#     content = file.read()
#     print(content)
