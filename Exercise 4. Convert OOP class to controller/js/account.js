// Constructor function with parameter, properties and methods
function Account(id, accountType, owner, currency) {
  // Public properties/fields
  this.id = id;
  this.owner = owner;
  this.accountType = accountType;

  // Private properties/fields
  var transactions = [];
  var rent = 0;
  var currency = currency;

  // Public methods
  this.insert = function(amount) {
    transactions.push(amount);
  };

  this.withdraw = function(amount) {
    transactions.push(-amount);
  };

  this.setRent = function(rent) {
    rent = rent;
  };

   // Javascript array reduce() method applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
  this.getSaldo = function() {
    return transactions.reduce(add, 0);
  };

  this.getTransactions = function() {
    return transactions;
  };

  this.getCurrency = function() {
    return currency;
  }

  // Private methods
  function add(a, b) {
      return a + b;
  }
}
