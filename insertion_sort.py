def insertion_sort(list):
    for index in range(len(list)):
        temp_value = list[index]
        position = index
        while position > 0 and list[position - 1] > temp_value:
            list[position] = list[position - 1]
            position = position - 1
        list[position] = temp_value
    return list

# reference
# https://repl.it/@EvaB/InsertionSortPythonreview
