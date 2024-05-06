import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";

const CostItem = (props) => {
    return (
        <li>
            <Card className="Cost-Item">
                <CostDate date={props.date} />
                <article className="Cost-Item__description">
                    <h2>{props.description}</h2>
                    <div className="Cost-Item__price">{props.price}</div>
                </article>
            </Card>
        </li>
    );
};

export default CostItem;
