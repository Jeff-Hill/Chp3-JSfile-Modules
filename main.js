import {usePrivateNumber, addPrivateNumberToDom} from "/add.js"
import {usePrivateNumber2, subtractPrivateNumberToDom} from "/subtract.js"

usePrivateNumber(30)
console.log(usePrivateNumber)

addPrivateNumberToDom(30)
console.log(addPrivateNumberToDom)

usePrivateNumber2(30)
subtractPrivateNumberToDom(30)
console.log(subtractPrivateNumberToDom)