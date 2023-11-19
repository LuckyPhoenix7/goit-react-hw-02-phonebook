export const Filter = ({ onChangeFilter }) => {
  return (
    <label htmlFor="filter">
      Find contact by Name
      <input onChange={evt => onChangeFilter(evt.target.value)} />
    </label>
  );
};
