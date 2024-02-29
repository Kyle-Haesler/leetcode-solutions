class Solution:
    def isValid(self, s: str) -> bool:
        key = {
            ")": "(",
            "}": "{",
            "]": "["
        }
        stack = []
        for i in range(len(s)):
            char = s[i]
            if char == "(" or char == "[" or char == "{":
                stack.append(char)
            else:
                if len(stack) == 0:
                    return False
                popped = stack.pop()
                if key[char] != popped:
                    return False
        return True if len(stack) == 0 else False