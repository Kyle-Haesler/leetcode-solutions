class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ranMap = {}
        for letter in ransomNote:
            ranMap[letter] = ranMap.get(letter,0) + 1
        
        magMap = {}
        for letter in magazine:
            magMap[letter] = magMap.get(letter,0) + 1
        
        for letter in ransomNote:
            if letter not in magMap:
                return False
            if letter in magMap:
                if magMap[letter] < ranMap[letter]:
                    return False
        return True