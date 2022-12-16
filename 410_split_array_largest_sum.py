# # 410 Split Array Largest Sum

# nums = [2, 53, 12334, 3423, 535]
# k = 3

nums = [10,10,11,1,1]
k = 3

nums = [7,2,5,14,8]
k = 3

def splitArray(nums: list[int], k: int) -> int:
    # Initialize pointers
    l, r = 0, len(nums) - 1
    # Initialize sets for running sums
    L, R = [], []
    # Initialize set for subarrays
    solution = []
    # Calculate ideal block sum (i.e. smallest possible answer)
    ideal_subarray_sum = sum(nums) / k

    # Print of input and calculated variables:
    # print(f'nums: {nums}')
    # print(f'k: {k}')
    # print(f'nums_sorted: {nums_sorted}')
    # print(f'sum of nums: {sum(nums)}')
    # print(f'ideal_subarray_sum: {ideal_subarray_sum}')
    # print(f'split_list: {split_list}')
    
    while l <= r:
        # Debug prints:
        # print(f'l pointer: {l}')
        # print(f'L set: {L}')
        # print(f'r pointer: {r}')
        # print(f'R set: {R}')
        # print(f'solution list: {solution}')
        # print(f'while_iterations: {while_iterations}')

        # Algorithm 
        
        L.append(nums[l])
        R.append(nums[r])
    
        while sum(L) < ideal_subarray_sum and l + 1 < r:
            l += 1
            L.append(nums[l])
        
        while sum(R) < ideal_subarray_sum and l < r - 1:
            r -= 1
            R.append(nums[r])
        
        if sum(L) < sum(R) and sum(L) > ideal_subarray_sum:
            # Append to solution
            solution.append(sum(L))
            # Move pointers
            l += 1
            r = r + (len(R) - 1)
            # Clear builder lists
            L.clear()
            R.clear()
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

splitArray(nums, k)