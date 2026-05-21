/** 
 * Генерирует уникальный ID.
 * @returns {string} Уникальный идентификатор.
 */
export function generateId() {
    return Date.now().toString();
}

/**
 * Форматирует дату.
 * @param {Date} date - Дата транзакции.
 * @returns {string} Отформатированная дата.
 */
export function formatDate(date) {
    return date.toLocaleString();
}

/**
 * Возвращает первые четыре слова описания.
 * @param {string} description - Полное описание.
 * @returns {string} Краткое описание.
 */
export function getShortDescription(description) {

    return description
        .trim()
        .split(/\s+/)
        .slice(0,4)
        .join(" ");

}
