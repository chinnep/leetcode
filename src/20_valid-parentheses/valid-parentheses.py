def isValid(s: str) -> bool:
    stack = []
    for el in s:
      if el in ['(', '{', '[']:
        stack.append(el)
      elif (len(stack) > 0 and ((stack[-1] == '(' and el == ')')
        or (stack[-1] == '[' and el == ']')
        or (stack[-1] == '{' and el == '}'))):
        stack.pop()
      else:
        return False
    return len(stack) == 0
