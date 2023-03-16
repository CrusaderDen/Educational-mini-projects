
let input_arr = [123,7,2,6,15,666,222,999,3,-20,18,126,99,64,34,6,6,6,-58]
let smallest = input_arr[1]
let index_smallest
let temp

console.log("Запущен скрипт сортировки по возрастанию массива чисел методом \"Выбора\"")
console.log(`Исходный массив: ${input_arr}`)

for (j=0; j<input_arr.length; j++) {
    // Находим наименьшее число в неотсортированной части массива
    for (i=j;i<input_arr.length;i++) { 
        if (input_arr[i]<smallest) {    
            smallest=input_arr[i]
            index_smallest=i
        }
    }
    // Выполняем "рокировку" элементов массива (для всех случаев кроме случая когда элемент уже на своем месте)
    if (smallest!=input_arr[j]) { //    
    temp=input_arr[j]
    input_arr[j]=smallest
    input_arr[index_smallest]=temp
    }
// Сдвигаем  "предположительное" наименьшее (которое используется в цикле поиска наименьшего по массиву) на одну позицию, т.к. предыдущие отсортированы
smallest = input_arr[j+1]
}
console.log(`Отсортированный массив: ${input_arr}`)