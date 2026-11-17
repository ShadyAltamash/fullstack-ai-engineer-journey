const transactions = [
  { id: 1, amount: 500, status: "success" },
  { id: 2, amount: 200, status: "failed" },
  { id: 3, amount: 800, status: "success" },
  { id: 4, amount: 300, status: "success" },
  { id: 5, amount: 100, status: "failed" },
];

//Print all transactions
console.log("All transactions: ", transactions);

//Find transactions with successful status
for (let i = 0; i < transactions.length; i++) {
  if (transactions[i].status === "success") {
    console.log("Successful transaction: ", transactions[i]);
  }
}

function countTransactions(transactions) {
  //Count successful and failed transactions
  let success = 0;
  let failed = 0;

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].status == "success") {
      success += 1;
    } else if (transactions[i].status == "failed") {
      failed += 1;
    }
  }

  return {
    success,
    failed,
  };
}

/* Create a function that accepts 
transactions and returns the total successful amount */
function calculateAmount(transactions) {
  var total = 0;

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].status === "success") {
      total += transactions[i].amount;
    }
  }
  return total;
}

console.log(
  "Total Sum of Successful Transactions: ",
  calculateAmount(transactions),
);

console.log("Success and Failure Count: ", countTransactions(transactions));
