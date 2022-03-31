function checkCashRegister(price, cash, cid) {
  let currency = [
    { name: "PENNY", value: 0.01},
    { name: "NICKEL", value: 0.05},
    { name: "DIME", value: 0.1},
    { name: "QUARTER", value: 0.25},
    { name: "ONE", value: 1},
    { name: "FIVE", value: 5},
    { name: "TEN", value: 10},
    { name: "TWENTY", value: 20},
    { name: "ONE HUNDRED", value: 100}
  ];
  let transaction = {
    status: null,
    change: []
  };
  let rest = cash - price;

  let sum = 0;
  for(let i = 0; i < cid.length; i++) {
    sum += cid[i][1];
  }

  const constructObj = arr => {
    return arr.reduce((acc, val) => {
      const [key, value] = val;
      acc[key] = value;
      return acc;
    }, {});
  };
  let tempObj = constructObj(cid);
  

  if(sum < rest) {
    transaction.status = "INSUFFICIENT_FUNDS";
  } else if(sum === rest) {
    transaction.status = "CLOSED";
    transaction.change = tempObj;
  }

  let tempObj2 = currency.reduce(function(acc, curr) {
    let values = 0;
    while(tempObj[curr.name] > 0 && rest >= curr.value) {
      rest -= curr.value;
      tempObj[curr.name] -= curr.value;
      values += curr.value;
      rest = Math.round(change * 100) / 100;
    }
    if(value > 0) {
      acc.push([curr.name, values]);
    }
  }, []);

  transaction.status = "OPEN";
  transaction.change = tempObj2;

  console.log(transaction);
  return transaction;
}
