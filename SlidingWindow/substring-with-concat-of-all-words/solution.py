class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        wordLength = len(words[0])
        totalLength = len(words) * wordLength
        result = []
        wordCount = {}
        for word in words:
            wordCount[word] = wordCount.get(word,0) + 1
        for i in range(0, len(s) - totalLength + 1):
            seen = {}
            matches = 0
            for j in range(i, i + totalLength, wordLength):
                temp = s[j:j+ wordLength]
                if temp in wordCount:
                    seen[temp] = seen.get(temp,0) + 1
                    if seen[temp] > wordCount[temp]:
                        break
                    matches +=1
                else:
                    break
                if matches == len(words):
                    result.append(i)
        return result