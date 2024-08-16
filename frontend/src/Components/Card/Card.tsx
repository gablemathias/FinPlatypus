import React from 'react';
import "./Card.css";

interface Props {
  companyName: string;
  stockName: string;
  price: number;
};

const Card: React.FC<Props> = ({companyName, stockName, price}: Props) : JSX.Element => {
  return (
  <div className='card'>
    <img 
    src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    alt="Stocks" 
    />
    <div className="details">
      <h2>{companyName} ({stockName})</h2>
      <p>${price}</p>
    </div>
    <p className='info'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra dui ac tristique tempus. 
    Nunc dui sapien, ornare vitae commodo eleifend, sodales vel diam. Vivamus tincidunt, purus ut laoreet aliquet, purus magna mattis neque, vulputate vulputate ipsum felis quis felis. Vivamus sed lorem risus.
    </p>
  </div>
  );
}

export default Card