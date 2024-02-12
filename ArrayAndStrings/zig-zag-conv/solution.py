class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        result = dict()
        row = 1
        direction = "down"
        for char in s:
            if row in result:
                result[row].append(char)
            else:
                result[row] = [char]
            if direction == "down":
                if row + 1 > numRows:
                    direction = "up"
                    row -=1
                else:
                    row +=1
            else:
                if row - 1 < 1:
                    direction = "down"
                    row +=1
                else:
                    row -=1
        final_result = ""
        for key in result:
            final_result += "".join(result[key])
        return final_result