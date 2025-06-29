def binary_search(data, target):
    low = 0
    high = len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        if data[mid] == target:
            return f"Target found at index {mid}"
        elif data[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return "Target not found"

# Example usage
sorted_dataset = [1, 3, 5, 7, 8, 9]
target = 7
print(binary_search(sorted_dataset, target))  # Output: Target found at index 3