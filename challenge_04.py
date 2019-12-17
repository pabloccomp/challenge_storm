def find_water_in_map(input_list):
    n = len(input_list)

    left = [0] * n

    right = [0] * n

    counter = 0

    left[0] = input_list[0]
    for i in range(1, n):
        left[i] = max(left[i - 1], input_list[i])

    right[n - 1] = input_list[n - 1]
    for i in range(n - 2, -1, -1):
        right[i] = max(right[i + 1], input_list[i])

    for i in range(0, n):
        counter += min(left[i], right[i]) - input_list[i]

    return counter
