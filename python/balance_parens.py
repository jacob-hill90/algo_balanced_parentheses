def balance_parens(str):
    
    answer = ""
    open = 0
    closed = 0
    close_open = 0
    str_list = list(str)

    for j in str_list:
        if j == "(":
            open += 1
        if j == ")":
            closed +=1

    counter = 0
    min = open * 2
    if closed < open:
        min = closed * 2

    for i in str_list:

        if i == "(" and close_open == 0 and counter < min:
            answer += i
            close_open = 1
            counter += 1
        
        if i == ")" and close_open == 1 and counter < min:
            answer += i
            close_open = 0
            counter += 1
        
        if i != "(" and i != ")":
            answer += i

    return answer
