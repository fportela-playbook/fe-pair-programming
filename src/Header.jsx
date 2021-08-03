import React from 'react';

//netWorth

const Header = (props) => {
  return <div>
    <div>Your Net Worth</div>
    <div style={{textAlign: 'center', fontSize: '3rem',}}>${props.netWorth.toLocaleString()}</div>
    </div>
}

export default Header;