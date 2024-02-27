class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # go through the list, sort the words, add original word to map if sorted version is included
        res_map = {}
        res = []
        for word in strs:
            word_list = list(word)
            word_list.sort()
            sorted_word = "".join(word_list)
            
            if sorted_word in res_map:
                res_map[sorted_word].append(word)
            else:
                res_map[sorted_word] = [word]
        for (key,value) in res_map.items():
            res.append(value)
        return res

            