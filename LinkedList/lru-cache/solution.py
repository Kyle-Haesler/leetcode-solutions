class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.map = dict()

    def get(self, key: int) -> int:
        if key in self.map:
            value = self.map.pop(key)
            self.map[key] = value
            return value
        else:
            return -1

    def put(self, key: int, value: int) -> None:
        if self.get(key) == -1:
            if self.capacity == len(self.map):
                self.map.pop(next(iter(self.map)))
        self.map[key] = value


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)