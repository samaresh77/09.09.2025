import random

def game_win(comp, user):
    if comp == user:
        return None

    if comp == 's':
        if user == 'w':
            return False
        elif user == 'g':
            return True

    if comp == 'w':
        if user == 'g':
            return False
        elif user == 's':
            return True

    if comp == 'g':
        if user == 's':
            return False
        elif user == 'w':
            return True


print("Welcome to Snake 🐍 Water 💧 Gun 🔫 Game")
print("Choose: s for Snake, w for Water, g for Gun")

while True:
    comp = random.choice(['s', 'w', 'g'])
    user = input("Your choice (s/w/g): ").lower()

    if user not in ['s', 'w', 'g']:
        print("Invalid input! Try again.")
        continue

    result = game_win(comp, user)

    print(f"Computer chose: {comp}")
    print(f"You chose: {user}")

    if result is None:
        print("👉 It's a Draw!")
    elif result:
        print("🎉 You Win!")
    else:
        print("😢 You Lose!")

    play_again = input("Play again? (y/n): ").lower()
    if play_again != 'y':
        print("Thanks for playing!")
        break
