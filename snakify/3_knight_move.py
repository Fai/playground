x1 = int(input())
y1 = int(input())
x2 = int(input())
y2 = int(input())
move = "NO"

if abs(x1 - x2) == 2 and abs(y1 - y2) == 1:
    move = "YES"
if abs(x1 - x2) == 1 and abs(y1 - y2) == 2:    
    move = "YES"

print(move)