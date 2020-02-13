import React from 'react';

const imageFiles = [
  'Adelle',
  'Adolfo',
  'Alberta',
  'Amelia',
  'Amy',
  'Andre',
  'Andrew',
  'Anette',
  'Angela',
  'Ann',
  'Arthur'
];


function LeaderBlock () {
  const pic = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    margin: '5px 3%'
  }
  const makeImages = (arr) => {
    return arr.map((img, ind) =>
      (<img alt={img} key={ind} src={`/staff/${img}.jpg`} style={pic}/>)
    );
  }
  const faces = {
    display: 'flex-box',
    textAlign: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '1440px',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
  return (
    <div style={faces}>
      {makeImages(imageFiles)}
    </div>





  );
};



export default LeaderBlock;
