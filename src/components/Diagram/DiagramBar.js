import "./DiagramBar.css";

const DiagramBar = (props) => {
    let barPercentHeight = "0%";

    if (props.maxValue > 0) {
        barPercentHeight =
            Math.round((props.value / props.maxValue) * 100) + "%";
    }

    return (
        <section className="diagram-bar">
            <article className="diagram-bar__inner">
                <div
                    className="diagram-bar__fill"
                    style={{ height: barPercentHeight }}
                ></div>
            </article>
            <span className="diagram-bar__label">{props.label}</span>
        </section>
    );
};

export default DiagramBar;
