def linear_search(data, target):
    for index, value in enumerate(data):
        if value == target:
            return f"Target found at index {index}"
    return "Target not found"

# Example usage
dataset = [5, 3, 7, 1, 8, 9]
target = 7
print(linear_search(dataset, target))  # Output: Target found at index 2