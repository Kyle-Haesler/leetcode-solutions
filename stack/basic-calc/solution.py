class Solution:
    def calculate(self, s: str) -> int:
        s = s.replace(" ", "")
        print(s)
        i = 0
        total = 0
        sign = 1
        stack = []
        while i < len(s):
            if s[i] == "+":
                sign =1
                i+=1
            elif s[i] == "-":
                sign = -1
                i+=1
            elif s[i] == "(":
                stack.append(total)
                stack.append(sign)
                total = 0
                sign = 1
                i+=1
            elif s[i] == ")":
                total *= stack.pop()
                total += stack.pop()
                i+=1
            else:
                num = 0
                while i < len(s) and s[i].isdigit():
                    num = num * 10 + int(s[i])
                    i+=1
                total+= sign *num
                
        return total