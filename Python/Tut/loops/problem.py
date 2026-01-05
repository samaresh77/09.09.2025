# 1. print number table
# input = int(input("Enter a number : "))
# for i in range(1,11) :
#     print(f"{input} * {i} = {input*i}")

# 3. using while loop
# n = int(input("Enter a number: "))
# i = 1
# while(i<11) :
#     print(n, "*", i, " = ", n*i)
#     i += 1

# 2. Greeting name start with s
# name = ["Ram", "Sam", "Ajay", "Bijoy"]
# for n in name :
#     if(n.startswith('R') or n.startswith('S')) :
#         print("Welcome,", n)

# 4. check prime or not
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

    
