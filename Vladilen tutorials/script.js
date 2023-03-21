//Что такое контекст this. Как работает call, bind, apply

function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Шаблон карточки персонала',
    lastName: '---введите фамилию---',
    age: '---введите возраст---',
    position: '---введите должность---',
    logInfo: function (salary, phone) {
        console.group(`${this.name} info:`)
        console.log(`Фамилия: ${this.lastName}`)
        console.log(`Возраст: ${this.age}`)
        console.log(`Должность: ${this.position}`)
        console.log(`Зарплата: ${salary}`)
        console.log(`Телефон: ${phone}`)
        console.groupEnd()
    }
}

const DMGog = {
    name: 'Dmitry',
    lastName: 'Goglev',
    age: 32,
    position: 'Senior JS Developer',
}

const Crusader = {
    name: 'Den',
    lastName: 'Krestov',
    age: 37,
    position: 'Middle JS Developer',
}

const korz = {
    name: 'Serega',
    lastName: 'Korznikov',
    age: 38,
    position: 'Junior JS Developer',
}
person.logInfo('-', '-')
const showMeSenior = function () {
    console.log('Внимание! Вы  получили доступ к засекреченной информации!')
    person.logInfo.call(DMGog, '600 000', '8-980-333-33-33') //call автоматически вызывает срабатывание функции
}
person.logInfo.bind(Crusader, '250 000', '8-980-777-33-33')() //при использовании bind функцию нужно отдельно вызывать
person.logInfo.apply(korz, ['100 000', '8-980-555-33-33']) //apply аналогичен call,  но принимает вторым параметром перечень аргументов в виде массива

//======================= 

const arr = [1, 3, 5, 7]

const arr2 = [6, 7, 8, 12]

// function multiply(arr, n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }
//console.log(multiply(arr, 10))

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n
    })

}
console.log(arr.multBy(2))
console.log(arr2.multBy(10))



