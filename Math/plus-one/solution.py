class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        carry = 0
        if (digits[len(digits) -1] + 1) > 9:
            digits[len(digits) - 1] = 0
            carry = 1
        else:
            digits[len(digits) - 1] += 1
            return digits
        i = len(digits) - 2
        while i >= 0:
            if (digits[i] + carry) > 9:
                digits[i] = 0
            else:
                digits[i] += carry 
                carry = 0
                break
            i -= 1
        if carry:
            digits.insert(0, 1)
        return digits