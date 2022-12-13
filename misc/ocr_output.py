def solution(S: str, T: str):

    # Creates lists for each input str, which consist of single letter elements and integars 
    # that represent the count of unrecognized letters (since the integars may be > 9, 
    # building the integar will be neccesary).

    def deconstruct_str(ocr_output: str):
        orc_output_deconstructed = []
        builder = []

        for i in range(len(ocr_output)):
            if not ocr_output[i].isalpha():
                builder.append(str(ocr_output[i]))
                if i == len(ocr_output) - 1:
                    orc_output_deconstructed.append(int("".join(builder)))
            else:
                if builder:
                    orc_output_deconstructed.append(int("".join(builder)))
                    builder.clear()
                orc_output_deconstructed.append(ocr_output[i])

        return orc_output_deconstructed

    # Using the lists created by deconstruct_str(), compare using pointers to
    # determine whether they could be scans of the same passage.

    def compare_lists(S: list, T: list):
        # Pointers
        s, t = 0, 0

        # Compare and move pointers, until one or both move out of range
        while s < len(S) and t < len(T):
            # Equal
            if S[s] == T[t]:
                s += 1
                t += 1
            # Both != int
            elif type(S[s]) == int and type(T[t]) == int:
                if S[s] > T[t]:
                    S[s] = S[s] - T[t]
                    t += 1
                else:
                    T[t] = T[t] - S[s]
                    s += 1
            # S[s]: str and T[t]: int
            elif type(S[s]) == str and type(T[t]) == int:
                s += 1
                T[t] -= 1
                if T[t] == 0:
                    t += 1
            # S[s]: int and T[t]: str
            elif type(S[s]) == int and type(T[t]) == str:
                t += 1
                S[s] -= 1 
                if  S[s] == 0:
                    s += 1
            # Both != str
            else:
                return False

        if s == len(S) and t == len(T):
            return True
        else:
            return False

    # First sub-function call
    S_deconstructed = deconstruct_str(S)
    T_deconstructed = deconstruct_str(T)

    # Second sub-function call
    return compare_lists(S_deconstructed, T_deconstructed)