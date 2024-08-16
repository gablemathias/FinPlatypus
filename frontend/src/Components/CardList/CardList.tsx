import React from 'react'
import Card from '../Card/Card'

interface Props {}

const CardList : React.FC<Props> = (props: Props) : JSX.Element => {
  return (
    <div>
      <Card companyName='Apple' stockName='AAPL' price={225} />
      <Card companyName='Meta' stockName='META' price={528}/>
      <Card companyName='Amazon' stockName='AMZN' price={177}/>
    </div>
  )
}

export default CardList