import os

# specify the directory path
directory_path = "."

try:
    # get a list of all entries in the directory
    contents = os.listdir(directory_path)

    # print each entry
    print(f"Contents of '{directory_path}':")
    for item in contents:
        print(item)

except FileNotFoundError:
    print("Error: Directory not found.")
except PermissionError:
    print("Error: Permission denied.")
