import random
from kivy.core.clipboard import Clipboard

passlen = str(input("Enter length of password (Leave Empty for default value of 16) >> "))

if passlen == "":
    passlen = "16"

password = ""

for i in range (int(passlen)):
    password += (chr(random.randint(33,126)))

Clipboard.copy(password)

