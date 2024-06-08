# Rand Test.py
#Last attempt was empty, trying again

import random

def generate_question():
    num1 = random.randint(1, 20)
    num2 = random.randint(1, 20)
    operator = random.choice(['+', '-', '*', '/'])
    if operator == '/':
        # Ensure division operation results in an integer
        num1 = num1 * num2
    question = f"What is {num1} {operator} {num2}? "
    return question, eval(str(num1) + operator + str(num2))

def get_user_answer(question):
    while True:
        try:
            answer = float(input(question))
            return answer
        except ValueError:
            print("Please enter a valid number.")

if __name__ == "__main__":
    print("Welcome to the Arithmetic Quiz!")
    print("You'll be asked 5 arithmetic questions.")

    correct_answers = 0
    for i in range(5):
        question, correct_answer = generate_question()
        user_answer = get_user_answer(question)
        if user_answer == correct_answer:
            print("Correct!")
            correct_answers += 1
        else:
            print("Incorrect!")

    print("\nQuiz Summary:")
    print(f"Total questions: 5")
    print(f"Correct answers: {correct_answers}")
    print(f"Incorrect answers: {5 - correct_answers}")
    accuracy = (correct_answers / 5) * 100
    print(f"Accuracy: {accuracy:.2f}%")