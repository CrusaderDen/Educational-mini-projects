
let input_arr = [5, 4, 3, 2, 1, 2, 3, 4, 5, 66, 33]
let smallest = input_arr[1]
let index_smallest
let temp

console.log("Запущен скрипт сортировки по возрастанию массива чисел методом \"Вставки\"")
console.log(`Исходный массив: ${input_arr}`)

for (j = 0; j < input_arr.length; j++) {
    // Находим наименьшее число в неотсортированной части массива
    for (i = j; i < input_arr.length; i++) {
        if (input_arr[i] < smallest) {
            smallest = input_arr[i]
            index_smallest = i
        }
    }
    if (smallest != input_arr[j]) {
        temp = input_arr[j]
        input_arr[j] = smallest
        for (k = index_smallest; k > j + 1; k--) {
            input_arr[k] = input_arr[k - 1]
        }
        input_arr[j + 1] = temp
    }
    smallest = input_arr[j + 1]
}
console.log(`Отсортированный массив: ${input_arr}`)