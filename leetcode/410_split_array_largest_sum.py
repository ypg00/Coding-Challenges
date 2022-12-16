# # 410 Split Array Largest Sum

# nums = [2, 53, 12334, 3423, 535]
# k = 3

nums = [10,10,11,1,1]
k = 3

nums = [7,2,5,14,8]
k = 2

def splitArray(nums: list[int], k: int) -> int:
    # Initialize pointers
    l, r = 0, len(nums) - 1
    # Initialize lists for running sums
    L, R = [], []
    # Initialize list for subarrays
    solution = []
    # Calculate ideal subarray sum (i.e. smallest possible answer)
    ideal_subarray_sum = sum(nums) / k

    while l < r:
        L.append(nums[l])
        R.append(nums[r])
    
        while sum(L) <= ideal_subarray_sum:
            l += 1
            L.append(nums[l])
        
        while sum(R) <= ideal_subarray_sum:
            r -= 1
            R.append(nums[r])
        
        if sum(L) < sum(R) and sum(L) > ideal_subarray_sum:
            # Append to solution
            solution.append(sum(L))
            # Move pointers
            l += 1
            r = r + (len(R) - 1)
        elif sum(L) > sum(R) and sum(R) > ideal_subarray_sum:
            # Append to solution
            solution.append(sum(R))
            # Move pointers
            l = l - (len(L) - 1)
            r -= 1
        
        # Clear builder lists
        L.clear()
        R.clear()
    
    solution.sort()
    return solution[-1]

print(splitArray(nums, k))