import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'

const Expenses = (props) => {

    return (
        <Card className="expenses">
            {props.expenses.map((expense, index) =>  (
                <ExpenseItem key={index} data={expense} />  
            ))} 
        </Card>
    )
} 

export default Expenses