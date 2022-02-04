import React from 'react';

function FilterCategory(props){
  const patientsArray = JSON.parse(props.string);

  const [filter, setFilter] = React.useState('');

  const Karolis = patientsArray.filter(f => f.includes(filter) || filter === '').map(f => <li key={f}>{f}</li>);

  return (<div>
    <br />
    <br />
    <br />
    <br />
    <p>
      Filter patient based on the category:
    </p>
    <input
      id="filter"
      placeholder="Category"
      type="text"
      value={filter}
      onChange={(event) => setFilter(event.target.value)}
    />
    <ul>
      {Karolis}
    </ul>
    <br />
    <br />
    <button onClick={}> FILTER </button>
    </div>
  )
}

export default FilterCategory;