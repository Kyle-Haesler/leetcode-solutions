class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        sList = s.strip().split(" ")
        print(sList)
        return len(sList[len(sList) - 1])