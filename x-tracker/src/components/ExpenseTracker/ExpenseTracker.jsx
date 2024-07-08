import {React, useState} from 'react';
import MoneyCard from '../MoneyCard/MoneyCard';
import BarChart from '../BarChart/BarChart';
import PieChart from '../PieChart/PieChart';
import TransactionLog from '../TransactionLog/TransactionLog';
import { useSnackbar } from 'notistack';
import styles from './ExpenseTracker.module.css'

const ExpenseTracker = ()=>{
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    const [balance, setBalance] = useState(5000);
    const [transactions, setTransactions] = useState([]);
    const [expense, setExpense] = useState(0)


    const expenseData = [['category', 'expenditure'],['Food', 4350], ['Entertainment', 5600], ['Travel', 7894]]
    return  (
        <>
            <h1>Expense Tracker</h1>
            <div className={styles.dashboard_section}>
                <MoneyCard type={'balance'} amount={balance} buttonClickHandler={()=>{}}/>
                <MoneyCard type={'expense'} amount={expense} buttonClickHandler={()=>{}}/>
                <PieChart data={expenseData}/>
            </div>
            <div>
                <TransactionLog transactions={transactions} />
                <BarChart data={expenseData}/>
            </div>
        </>
    )
}

export default ExpenseTracker;