import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";
import { useState } from "react";

const initial__costs = [
    {
        id: "c1",
        date: new Date(2021, 8, 12),
        description: "Холодильник",
        price: 14000,
    },
    {
        id: "c2",
        date: new Date(2021, 11, 25),
        description: "Телевизор",
        price: 10000,
    },
    {
        id: "c3",
        date: new Date(2021, 3, 23),
        description: "Кофта",
        price: 1000,
    },
    {
        id: "c4",
        date: new Date(2021, 1, 3),
        description: "Очки",
        price: 100,
    },
];

const App = () => {
    const [costs, setCosts] = useState(initial__costs);
    const addCostHandler = (cost) => {
        setCosts((prevCosts) => {
            return [cost, ...prevCosts];
        });
    };

    return (
        <div className="App">
            <h1 className="App-title">Учёт трат</h1>
            <NewCost onAddCost={addCostHandler} />
            <Costs costs={costs} />
        </div>
    );
};

export default App;
