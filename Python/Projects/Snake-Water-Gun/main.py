'''
Docstring for Python.Projects.Snake-Water-Gun.main
snake = 1
water = -1
gun = 0
'''

import random
def gameWin(comp, you):
    # if two values are equal, declare a tie!
    if comp == you:
        return None

    # check for all possibilities when computer chose snake
    elif comp == 1:
        if you == 0:
            return False
        elif you == -1:
            return True

    # check for all possibilities when computer chose gun
    elif comp == 0:
        if you == 1:
            return True
        elif you == -1:
            return False

    # check for all possibilities when computer chose water
    elif comp == -1:
        if you == 1:
            return False
        elif you == 0:
            return True
print("Comp Turn: Snake(1) Water(-1) Gun(0)?")
randNo = random.randint(0, 2)
if randNo == 0:
    comp = 1
elif randNo == 1:
    comp = -1
elif randNo == 2:
    comp = 0
you = int(input("Your Turn: Snake(1) Water(-1) Gun(0)?"))
a = gameWin(comp, you)
print(f"Computer chose {comp}")
print(f"You chose {you}")
if a == None:
    print("The game is a tie!")
elif a:
    print("You win!")
else:
    print("You lose!")

