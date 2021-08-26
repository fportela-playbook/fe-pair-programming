import { useEffect, useState } from "react";
import _ from "lodash";
import axios from "axios";
const API_URL = "http://localhost:8080";

const useGoals = () => {
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    const caller = async () => {
      const { data: newGoals } = await axios.get(`${API_URL}/financialGoals`);
      setGoals(newGoals);
    };
    caller();
  }, []);
  return goals;
};

const useBankAccounts = () => {
  const [bankAccounts, setBankAccounts] = useState([]);
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const caller = async () => {
      const { data: newBankAccounts } = await axios.get(
        `${API_URL}/bankAccounts`
      );
      let newBalance = 0;
      setBankAccounts(
        _.reduce(
          newBankAccounts,
          (prev, curr) => {
            newBalance += curr.balance;
            return {
              [curr.id]: curr,
              ...prev,
            };
          },
          {}
        )
      );
      setBalance(newBalance);
    };
    caller();
  }, []);
  return [bankAccounts, balance];
};

export { useGoals, useBankAccounts };
