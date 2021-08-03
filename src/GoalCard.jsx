import React from 'react';

const GoalCard = (props) => {
  const getGoalPercentage = () => {
    return Math.round((props.goal.goalProgress/props.goal.goalTarget)*100);
  }

  return <div style={{border: '.1rem solid', padding: '1rem'}}>
    <div>{props.goal.name}</div>

    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <div>Target: ${props.goal.goalTarget.toLocaleString()}</div>
      <div>Goal: ${props.goal.goalProgress.toLocaleString()}</div>
    </div>

    <div>Receiving Account:</div>
    {props.goal.account 
      ? <div>{props.goal.account.name}</div>
      : <div>Account not available</div>}

  <div>Percentage: {getGoalPercentage()}%</div>

  </div>
}

export default GoalCard;