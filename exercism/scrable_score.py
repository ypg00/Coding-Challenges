def score(word):
    word_upper = word.upper()
    value = 0
    for l in word_upper:
        if l == 'A' or l == 'E' or l == 'I' or l == 'O' or l == 'U' or l == 'L' or l == 'N' or l == 'R' or l == 'S' or l == 'T':
            value = value + 1
        elif l == 'D' or l == 'G':
            value = value + 2
        elif l == 'B' or l == 'C' or l == 'M' or l == 'P':
            value = value + 3
        elif l == 'F' or l == 'H' or l == 'V' or l == 'W' or l == 'Y':
            value = value + 4
        elif l == l == 'K':
            value = value + 5
        elif l == l == 'J' or l == 'X':
            value = value + 8
        elif l == 'Q' or l == 'Z':
            value = value + 10
    return value

word = 'z'
print(f'Word {word} has a value of {score(word)}')