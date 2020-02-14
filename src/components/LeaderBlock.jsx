import React from 'react';

const imageFiles = [
  ['Adelle', 'Fowler', 'CEO'],
  ['Adolfo', 'Germaine', 'Finance'],
  ['Alberta', 'Gray', 'Legal'],
  ['Amelia', 'Holloway', 'International Sales'],
  ['Amy', 'Moran', 'Engineering'],
  ['Andre', 'Morgan', 'People'],
  ['Andrew', 'Pittman', 'Product'],
  ['Anette', 'Romero', 'Customer Success'],
  ['Angela', 'Ryan', 'American Sales'],
  ['Ann', 'Stevenson', 'Technology'],
  ['Arthur', 'Warren', 'Marketing']
];


function LeaderBlock () {

  const pic = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    margin: '5px'
  };
  const cardStylez = {
    marginLeft: '2%',
    marginRight: '2%'
  };
  const faces = {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexFlow: 'row wrap',
    maxWidth: '1440px',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  const makeCards = (arr) => {
    return arr.map((img, ind) =>
      (
        <div key={ind} style={cardStylez}>
          <img alt={`${img[0]}`} src={`/staff/${img[0]}.jpg`} style={pic}/>
          <h5><strong>{`${img[0]} ${img[1]}`}</strong></h5>
          <h5>{`${img[2]}`}</h5>
        </div>
    ));
  }

  return (
    <div style={faces}>
      <style jsx>
        {`
          h5 {
            margin-bottom: 15px;
            margin-top: 5px;
          }
          `}
      </style>
      {makeCards(imageFiles)}
    </div>
  );
};



export default LeaderBlock;
