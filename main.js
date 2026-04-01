"use strict";

/**
 * Консольное приложение для анализа транзакций
 */

/** Массив транзакций */
const transactions = [
  {
    transaction_id: "1",
    transaction_date: "2026-03-11",
    transaction_amount: 550.0,
    transaction_type: "debit",
    transaction_description: "Gym membership",
    merchant_name: "GymXYZ",
    card_type: "Visa",
  },
  {
    transaction_id: "2",
    transaction_date: "2026-03-12",
    transaction_amount: 1200.0,
    transaction_type: "debit",
    transaction_description: "Tech gadgets",
    merchant_name: "GadgetStoreXYZ",
    card_type: "MasterCard",
  },
  {
    transaction_id: "3",
    transaction_date: "2026-03-13",
    transaction_amount: 75.0,
    transaction_type: "credit",
    transaction_description: "Cashback reward",
    merchant_name: "BankXYZ",
    card_type: "Discover",
  },
  {
    transaction_id: "4",
    transaction_date: "2026-03-14",
    transaction_amount: 250.0,
    transaction_type: "debit",
    transaction_description: "Dinner with friends",
    merchant_name: "Restaurant789",
    card_type: "Amex",
  },
  {
    transaction_id: "5",
    transaction_date: "2026-03-15",
    transaction_amount: 150.0,
    transaction_type: "credit",
    transaction_description: "Refund for shoes",
    merchant_name: "ShoeStoreABC",
    card_type: "Visa",
  },
];


/** Получить уникальные типы транзакций */
function getUniqueTransactionTypes(transactions) {
  const allTypes = transactions.map(t => t.transaction_type); // собираем все типы
  const uniqueTypes = []; // пустой массив для уникальных типов

  allTypes.forEach(type => {
    if (!uniqueTypes.includes(type)) {
      uniqueTypes.push(type);
    }
  });

  return uniqueTypes;
}

/** Вычислить общую сумму всех транзакций */
function calculateTotalAmount(transactions) {
  let total = 0;
  transactions.forEach(t => {
    total += t.transaction_amount;
  });
  return total;
}

/** Вычислить сумму транзакций за определённый год, месяц, день */
function calculateTotalAmountByDate(transactions, year, month, day) {
  let total = 0;

  transactions.forEach(t => {
    const date = new Date(t.transaction_date);
    const matchYear = !year || date.getFullYear() === year;
    const matchMonth = !month || date.getMonth() + 1 === month;
    const matchDay = !day || date.getDate() === day;

    if (matchYear && matchMonth && matchDay) {
      total += t.transaction_amount;
    }
  });

  return total;
}

/** Получить транзакции по типу (debit или credit) */
function getTransactionByType(transactions, type) {
  const filtered = transactions.filter(t => t.transaction_type === type);
  return filtered;
}

/** Получить транзакции в диапазоне дат */
function getTransactionsInDateRange(transactions, startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const result = transactions.filter(t => {
    const date = new Date(t.transaction_date);
    return date >= start && date <= end;
  });

  return result;
}

/** Получить транзакции конкретного магазина */
function getTransactionsByMerchant(transactions, merchantName) {
  return transactions.filter(t => t.merchant_name === merchantName);
}

/** Вычислить среднюю сумму транзакции */
function calculateAverageTransactionAmount(transactions) {
  if (transactions.length === 0) return 0;
  const total = calculateTotalAmount(transactions);
  return total / transactions.length;
}

/** Получить транзакции в диапазоне суммы */
function getTransactionsByAmountRange(transactions, minAmount, maxAmount) {
  return transactions.filter(
    t => t.transaction_amount >= minAmount && t.transaction_amount <= maxAmount
  );
}

/** Вычислить общую сумму дебетовых транзакций */
function calculateTotalDebitAmount(transactions) {
  let total = 0;
  transactions.forEach(t => {
    if (t.transaction_type === "debit") {
      total += t.transaction_amount;
    }
  });
  return total;
}

