"use strict";

/**
 * Проверяет, что первый аргумент является массивом,
 * а второй аргумент является функцией.
 * @param {Array} array - Массив для проверки.
 * @param {Function} callback - Функция обратного вызова.
 * @returns {void}
 */
function validateArrayAndCallback(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError("Первый аргумент должен быть массивом");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Второй аргумент должен быть функцией");
    }
}

/**
 * Выводит элементы массива в подробном формате.
 * @param {Array} array - Массив для вывода.
 * @returns {void}
 */
function printArray(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("Аргумент должен быть массивом");
    }

    for (let i = 0; i < array.length; i++) {
        console.log(`Element ${i}: value ${array[i]}`);
    }
}

/**
 * Выводит элементы массива в кратком формате.
 * @param {Array} array - Массив для вывода.
 * @returns {void}
 */
function printArray1(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("Аргумент должен быть массивом");
    }

    for (let i = 0; i < array.length; i++) {
        console.log(`${i}: ${array[i]}`);
    }
}

/**
 * Выполняет callback для каждого элемента массива.
 * @param {Array} array - Исходный массив.
 * @param {Function} callback - Функция обратного вызова.
 * @returns {undefined}
 */
function forEach(array, callback) {
    validateArrayAndCallback(array, callback);

    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

/**
 * Создает новый массив из результатов вызова callback.
 * @param {Array} array - Исходный массив.
 * @param {Function} callback - Функция обратного вызова.
 * @returns {Array} Новый массив.
 */
function map(array, callback) {
    validateArrayAndCallback(array, callback);

    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }

    return result;
}

/**
 * Создает новый массив из элементов, которые подходят под условие.
 * @param {Array} array - Исходный массив.
 * @param {Function} callback - Функция обратного вызова.
 * @returns {Array} Отфильтрованный массив.
 */
function filter(array, callback) {
    validateArrayAndCallback(array, callback);

    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
}

/**
 * Возвращает первый элемент, который подходит под условие.
 * @param {Array} array - Исходный массив.
 * @param {Function} callback - Функция обратного вызова.
 * @returns {*} Найденный элемент или undefined.
 */
function find(array, callback) {
    validateArrayAndCallback(array, callback);

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }

    return undefined;
}

/**
 * Проверяет, есть ли хотя бы один элемент, который подходит под условие.
 * @param {Array} array - Исходный массив.
 * @param {Function} callback - Функция обратного вызова.
 * @returns {boolean} true, если подходящий элемент найден, иначе false.
 */
function some(array, callback) {
    validateArrayAndCallback(array, callback);

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }

    return false;
}

/**
 * Проверяет, подходят ли все элементы массива под условие.
 * @param {Array} array - Исходный массив.
 * @param {Function} callback - Функция обратного вызова.
 * @returns {boolean} true, если все элементы подходят, иначе false.
 */
function every(array, callback) {
    validateArrayAndCallback(array, callback);

    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }

    return true;
}

/**
 * Обрабатывает массив и накапливает итоговое значение.
 * @param {Array} array - Исходный массив.
 * @param {Function} callback - Функция обратного вызова.
 * @param {*} initialValue - Начальное значение аккумулятора.
 * @returns {*} Итоговое значение аккумулятора.
 */
function reduce(array, callback, initialValue) {
    validateArrayAndCallback(array, callback);

    if (array.length === 0 && initialValue === undefined) {
        return undefined;
    }

    let accumulator;
    let startIndex;

    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}

/**
 * Главная функция программы.
 * @returns {void}
 */
function main() {
    const numbers = [1, 2, 3, 4, 5];

    console.log("printArray:");
    printArray(numbers);

    console.log("\nprintArray1:");
    printArray1(numbers);

    console.log("\nforEach:");
    forEach(numbers, function(element, index) {
        console.log(`Element: ${element}, Index: ${index}`);
    });

    console.log("\nmap:");
    const squared = map(numbers, function(element) {
        return element * element;
    });
    console.log(squared);

    console.log("\nfilter:");
    const evenNumbers = filter(numbers, function(element) {
        return element % 2 === 0;
    });
    console.log(evenNumbers);

    console.log("\nfind:");
    const firstEven = find(numbers, function(element) {
        return element % 2 === 0;
    });
    console.log(firstEven);

    console.log("\nsome:");
    const hasEven = some(numbers, function(element) {
        return element % 2 === 0;
    });
    console.log(hasEven);

    console.log("\nevery:");
    const allEven = every(numbers, function(element) {
        return element % 2 === 0;
    });
    console.log(allEven);

    console.log("\nreduce:");
    const sum = reduce(numbers, function(accumulator, element) {
        return accumulator + element;
    }, 0);
    console.log(sum);
}

main();
