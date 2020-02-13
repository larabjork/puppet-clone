import React from 'react';


function Shout() {
  const headline = {
    fontSize: '65px',
    fontWeight: 'bold',
    lineHeight: '81px',

  };
  const subhead = {
    fontSize: '40px',
    paddingTop: '40px'
  };
  const gridify = {
    display: 'grid',
    gridTemplateColumns: '6fr 4fr',
    padding: '65px 20px'

  };
  const artStyle = {
    width: '80%',
    maxWidth: '100%',
    margin: 'auto'
  };
  const investorRap = {
    maxWidth: '700px'
  };
  return (
    <div style={gridify}>
      <div>
        <h1 style={headline}>Meet the leadership team</h1>
        <div style={investorRap}>
          <h2>Meet our executives, board, advisors, and investors</h2>
        </div>
      </div>
      <img alt='art' src='/Shout-mosaic.png' style={artStyle}/>


    </div>

  );
}

export default Shout;
