import "./CostDate.css";

const CostDate = (props) => {
    const year = props.date.getFullYear(),
        month = props.date.toLocaleString("ru-RU", { month: "long" }),
        day = props.date.toLocaleString("ru-RU", { day: "2-digit" });

    return (
        <section className="cost-date">
            <span className="cost-date__year">{year}</span>
            <article className="cost-date__bottom">
                <span className="cost-date__month">{month}</span>
                <span className="cost-date__day">{day}</span>
            </article>
        </section>
    );
};

export default CostDate;
