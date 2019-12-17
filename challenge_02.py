def two_sum(nums, target):

    index_map = {}
    for i in range(len(nums)):
        num = nums[i]
        pair = target - num
        if pair in index_map:
            return [index_map[pair], i]
        index_map[num] = i
    return None

