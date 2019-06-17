let privateNumber = 10

function usePrivateNumber(num) {
    return privateNumber + num


}

function addPrivateNumberToDom (num) {
    document.querySelector("#addPrivateNum").innerHTML = usePrivateNumber(num)
}


export{usePrivateNumber, addPrivateNumberToDom}