if __name__ == '__main__':
    students = []
    scores = []
    names = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
        scores.append(score)
    # students is nested list of students with their score
    scores.sort()
    for n, s in students:
        if s == scores[1]:
            names.append(n)
    names.sort()
    for n in names:
        print(n)