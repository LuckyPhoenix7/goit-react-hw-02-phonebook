export const FeedbackOptions = ({ onClickButton }) => {
  return (
    <div>
      <button
        type="button"
        name="Good"
        onClick={evt => {
          onClickButton(evt.target.name);
        }}
      >
        Good
      </button>
      <button
        type="button"
        name="Neutral"
        onClick={evt => {
          onClickButton(evt.target.name);
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        name="Bad"
        onClick={evt => {
          onClickButton(evt.target.name);
        }}
      >
        Bad
      </button>
    </div>
  );
};
