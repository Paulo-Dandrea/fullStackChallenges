class HashMap:
    def __init__(self):
        self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee['id_num'])
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
            else:
                return None

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None
    
    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        self._buckets[address] = {'id_num': id_num, 'name': new_name}
    
    def __repr__(self):
      print('[') 
      for b in self._buckets:
        print(str(b))
      print(']')

employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
employees_objects = []

for em in employees:
  employee = {}
  employee["id_num"] = em[0]
  employee["name"] = em[1]
  employees_objects.append(employee)

hs = HashMap()

for em in employees_objects:
  hs.insert(em)

print(hs.get_value(23))

hs.update_value(23, 'hasafada')

repr(hs)
# print(hs.get_value(23))