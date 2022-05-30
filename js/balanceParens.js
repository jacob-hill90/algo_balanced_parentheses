balanceParens = (str) => {
    
    let answer = "", open = 0, closed = 0
    let closeOpen = 0
    let strArr = str.split('')

    for(let j of strArr){
        if(j === "("){open += 1}
        if(j === ")"){closed += 1}
    }

    let counter = 0
    let min = open * 2
    if(closed < open){min = closed * 2}

    for(let i of strArr){
        
        if(i === "(" && closeOpen === 0 && counter < min){
            answer += i
            closeOpen = 1
            counter += 1
        }
        
        if(i === ")" && closeOpen === 1 && counter < min){
            answer += i
            closeOpen = 0
            counter += 1
        }
    
        if(i !== "(" && i !== ")"){
        answer += i
        }
    }
    return answer
}

module.exports = { balanceParens }