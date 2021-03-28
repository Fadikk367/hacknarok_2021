from enum import Enum

class Category(Enum):
    biology = 1
    it = 2
    calculus = 3
    algebra = 4

    @classmethod
    def has_value(cls, value):
        return value in cls._value2member_map_ 