import random
class RandomizedSet:

    def __init__(self):
        self.nums = []
        self.indexes = dict()

    def insert(self, val: int) -> bool:
        if val in self.indexes:
            return False
        else:
            self.nums.append(val)
            self.indexes[val] = len(self.nums)-1
            return True

    def remove(self, val: int) -> bool:
        if val in self.indexes:
            index = self.indexes[val]
            lastElement = self.nums[len(self.nums)-1]
            self.nums[index] = lastElement
            self.nums.pop()
            self.indexes[lastElement] = index
            del self.indexes[val]
            return True
        else:
            return False

    def getRandom(self) -> int:
        return random.choice(self.nums)


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()