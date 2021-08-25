import React from 'react'
import {useFetchApi} from "../utils"
import Card from "../Card/Card"

export default function MainScreen() {
  const {data:bankdetails,loading:bankloading} = useFetchApi('bankAccounts')
  const {data:financialGoals,loading:financialLoading}= useFetchApi('financialGoals')

  if (bankloading||financialLoading){
    return <p>loading...</p>
  }
  
  const total = bankdetails.reduce((a,b)=>a+b.balance,0 )
  console.log(financialGoals)
  return (
    <>
      <div className="total">
        <h1>Your Net Worth</h1>
        <h2>${total}</h2>
        <h3>Your Goals</h3>
        {financialGoals.map(goal=>{
          
          return(
            <Card key ={goal.id} target={goal.goalTarget} progress={goal.goalProgress} name = {goal.name} 
            bankname={bankdetails.find(bank=>bank.id ===goal.accountId)?.name} />
          )
        })}
      </div>
    </>
  )
}
