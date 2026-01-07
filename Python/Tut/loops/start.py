# star pattern using loops
n = 5
for i in range(n):
    for j in range(i + 1):
        print("*", end="")
    print()

# factorial of a number
num = int(input("Enter a number to find its factorial: "))
factorial = 1
for i in range(1, num + 1):
    factorial *= i
print(f"The factorial of {num} is {factorial}")

# Fibonacci series up to n terms
terms = int(input("Enter the number of terms for Fibonacci series: "))
a, b = 0, 1
print("Fibonacci series:")
for _ in range(terms):
    print(a, end=" ")
    a, b = b, a + b
print()

# sum of natural numbers up to n
n = int(input("Enter a number to find the sum of natural numbers up to it: "))
sum_n = sum(range(1, n + 1))
print(f"The sum of natural numbers up to {n} is {sum_n}")
# Check if a number is prime
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
num = int(input("Enter a number: "))
if is_prime(num):
    print("Prime number")
else:
    print("Not a prime number")

