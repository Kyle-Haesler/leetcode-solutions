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
                if not len(stack):
                    return False
                match = stack.pop()
                if key[char] != match:
                    return False
        return len(stack) == 0