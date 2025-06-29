import logging

logging.basicConfig(level=logging.INFO)


def calculate_area(length, width):

    logging.info(f"Length: {length}, Width: {width}")

    return length * width


print(calculate_area(5, 3))