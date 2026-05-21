/** Массив транзакций */
export const transactions = [];

/**
 * Добавляет транзакцию в массив.
 * @param {object} transaction - Объект транзакции.
 * @returns {void}
 */
export function addTransactionToArray(transaction) {
    transactions.push(transaction);
}

/**
 * Удаляет транзакцию из массива.
 * @param {string} id - ID транзакции.
 * @returns {void}
 */
export function deleteTransactionFromArray(id) {
    const index = transactions.findIndex(transaction => transaction.id === id);

    if (index !== -1) {
        transactions.splice(index, 1);
    }
}

/**
 * Считает общую сумму транзакций.
 * @returns {number} Общая сумма.
 */
export function calculateTotal() {
    let total = 0;

    transactions.forEach(transaction => {
        total += transaction.amount;
    });

    return total;
}

/**
 * Ищет транзакцию по ID.
 * @param {string} id - ID транзакции.
 * @returns {object|undefined} Найденная транзакция.
 */
export function findTransactionById(id) {
    return transactions.find(transaction => transaction.id === id);
}
