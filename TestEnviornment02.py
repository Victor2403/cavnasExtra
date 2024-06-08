# test is successful, runs Python

def get_valid_number(prompt):
    while True:
        try:
            num = int(input(prompt))
            if 1 <= num <= 50:
                return num
            else:
                print("Please enter a number between 1 and 50.")
        except ValueError:
            print("Please enter a valid integer.")

if __name__ == "__main__":
    print("Welcome to the number multiplication program!")
    print("Please pick two numbers between 1 and 50.")

    num1 = get_valid_number("Enter the first number: ")
    num2 = get_valid_number("Enter the second number: ")

    result = num1 * num2
    print(f"The result of multiplying {num1} and {num2} is: {result}")