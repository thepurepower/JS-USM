import { generateId, formatDate } from "./utils.js";
import {
    addTransactionToArray,
    deleteTransactionFromArray,
    calculateTotal,
    findTransactionById
} from "./transactions.js";
import {
    renderTransaction,
    removeTransactionRow,
    renderTotal,
    renderFullDescription,
    showError,
    clearError
} from "./ui.js";

const form = document.querySelector("#transaction-form");
const table = document.querySelector("#transactions-table");

/**
 * Добавляет новую транзакцию.
 * @param {SubmitEvent} event - Событие отправки формы.
 * @returns {void}
 */
function addTransaction(event) {
    event.preventDefault();

    const amountInput = document.querySelector("#amount");
    const categoryInput = document.querySelector("#category");
    const descriptionInput = document.querySelector("#description");

    const amount = Number(amountInput.value);
    const category = categoryInput.value;
    const description = descriptionInput.value.trim();

    if (!amountInput.value || !category || !description) {
        showError("Заполните все поля формы");
        return;
    }

    clearError();

    const transaction = {
        id: generateId(),
        date: formatDate(new Date()),
        amount: amount,
        category: category,
        description: description
    };

    addTransactionToArray(transaction);
    renderTransaction(transaction);
    renderTotal(calculateTotal());

    form.reset();
}

/**
 * Обрабатывает клики по таблице.
 * @param {MouseEvent} event - Событие клика.
 * @returns {void}
 */
function handleTableClick(event) {
    const row = event.target.closest("tr");

    if (!row || !row.dataset.id) {
        return;
    }

    const id = row.dataset.id;

    if (event.target.dataset.action === "delete") {
        deleteTransactionFromArray(id);
        removeTransactionRow(id);
        renderTotal(calculateTotal());
        renderFullDescription("Выберите транзакцию из таблицы");
        return;
    }

    const transaction = findTransactionById(id);

    if (transaction) {
        renderFullDescription(transaction.description);
    }
}

form.addEventListener("submit", addTransaction);
table.addEventListener("click", handleTableClick);
