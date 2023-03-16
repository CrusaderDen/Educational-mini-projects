console.log("Запущен скрипт сортировки по возрастанию массива чисел методом \"Пузырьков\"")

let input_arr = [1,8,4,6,58,235,456,15,76,412,45,2]
let j
let temp

do {
    j = 0        
    for (let i=0; i < input_arr.length - 1 ; i++) {
        if (input_arr[i]>input_arr[i+1]) {
            temp = input_arr[i]
            input_arr[i]=input_arr[i+1]
            input_arr[i+1]=temp
            j++
        }
    }
}
while (j !== 0)
console.log(input_arr)  