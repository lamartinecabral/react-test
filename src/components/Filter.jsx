import React from 'react'

export default props=>{
	return (
		<div style={{color: "white", textAlign: "center"}}>
			<label htmlFor="filter">Filtrar por Marca: </label>
			<select id="filter" onChange={e=>props.change(e.target.value)}>
				<option key="Todas" value="Todas">Todas</option>
				{props.brands.sort().map((brand)=>{
					return <option key={brand} value={brand}>{brand}</option>
				})}
			</select>
		</div>
	);
}