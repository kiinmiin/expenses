import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'
import { useState } from 'react' 

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.data.title) 
    
    const clickHandler = () => {
        console.log('Clicked!')
        setTitle(`Updated by click ${title}`)
        console.log(title)
    } 


    return (
    <li>
        <Card className='expense-item'>
            <ExpenseDate date={props.data.date}/> 
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.data.amount}</div>
            </div>
            <button onClick={clickHandler}>Click Me</button>
        </Card>
    </li>
    )
}

export default ExpenseItem