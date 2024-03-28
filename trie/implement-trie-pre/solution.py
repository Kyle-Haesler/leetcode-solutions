class Trie:

    def __init__(self):
        self.root = {}

    def insert(self, word: str) -> None:
        node = self.root
        for c in word:
            if c not in node:
                node[c] = {}
            node = node[c]
        node["isWord"] = True

    def traverse(self, word: str) -> bool:
        node = self.root
        for c in word:
            if c not in node:
                return None
            node = node[c]
        return node
    def search(self, word: str) -> bool:
        node = self.traverse(word)
        return bool(node and "isWord" in node)

    def startsWith(self, prefix: str) -> bool:
        node = self.traverse(prefix)
        return bool(node)


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)