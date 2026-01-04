# 1 enter a name with greeting Good Morning
name = input("Enter your name: ")
print("Good Morning!", name)

# 2 replace name and date
letter = "Dear <|NAME|>, Thanks a lot for your contribution on <|DATE|>."
name = input("Enter your name: ")
date = input("Enter the date: ")
print(letter.replace("<|NAME|>", name).replace("<|DATE|>", date))

# 3 detect double spaces in a string
text = "This is a sample  text with double  spaces."
# if "  " in text:
#     print("Double spaces found.")
# else:
#     print("No double spaces found.")
if text.find("  ") != -1:
    print("Double spaces found.")
else:
    print("No double spaces found.")