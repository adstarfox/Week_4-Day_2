
const decode = num => {
    let alphabet = ['a',`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`]
    let newAlpha = []
    let number = 0

    if (+num.charAt(0)){
        number = +num.charAt(0)
        for (let i = 1; i < num.length;i++){
            for (let k = 0; k < alphabet.length; k++){
                // console.log(num[k],alphabet[i])
                if (num[i].toLowerCase() === alphabet[k]){
                    // console.log(num[i], alphabet[k])
                    k += number
                    // if (k > 25){
                    //     k = 0
                    // }
                    // console.log(k)
                    newAlpha.push(alphabet[k])
                }
            }
        }
        let decoded = newAlpha.join(``)
        return decoded
    }else {
        return `Invalid Entry`
    }
}

const cypher = str => {
    let num = parseInt(str[0])
    str = str.slice(1)
    let decyphered = ``
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('')

    for(let i = 0; i < str.length; i++){
        let index = alphabet.findIndex((letter) => letter === str[i])
        index += num
        if (index > 25){
            index -= 26
        }
        decyphered += alphabet[index]
    }
    return decyphered
}

console.log(decode(`2fcjjmz`))
console.log(decode(`1a`))
console.log(decode(`3ce`))
console.log(cypher(`2fcjjm`))