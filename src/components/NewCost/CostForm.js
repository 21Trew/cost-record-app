import { useState } from "react";
import "./CostForm.css";

const Costform = (props) => {
    const [inputName, setInputName] = useState(""),
        [inputPrice, setInputPrice] = useState(0),
        [inputDate, setInputDate] = useState("");

    const nameChangeHandler = (event) => {
            setInputName(event.target.value);
        },
        priceChangeHandler = (event) => {
            setInputPrice(event.target.value);
        },
        dateChangeHandler = (event) => {
            setInputDate(event.target.value);
        },
        submitHandler = (event) => {
            event.preventDefault();

            const costData = {
                description: inputName,
                price: inputPrice,
                date: new Date(inputDate),
            };

            props.onSaveCostData(costData);
            setInputName("");
            setInputPrice("");
            setInputDate("");
        };

    return (
        <form className="new-cost__form" onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input
                        type="text"
                        value={inputName}
                        onChange={nameChangeHandler}
                    />
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={inputPrice}
                        onChange={priceChangeHandler}
                    />
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input
                        type="date"
                        min="2020-01-01"
                        max="2024-12-31"
                        value={inputDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-cost__actions">
                <button type="submit">Добавить</button>
                <button type="button" onClick={props.onCancel}>Отмена</button>
            </div>
        </form>
    );
};

export default Costform;
