import React from 'react';

function FilterCategory(props) {
  const patientsArray = JSON.parse(props.string);

  const [filter, setFilter] = React.useState('');

  const filtered = patientsArray
    .filter((f) => f[3].includes(filter))
    .map((f) => (
      <li key={f}>
        Treatment ID: {f[0]}
        <br />
        Treatment Course ID: {f[1]}
        <br />
        Type: {f[2]}
        <br />
        Category: {f[3]}
        <br />
        Name: {f[4]}
        <br />
        Prescription:
        <span className="prescription">{f[5]}</span>
        <br />
        Allergy:<span className="allergy">{f[6]}</span>
        <br />
        Date: {f[7]}
      </li>
    ));

  return (
    <div>
      <p>Filter patient based on the category:</p>
      <input
        id="filter"
        placeholder="Category"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      <ul className="filteredList">{filtered}</ul>
    </div>
  );
}

export default FilterCategory;
