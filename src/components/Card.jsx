import React, { useState } from 'react'
import './Card.css'
import DetailModal from './DetailModal';

export default props=>{
	
	const [showDetail, setShowDetail] = useState(false);
	
	let toggleDetail = ()=>{
		setShowDetail(!showDetail);
	}
	
	return (
		<><DetailModal item={props.item} open={showDetail} onClose={toggleDetail}></DetailModal>
		<div className="Card" onClick={()=>toggleDetail()}>
			<div className="Thumb" style={{
				backgroundImage: props.item.thumb ? 'url('+props.item.thumb+')' : "url('https://img.itdg.com.br/images/recipes/000/081/011/329186/329186_original.jpg')"
			}}></div>
			<div className="Details">
				<h3 className="Name">{props.item.name} - {props.item.brand}</h3>
				<p>{props.item.description}</p>
				<p className="Price"><b>{props.item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></p>
			</div>
		</div></>
	);
}