def F_to_C(fahrenheit):
    return (fahrenheit - 32) * 5 / 9


def C_to_F(celsius):
    return celsius * 9 / 5 + 32

# Main loop for the program
while True:
    # Print the menu options
    print("\nTemperature Conversion Menu")
    print("1. Fahrenheit to Celsius")
    print("2. Celsius to Fahrenheit")
    print("3. Exit")

    # Prompt the user for their choice
    choice = int(input("Enter your choice (1/2/3): "))

    # Handle the user's choice
    if choice == 1:
        fahrenheit = float(input("Enter temperature in Fahrenheit: "))
        celsius = F_to_C(fahrenheit)
        print(f"{fahrenheit}°F is equal to {celsius:.2f}°C")
    elif choice == 2:
        celsius = float(input("Enter temperature in Celsius: "))
        fahrenheit = C_to_F(celsius)
        print(f"{celsius}°C is equal to {fahrenheit:.2f}°F")
    elif choice == 3:
        print("Exiting the program. Goodbye!")
        break
    else:
        print("Invalid choice. Please try again.")