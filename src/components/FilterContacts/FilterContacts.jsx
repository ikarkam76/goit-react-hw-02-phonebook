import React from "react";

const FilterContacts = ({value, onChange}) => (
    <label>
        Filter
        <input type="text" value={value} onChange={onChange} />
    </label>
)

export default FilterContacts;