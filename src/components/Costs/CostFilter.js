import Card from "../UI/Card";
import "./CostFilter.css";

const CostFilter = (props) => {
    const yearChangeHandler = (event) => {
        props.onChangeYear(event.target.value);
    };

    return (
        <Card className="costs-filter">
            <section>
                <article className="costs-filter__control">
                    <label>Выбрать год</label>
                    <select value={props.year} onChange={yearChangeHandler}>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>
                </article>
            </section>
        </Card>
    );
};

export default CostFilter;
