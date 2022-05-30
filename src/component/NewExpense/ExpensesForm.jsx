import "./ExpensesForm.css";

import { useState } from "react";

const ExpenseForm = () => {
    const [title, setTitle] = useState("");


    const titleinput = (event) => {
        return (
            setTitle(event.target.value)
        );
    }

    const [amount, setAmount] = useState("");
    const amountinput = (event) => {
        return (
            setAmount(event.target.value)
        );
    }

    const [date, setDate] = useState("");
    const dateinput = (event) => {
        return (
            setDate(event.target.value)
        );
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleinput} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountinput} />
                </div>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" />
                </div >
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-1-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions" onChange={dateinput} >
                <button type="submit">Sumbit</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
