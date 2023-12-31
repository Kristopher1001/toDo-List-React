import React from "react";

const Buttons = (props) => (
    <div className="section__button">
        {props.tasks.length > 0 && (
            <React.Fragment>
                <button className="section__buttonToggle section__buttonToggle--hide"
                >
                    {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="section__buttonToggle"
                    disabled={props.tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div>
);

export default Buttons;

