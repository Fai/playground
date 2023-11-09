# given list of integers that represent 2d grid with n rows and m columns
# cell is called dominat cell if it has stringly greater vale than is neighbors (8 direction)
# find the number o f dominat cells in the grid


#
# Complete the 'numCells' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY grid as parameter.
#

def numCells(grid):
    # Write your code here
    count = 0
    n = len(grid)
    m = len(grid[0])
    for i in range(n):
        for j in range(m):
            current = grid[i][j]
            if i != 0 and j != 0:
                northwest = grid[i-1][j-1]
            else:
                northwest = 0
            if i != 0:
                north = grid[i-1][j]
            else:
                north = 0
            if i != 0 and j != m-1:
                northeast = grid[i-1][j+1]
            else:
                northeast = 0
            if j != m-1:
                east = grid[i][j+1]
            else:
                east = 0
            if i != n-1 and j != m-1:
                southeast = grid[i+1][j+1]
            else:
                southeast = 0
            if i != n-1:
                south = grid[i+1][j]
            else:
                south = 0
            if i != n-1 and j != 0:
                southwest = grid[i+1][j-1]
            else:
                southwest = 0
            if j != 0:
                west = grid[i][j-1]
            else:
                west = 0
            
            if current > max(north, northeast, northwest, east, west, south, southeast, southwest):
                count = count + 1
    return count
