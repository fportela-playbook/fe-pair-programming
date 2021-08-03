import React, {useEffect, useState} from 'react'
import Header from './Header'
import GoalCard from './GoalCard'

const Home = () => {
  const [accounts, setAccounts] = useState([])
  const [goalsWithAcc, setGoalsWithAcc] = useState([])
  const [goals, setGoals] = useState([])
  const [netWorth, setNetWorth] = useState(0)

  useEffect(() => {
    fetchAccounts()
    fetchGoals()
  }, [])

  useEffect(() => {
    getNetWorth();
  }, [accounts])

  useEffect(() => {
    let tempGoals = goals.map((goal) => {
      let account = getAccountById(goal)
      goal.account = account;
      return goal;
    })
    setGoalsWithAcc(tempGoals)
  }, [accounts, goals])

  const fetchAccounts = async () => {
    const response = await fetch('http://localhost:8080/bankAccounts')
    const body = await response.json()
    setAccounts(body)
    console.log(body)
  }

  const fetchGoals = async () => {
    const response = await fetch('http://localhost:8080/financialGoals')
    const body = await response.json()
    setGoals(body)
    console.log(body)
  }

  const getNetWorth = () => {
    let total = 0
    accounts.forEach((account) => {
      total += account.balance
    })
    setNetWorth(total)
  }

  const getAccountById = (goal) => {
    let accId = goal.accountId
    return accounts.find(x => x.id === accId)
  }

  return <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem'}}>
    <Header netWorth={netWorth}/>

    <div>Your Goals</div>

    {goalsWithAcc.map((goal) => <GoalCard 
      goal={goal} 
    />)}

  </div>
}

export default Home;