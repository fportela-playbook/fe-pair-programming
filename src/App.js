import React from 'react';
import "./App.css";

function getData(url) {
  return fetch(url)
  .then(response => response.json());
}

function calculateNetWorth(bankAccounts = []) {
  return bankAccounts.reduce((acc, curr) => acc += curr.balance, 0)
}

function formatCurreny(amount) {
  return new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(amount)
}

function getBankName(bankAccounts, bankAccountId) {
  const bankAccount = bankAccounts.find(({ id }) => id === bankAccountId);

  return bankAccount?.name;
}

function calulateProgress(goalProgress, goalTarget) {
  return parseInt((goalProgress/goalTarget) * 100);
}

function App() {
  const [bankAccounts, setBankAccounts] = React.useState([]);
  const [financialGoals, setFinancialGoals] = React.useState([]);
  const [netWorth, setNetWorth] = React.useState(0);

  React.useEffect(() => {
    getData('http://localhost:8081/bankAccounts')
      .then((data) => {
        setBankAccounts(data);

        return data;
      })
      .then((data) => {
        setNetWorth(calculateNetWorth(data));
      });

    getData('http://localhost:8081/financialGoals')
      .then((data) => setFinancialGoals(data));
  }, []);

  if (bankAccounts.length === 0 && financialGoals.length === 0) {
    return <div className="container">Loading...</div>
  }

  return (
    <div className="container">
      <h1>Your Net Worth</h1>
      { formatCurreny(netWorth) }
      <h2>Your Goals</h2>
      {financialGoals.map(({ id, name, goalTarget, goalProgress, accountId }) => (
        <section key={id} className="card">
          <h3>{name}</h3>
          <p className="card__amounts"><span>Target: {formatCurreny(goalTarget)}</span> <span>Goal: {formatCurreny(goalProgress)}</span></p>
          <p>Receiving Account:</p>
          {getBankName(bankAccounts, accountId) || "Not available"}
          <p className="card__pregress">Progress: {calulateProgress(goalProgress, goalTarget)}%</p>
        </section>
      ))}
    </div>
  );
}

export default App;
