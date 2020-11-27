// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){

  if(!text)
    {
        return 0
    } else
    {
        const array = text.toLowerCase().split('')
        console.log(array)
        const unique = new Set(array)
        const uniqueArray = [... unique]
        console.log(uniqueArray)
        let counter =0
        for(let i = 0; i<uniqueArray.length;i++)
        {
            let test = count(uniqueArray[i],array)
            console.log(test)
            if(test>=2)
            {
                ++counter
            }
        }
        return counter
    }
}

function count(value,array){
  
    let count = 0
  
    for(let i = 0; i<array.length;i++)
    {
        if (value == array[i])
        {
            ++count;
        }
    }
        return count
}

