x1 = int(input())
y1 = int(input())
c1 = "WHITE"
if x1 % 2 == 1 and y1 % 2 == 1:
    c1 = "BLACK"
if x1 % 2 == 0 and y1 % 2 == 0:
    c1 = "BLACK"
x2 = int(input())
y2 = int(input())
c2 = "WHITE"
if x2 % 2 == 1 and y2 % 2 == 1:
    c2 = "BLACK"
if x2 % 2 == 0 and y2 % 2 == 0:
    c2 = "BLACK"
if c1 == c2:
    print("YES")
else:
    print("NO")