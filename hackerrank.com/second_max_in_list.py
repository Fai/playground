if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    r = -100
    m = -100
    for k in arr:
        if k > m:
            r = m
            m = k
        elif k != m and k > r:
            r = k
    print(r)