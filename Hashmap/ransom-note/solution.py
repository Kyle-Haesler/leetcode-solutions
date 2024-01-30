class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ran = dict()
        for r in ransomNote:
            if r in ran:
                ran[r] = ran[r] + 1
            else:
                ran[r] = 1
        mag = dict()
        for m in magazine:
            if m in mag:
                mag[m] = mag[m] + 1
            else:
                mag[m] = 1
        
        for (key, value) in ran.items():
            if key not in mag:
                return False
            else:
                if mag[key] < value:
                    return False
        return True