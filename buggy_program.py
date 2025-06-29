def find_largest(numbers):

    largest = numbers[0]  # Error: Should initialize to the first element in the list #Error fixed

    for num in numbers:

        if num > largest:

            largest = num  # Error: Should use =, not ==   #Error Fixed

    return largest


numbers = [3, 5, 2, 8, 1]

print("The largest number is", find_largest(numbers))  # Error: Incorrect function name #Error fixed