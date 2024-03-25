function addTwo(num : number) : number{
    return num + 2
}

addTwo(3)


function greet( myVal: string):string{
    return "hellow world"
}




export {}

function NothingRet(errMsg : string):void {
    console.log("nothing is returned")
}

function handleError(errMsg : string) : never {    // it never return any thing best practice
    throw new Error(errMsg)
}