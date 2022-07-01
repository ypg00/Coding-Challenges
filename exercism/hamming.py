def distance(strand_a, strand_b):
    if len(strand_a) != len(strand_b):
        raise ValueError("Strands must be of equal length.")
    
    hamming_distance = 0
    i = 0

    while i < len(strand_a):
        if strand_a[i] != strand_b[i]:
            hamming_distance = hamming_distance + 1
        i = i + 1
    return hamming_distance

# strand_a = "GGACTGAAATCTG"
# strand_b = "GGACTGAAATCTG"
# # expected output: 0

# strand_a = "GGACGGATTCTG"
# strand_b = "AGGACGGATTCT"
# # expected output: 9

print(distance(strand_a, strand_b))

    