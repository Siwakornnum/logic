var romanToInt = function(s) {
    let value = 0
    const roman = {I : 1, V : 5, X : 10, L : 50, C : 100, D : 500, M : 1000}
    let t = Array.from(s)
    for(let i = 0 ; i < t.length; i++){
        if (t[i] === "I"){
            value += roman["I"]
        }
        else if (t[i] === "V"){
            value += roman["V"]
        }
        else if (t[i] === "X"){
            value += roman["X"]
        }
        else if (t[i] === "L"){
            value += roman["L"]
        }
        else if (t[i] === "C"){
            value += roman["C"]
        }
        else if (t[i] === "D"){
            value += roman["D"]
        }
        else if (t[i] === "M"){
            value += roman["M"]
        }
    }
    if(s.includes("IV") || s.includes("IX")){
        value -= 2
    }
    if(s.includes("XL") || s.includes("XC")){
        value -= 20
    }

    if(s.includes("CD") || s.includes("CM")){
        value -= 200
    }
    return value

};

console.log(romanToInt("MCMXCIV"))