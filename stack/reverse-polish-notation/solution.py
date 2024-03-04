class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        # alrighty so just iterate list, add numbers to stack, pop them off when we get to an operator
        stack = []
        for tok in tokens:
            if tok == "+" or tok == "-" or tok == "*" or tok == "/":
                right = stack.pop()
                left = stack.pop()
                if tok == "+":
                    stack.append(left+right)
                if tok == "-":
                    stack.append(left-right)
                if tok == "*":
                    stack.append(left*right)
                if tok == "/":
                    stack.append(trunc(left/right))
            else:
                stack.append(int(tok))
        
        return stack[0]