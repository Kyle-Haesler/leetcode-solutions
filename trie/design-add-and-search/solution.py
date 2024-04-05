class WordDictionary:

    def __init__(self):
        self.trie = {}

    def addWord(self, word: str) -> None:
        node = self.trie
        for c in word:
            if c not in node:
                node[c] = {}
            node = node[c]
        node["isEnd"] = True

    def dfs(self, word, trie, index: str) -> bool:
        if len(word) == index:
            return trie.get("isEnd", False)
        char = word[index]
        if char == ".":
            for key in trie:
                if key != "isEnd" and self.dfs(word, trie[key], index+1):
                    return True
                
        else:
            if char in trie:
                return self.dfs(word,trie[char],index+1)
        return False
    def search(self, word: str) -> bool:
        return self.dfs(word, self.trie, 0)
        


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)