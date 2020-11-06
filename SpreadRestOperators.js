const user=['Keerthana','Java']

const print=[...user] // ... -3 dots operator(spread) copies object/array by pulling each element
console.log(print)

const restUsage=(...args)=>{  // usage of rest operator(...) 
    // accepts any no of elements and returns as array -same as spread but varies depending on usage-
    return args
}

console.log(restUsage(1,2,3,4))
