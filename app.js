const getOddNumber = () => {
  const max = 50
  let result = []

  for (let i = 1; i <= max; i++) {
    if (i % 2 == 0) {
      console.log(i)
    }
  }
  
  return result
}

const arr = getOddNumber()
console.log(arr)
