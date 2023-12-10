x1 = int(input())
y1 = int(input())
x2 = int(input())
y2 = int(input())
move = "NO"
if abs(x1 - x2) == abs(y1 - y2):
    move = "YES"
if x1 == x2 or y1 == y2:
    move = "YES"
print(move)