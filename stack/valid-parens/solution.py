class Solution:
    def isValid(self, s: str) -> bool:
        key = {
            ")": "(",
            "}": "{",
            "]": "["
        }
        stack = []
        for char in s:
            if char == "(" or char == "{" or char == "[":
                stack.append(char)
            else:
                if len(stack) == 0: return False
                popped = stack.pop()
                if key[char] != popped:
                    return False
                
        if len(stack) == 0:
            return True
        else:
            return False