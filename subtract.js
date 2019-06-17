let privateNumber = 10

function usePrivateNumber2(num) {
    return privateNumber - num


}

function subtractPrivateNumberToDom (num) {
    document.querySelector("#subtractPrivateNum").innerHTML = usePrivateNumber2(num)
}


export{usePrivateNumber2, subtractPrivateNumberToDom}