import React from 'react'

const Content = (props) => {

  const { box } = props;

  return (
    <div>
      {
        box.map((color, index) => (
          <div key={index} style={{ display: 'inline-block', height: '120px', width: '120px', margin: '20px', backgroundColor: color }} >
          </div>
        ))
      }
    </div>
  );
}

export default Content