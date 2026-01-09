# find greatest of 3 numbers using function
# def greatestNumber(num1, num2, num3) :
#     if(num1 > num2 and num1 > num3) :
#         print(f"{num1} is greatest of {num2}&{num3}")
#     elif(num2 > num1 and num2 > num3) :
#         print(f"{num2} is greatest of {num1}&{num3}")
#     else :
#         print(f"{num3} is greatest of {num1}&{num2}")

# num1 = int(input("Enter a number: "))
# num2 = int(input("Enter a number: "))
# num3 = int(input("Enter a number: "))
# greatestNumber(num1, num2, num3)

# Convert Celsius to Fahrenheit

def c_to_f (f) :
    return 5*(f-32)/9

f = int(input("Enter temperature in F: "))
c = c_to_f(f)
print(f"Today's Temperature is {round(c,2)}°C")

# prevent new line at the end in print fuction

print("a")
print("b")
print("c", end="")
print("d")

# first sum of n natural number in recursion

def sum_of_n (n) :
    if(n == 1) :
        return 1
    return n + sum_of_n(n-1)

num = int(input("Enter a number: "))
print(f"Sum of n natural numbers: {sum_of_n(num)}")
