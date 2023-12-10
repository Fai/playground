n = int(input())
m = int(input())
k = int(input())
output = "NO"
if k % n == 0 and k // n < m:
    output = "YES"
if k % m == 0 and k // m < n:
    output = "YES"
print(output)