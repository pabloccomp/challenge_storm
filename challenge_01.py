from builtins import len

open_list = ["[", "{", "("]
close_list = ["]", "}", ")"]


def is_balanced(input):
    stack = []
    for i in input:
        if i in open_list:
            stack.append(i)
        elif i in close_list:
            pos = close_list.index(i)
            if ((len(stack) > 0) and
                    (open_list[pos] == stack[len(stack) - 1])):
                stack.pop()
            else:
                return "Não"
    if len(stack) == 0:
        return "Sim"
