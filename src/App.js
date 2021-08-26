import React from "react";
import _ from "lodash";
import Goal from "./components/goal";
import { useGoals, useBankAccounts } from "./hooks";
const App = () => {
  const goals = useGoals();
  const [bankAccounts, balance] = useBankAccounts();
  return (
    <div style={{ padding: 20 }}>
      <h1>Your net worth!!</h1>
      <p>{balance}</p>
      <h1>Your goals!!</h1>
      {_.isEmpty(goals) && (
        <div>
          <p>Loading!</p>
        </div>
      )}
      {goals.map(({ id, name, goalProgress, goalTarget, accountId }) => (
        <Goal
          bankName={bankAccounts?.[accountId]?.name || "Not found"}
          key={id}
          name={name}
          goalProgress={goalProgress}
          goalTarget={goalTarget}
          accountId={accountId}
        />
      ))}
    </div>
  );
};

export default App;
