import "./NewCost.css";
import Costform from "./CostForm";
import Card from "../UI/Card";
import { useState } from "react";

const NewCost = (props) => {
    const [isShown, setIsShown] = useState(false);

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        };

        props.onAddCost(costData);
        setIsShown(false);
    };

    const showFormHandler = () => {
        setIsShown(true);
    };

    const cancelFormHandler = () => {
        setIsShown(false);
    };

    return (
        <section className="new-cost">
            <Card className="Costs">
                {!isShown && (
                    <button className="new-cost__add-button" onClick={showFormHandler}>Добавить расход</button>
                )}
                {isShown && (
                    <Costform
                        onSaveCostData={saveCostDataHandler}
                        onCancel={cancelFormHandler}
                    />
                )}
            </Card>
        </section>
    );
};

export default NewCost;