/** Найти месяц с наибольшим количеством транзакций */
function findMostTransactionsMonth(transactions) {
  const monthCounts = {};

  transactions.forEach(t => {
    const month = new Date(t.transaction_date).getMonth() + 1;
    if (!monthCounts[month]) monthCounts[month] = 0;
    monthCounts[month]++;
  });

  let maxMonth = null;
  let maxCount = 0;

  for (const month in monthCounts) {
    if (monthCounts[month] > maxCount) {
      maxMonth = month;
      maxCount = monthCounts[month];
    }
  }

  return Number(maxMonth);
}

/** Найти месяц с наибольшим количеством дебетовых транзакций */
function findMostDebitTransactionMonth(transactions) {
  const monthCounts = {};

  transactions.forEach(t => {
    if (t.transaction_type === "debit") {
      const month = new Date(t.transaction_date).getMonth() + 1;
      if (!monthCounts[month]) monthCounts[month] = 0;
      monthCounts[month]++;
    }
  });

  let maxMonth = null;
  let maxCount = 0;

  for (const month in monthCounts) {
    if (monthCounts[month] > maxCount) {
      maxMonth = month;
      maxCount = monthCounts[month];
    }
  }

  return Number(maxMonth);
}

/** Определить, каких транзакций больше */
function mostTransactionTypes(transactions) {
  let debitCount = 0;
  let creditCount = 0;

  transactions.forEach(t => {
    if (t.transaction_type === "debit") debitCount++;
    if (t.transaction_type === "credit") creditCount++;
  });

  if (debitCount > creditCount) return "debit";
  if (creditCount > debitCount) return "credit";
  return "equal";
}

/** Получить транзакции до указанной даты */
function getTransactionsBeforeDate(transactions, date) {
  const target = new Date(date);
  return transactions.filter(t => new Date(t.transaction_date) < target);
}

/** Найти транзакцию по ID */
function findTransactionById(transactions, id) {
  return transactions.find(t => t.transaction_id === id);
}

/** Получить массив описаний транзакций */
function mapTransactionDescriptions(transactions) {
  return transactions.map(t => t.transaction_description);
}

/** Результат */

console.log(" УНИКАЛЬНЫЕ ТИПЫ ", getUniqueTransactionTypes(transactions));
console.log(" ОБЩАЯ СУММА ", calculateTotalAmount(transactions));
console.log(" СУММА ПО ДАТЕ (2026-03-12)", calculateTotalAmountByDate(transactions, 2026, 3, 12));
console.log(" DEBIT ТРАНЗАКЦИИ ", getTransactionByType(transactions, "debit"));
console.log("CREDIT ТРАНЗАКЦИИ", getTransactionByType(transactions, "credit"));
console.log("ТРАНЗАКЦИИ ПО ДИАПАЗОНУ ДАТ", getTransactionsInDateRange(transactions, "2026-03-11", "2026-03-14"));
console.log("ТРАНЗАКЦИИ ПО МЕРЧАНТУ 'GymXYZ'", getTransactionsByMerchant(transactions, "GymXYZ"));
console.log("СРЕДНЯЯ СУММА ", calculateAverageTransactionAmount(transactions));
console.log(" ТРАНЗАКЦИИ ПО ДИАПАЗОНУ СУММ (100-600)", getTransactionsByAmountRange(transactions, 100, 600));
console.log("ОБЩАЯ СУММА DEBIT", calculateTotalDebitAmount(transactions));
console.log("МЕСЯЦ С МАКСИМУМ ТРАНЗАКЦИЙ ", findMostTransactionsMonth(transactions));
console.log(" МЕСЯЦ С МАКСИМУМ DEBIT ", findMostDebitTransactionMonth(transactions));
console.log(" КАКИХ ТРАНЗАКЦИЙ БОЛЬШЕ ", mostTransactionTypes(transactions));
console.log(" ТРАНЗАКЦИИ ДО 2026-03-14", getTransactionsBeforeDate(transactions, "2026-03-14"));
console.log(" ПОИСК ПО ID = 3 ", findTransactionById(transactions, "3"));
console.log(" ТОЛЬКО ОПИСАНИЯ ", mapTransactionDescriptions(transactions));