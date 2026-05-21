import { getShortDescription } from "./utils.js";

/**
 * Создает строку таблицы.
 * @param {object} transaction - Объект транзакции.
 * @returns {HTMLTableRowElement} Строка таблицы.
 */
export function createTransactionRow(transaction) {
    const row = document.createElement("tr");

    row.dataset.id = transaction.id;

    if (transaction.amount >= 0) {
        row.classList.add("positive");
    } else {
        row.classList.add("negative");
    }

    row.innerHTML = `
        <td>${transaction.date}</td>
        <td>${transaction.category}</td>
        <td>${getShortDescription(transaction.description)}</td>
        <td><button data-action="delete">Удалить</button></td>
    `;

    return row;
}

/**
 * Добавляет транзакцию в таблицу.
 * @param {object} transaction - Объект транзакции.
 * @returns {void}
 */
export function renderTransaction(transaction) {
    const tableBody = document.querySelector("#transactions-body");
    const row = createTransactionRow(transaction);

    tableBody.append(row);
}

/**
 * Удаляет строку таблицы.
 * @param {string} id - ID транзакции.
 * @returns {void}
 */
export function removeTransactionRow(id) {
    const row = document.querySelector(`tr[data-id="${id}"]`);

    if (row) {
        row.remove();
    }
}

/**
 * Выводит общую сумму.
 * @param {number} total - Общая сумма.
 * @returns {void}
 */
export function renderTotal(total) {
    const totalElement = document.querySelector("#total");
    totalElement.textContent = total;
}

/**
 * Выводит полное описание.
 * @param {string} description - Полное описание.
 * @returns {void}
 */
export function renderFullDescription(description) {
    const descriptionElement = document.querySelector("#full-description");
    descriptionElement.textContent = description;
}

/**
 * Показывает ошибку.
 * @param {string} message - Текст ошибки.
 * @returns {void}
 */
export function showError(message) {
    const errorElement = document.querySelector("#error-message");
    errorElement.textContent = message;
}

/**
 * Очищает ошибку.
 * @returns {void}
 */
export function clearError() {
    const errorElement = document.querySelector("#error-message");
    errorElement.textContent = "";
}
