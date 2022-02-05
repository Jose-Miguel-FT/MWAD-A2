import React from 'react';

function FilterCategory(props) {
  const patientsArray = JSON.parse(props.string);

  const [filter, setFilter] = React.useState('');

  const filtered = patientsArray
    .filter((f) => f[3].includes(filter) || filter.category === '')
    .map((f) => <li key={f}>{f}</li>);

  return (
    <div>
      {patientsArray}
      <p>Filter patient based on the category:</p>
      <input
        id="filter"
        placeholder="Category"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      <ul>{filtered}</ul>
    </div>
  );
}

export default FilterCategory;
