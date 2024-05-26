if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())
    # print list comprehensions of (i,j,k) for i from 0-x, j from 0-y, k from 0-z when i + j + k is not n
    print([[a, b, c] for a in range(x + 1) for b in range(y + 1) for c in range(z + 1) if a + b + c != n])