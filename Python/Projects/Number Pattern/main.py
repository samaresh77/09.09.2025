# Number Pattern Project
# Author: You
# Description: Interactive program to generate multiple number patterns and save to a file.

def simple_increasing(n):
    pattern = ""
    for i in range(1, n+1):
        for j in range(1, i+1):
            pattern += str(j)
        pattern += "\n"
    return pattern

def right_aligned_triangle(n):
    pattern = ""
    for i in range(1, n+1):
        pattern += " " * (n-i)
        for j in range(1, i+1):
            pattern += str(j)
        pattern += "\n"
    return pattern

def pyramid_pattern(n):
    pattern = ""
    for i in range(1, n+1):
        pattern += " " * (n-i)
        for j in range(1, i+1):
            pattern += str(j)
        for j in range(i-1, 0, -1):
            pattern += str(j)
        pattern += "\n"
    return pattern

def square_pattern(n):
    pattern = ""
    for i in range(n):
        for j in range(1, n+1):
            pattern += str(j)
        pattern += "\n"
    return pattern

def fibonacci_triangle(n):
    pattern = ""
    a, b = 0, 1
    for i in range(1, n+1):
        line = ""
        for j in range(i):
            line += str(b) + " "
            a, b = b, a + b
        pattern += line.strip() + "\n"
    return pattern

def save_to_file(pattern, filename="pattern.txt"):
    with open(filename, "w") as file:
        file.write(pattern)
    print(f"Pattern saved to {filename}")

# Main Program
def main():
    while True:
        print("\n=== Number Pattern Generator ===")
        print("1. Simple Increasing")
        print("2. Right-Aligned Triangle")
        print("3. Pyramid Pattern")
        print("4. Square Pattern")
        print("5. Fibonacci Triangle")
        print("6. Exit")

        choice = int(input("Enter your choice: "))

        if choice == 6:
            print("Exiting... Goodbye!")
            break

        rows = int(input("Enter number of rows: "))

        if choice == 1:
            pattern = simple_increasing(rows)
        elif choice == 2:
            pattern = right_aligned_triangle(rows)
        elif choice == 3:
            pattern = pyramid_pattern(rows)
        elif choice == 4:
            pattern = square_pattern(rows)
        elif choice == 5:
            pattern = fibonacci_triangle(rows)
        else:
            print("Invalid choice!")
            continue

        print("\nGenerated Pattern:\n")
        print(pattern)

        save = input("Do you want to save this pattern to a file? (y/n): ").lower()
        if save == 'y':
            save_to_file(pattern)

if __name__ == "__main__":
    main()
