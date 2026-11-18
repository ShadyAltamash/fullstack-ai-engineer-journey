const transactions = [
  { id: 1, amount: 500, status: "success" },
  { id: 2, amount: 200, status: "failed" },
  { id: 3, amount: 800, status: "success" },
  { id: 4, amount: 300, status: "success" },
  { id: 5, amount: 100, status: "failed" },
];

//Get transaction by status
function getTransactionsByStatus(transactions, status) {
  const filteredTransactions = [];
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].status === status) {
      filteredTransactions.push(transactions[i]);
    }
  }
  return filteredTransactions;
}

//Calculate the amount of all transactions
function calculateTotalAmount(transactions) {
  let totalAmount = 0;

  for (let i = 0; i < transactions.length; i++) {
    totalAmount += transactions[i].amount;
  }
  return totalAmount;
}

//Calculate only successful transaction amounts
function calculateSuccessfulAmount(transactions) {
  let successfulAmount = 0;

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].status === "success") {
      successfulAmount += transactions[i].amount;
    }
  }
  return successfulAmount;
}

//Return successful and failed transaction counts
function countTransactions(transactions) {
  let successfulCount = 0;
  let failedCount = 0;

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].status === "success") {
      successfulCount++;
    } else if (transactions[i].status === "failed") {
      failedCount++;
    }
  }

  return {
    successfulCount,
    failedCount,
  };
}

//Find transaction by ID
function findTransactionById(transactions, id) {
  let transaction = null;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].id === id) {
      transaction = transactions[i];
      break;
    }
  }
  return transaction;
}

//Test with original transactions array
console.log(
  "Transactions with status 'success':",
  getTransactionsByStatus(transactions, "success"),
);

console.log(
  "Transactions with status 'failed':",
  getTransactionsByStatus(transactions, "failed"),
);
console.log("Total Amount:", calculateTotalAmount(transactions));
console.log("Successful Amount:", calculateSuccessfulAmount(transactions));
console.log("Transaction Counts:", countTransactions(transactions));
console.log("Transaction with ID 3:", findTransactionById(transactions, 3));

//Test with an empty array
console.log(
  "Transactions with status 'success' (Empty):",
  getTransactionsByStatus([], "success"),
);
console.log(
  "Transactions with status 'failed' (Empty):",
  getTransactionsByStatus([], "failed"),
);
console.log("Total Amount (Empty):", calculateTotalAmount([]));
console.log("Successful Amount (Empty):", calculateSuccessfulAmount([]));
console.log("Transaction Counts (Empty):", countTransactions([]));

//Test with an array with only failed transactions
const failedTransactions = [
  { id: 6, amount: 150, status: "failed" },
  { id: 7, amount: 250, status: "failed" },
];

console.log("Total Amount (Failed):", calculateTotalAmount(failedTransactions));
console.log(
  "Successful Amount (Failed):",
  calculateSuccessfulAmount(failedTransactions),
);
console.log(
  "Transaction Counts (Failed):",
  countTransactions(failedTransactions),
);

//Test with a transaction ID that doesn't exist
console.log("Transaction with ID 10:", findTransactionById(transactions, 10));
