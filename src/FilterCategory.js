import React from 'react';

function FilterCategory(props){
  const patientsArray = JSON.parse(props.string);

  return (<div>
    <br />
<br />
<br />
<br />
<p>
  Filter patient based on the category:
</p>
<input
  placeholder="Category"
  type="text"
  value={}
  onChange={(event) => setStartDate(event.target.value)}
/>
<br />
<br />
<button onClick={}> FILTER </button>
</div>
  )
}

export default FilterCategory;