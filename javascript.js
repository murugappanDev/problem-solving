//1) flatten array


const arr = [1, [2, 3], [4, [5, 6]]]

const flatedArr = arr.flat(Infinity)

console.log(flatedArr)

/// withoput default 

const arr = [1, [2, 3], [4, [5, 6]]]

const result =  []
const  flatten= (arr)=>{
for(let i = 0 ;i < arr.length; i++){
if(typeof arr[i] === "object" && arr[i] !==null){ // check if the element is an array
    flatten(arr[i]) // recursively call the flatten function on the nested array
}else{
    result[result.length] = arr[i]
}

}
return result
}

console.log(flatten(arr))


 //2) find min and max

const arr = [10, 5, 25, 3, 18, 40, 7]

const minMax =(arr)=>{
const min = Math.min(...arr)
const max = Math.max(...arr)

return {min:min,max:max}
}

console.log(minMax(arr))

// default

const arr = [10, 5, 25, 3, 18, 40, 7]


const minMax =(arr)=>{
    let min = arr[0]
let max = arr[0]
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }else if( min > arr[i]){
            min = arr[i]
        }
    }
return {min:min,max:max}
}

console.log(minMax(arr))

//3)palindrome

const palindrome=(str)=>{
    const reverseStr = str.split("").reverse().join("")

   return  str === reverseStr ? "String is palindrome" : "not a palindrome"

}

// default

const palindrome=(str)=>{
    let reverse = ""

    for(let i = str.length - 1 ; i >= 0 ; i--){
        reverse += `${str[i]}`
    }
return reverse === str ? "String is palindrome" : "not a palindrome"
}

console.log(palindrome("mom"))

// anagram

const sortedArr =(str)=>{
return str.split("").sort().join("")
}
const anagram =(str1,str2)=>{
    if(str1.length === str2.length) {
        return "Not a anagram"
    }else{
const sorting1 = sortedArr(str1)
const sorting2 = sortedArr(str2)

return sorting1 === sorting2 ? "anagram" :"Not a anagram"
    }


}

console.log(anagram("cat","tacs"))



// group anagaram


const arrayAnagram = ["eat", "tea", "tan", "ate", "nat", "bat"]


let group = {}
const anagram = (arr) => {
    for (let str of arr) {
        const key = str.split("").sort().join("")
        if (!group[key]) { // if the key does not exist in the group object, create a new array with the current string as the first element
            group[key] = [str]
            
        } else { // if the key already exists, push the current string into the existing array
            group[key].push(str)
        }
    }
return Object.values(group)
}

console.log(anagram(arrayAnagram))

// 7) count a how many each character in string


const str = "hello world"

const countChar = (str)=>{
    const arrStr = str.split("")

    const result = arrStr.reduce((acc,cur)=>{
        acc[cur] = (acc[cur] || 0)+1
        return acc
    },{})

    return result 

}

console.log(countChar(str))

// maxmimum repeating letter 

const str = "hello world"

const countChar = (str)=>{
    const arrStr = str.split("")

    const result = arrStr.reduce((acc,cur)=>{
        acc[cur] = (acc[cur] || 0)+1 // if the current character already exists in the accumulator object, increment its count by 1, otherwise set its count to 1
        return acc // return the updated accumulator object
    },{})
let maxValue =0
let maxletter = ""
for(let ltr in result){
    if(result[ltr]> maxValue){ // if the count of the current character is greater than the current maximum value, update the maximum value and the corresponding letter
        maxValue = result[ltr] // update the maximum value to the count of the current character
        maxletter = ltr // update the maximum letter to the current character
    }


}
return maxletter
}

console.log(countChar(str))