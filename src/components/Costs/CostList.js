import CostItem from "./CostItem";
import "./CostList.css";

const CostList = (props) => {
    if (props.costs.length === 0) {
        return (
            <h2 className="cost-List__fallback">
                В этом году расходов не было
            </h2>
        );
    }

    return (
        <ul className="cost-List">
            {props.costs.map((cost) => (
                <CostItem
                    key={cost.id}
                    date={cost.date}
                    description={cost.description}
                    price={cost.price}
                />
            ))}
        </ul>
    );
};

export default CostList;
