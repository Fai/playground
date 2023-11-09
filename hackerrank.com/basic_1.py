# implement two vehicle classes
# Car
# constructor for car take two arguments
# first arguments is maximum speed
# second arguments is units of speed; either "km/h" or "mph"
# class return a string based on the arguments
# "Car with maximum speed of 100 km/h" without quotes
# Boat
# constructor for boat take single arguments
# argument is maximum speed in knots
# class return strings based on arguments
# "Boat with maximum speed of 100 knots" without quotes

class Car:
    def __init__(self, max_speed, speed_unit):
        self.max_speed = max_speed
        self.speed_unit = speed_unit
    def __str__(self):
        return "Car with the maximum speed of " + str(self.max_speed) + " " + str(self.speed_unit)

class Boat:
    def __init__(self, max_speed):
        self.max_speed = max_speed
        
    def __str__(self):
        return "Boat with the maximum speed of " + str(self.max_speed) + " knots"
        