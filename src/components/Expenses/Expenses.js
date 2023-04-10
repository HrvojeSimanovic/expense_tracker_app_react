import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2023");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expensesData.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onChangeFilter={filterChangeHandler}
                    selectedYear={filteredYear}
                ></ExpensesFilter>

                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses}></ExpensesList>

                {/* {filteredExpenses.length == 0 ? (
                    <h1>no expenses</h1>
                ) : (
                    filteredExpenses.map((expense) => {
                        return (
                            <ExpenseItem
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                            />
                        );
                    })
                )} */}
            </Card>
        </div>
    );
};

export default Expenses;
