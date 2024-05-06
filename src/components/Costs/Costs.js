import CostList from "./CostList";
import Card from "../UI/Card";
import "./Costs.css";
import CostFilter from "./CostFilter";
import { useState } from "react";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
    const [selectedYear, setSelectedYear] = useState("2024");

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredCosts = props.costs.filter((cost) => {
        return cost.date.getFullYear().toString() === selectedYear;
    });

    return (
        <section>
            <CostFilter onChangeYear={yearChangeHandler} year={selectedYear} />
            <Card className="Costs">
                <CostsDiagram costs={filteredCosts} />
            </Card>
            <Card className="Costs">
                <CostList costs={filteredCosts} />
            </Card>
        </section>
    );
};

export default Costs;
