import React from 'react'
import './DetailModal.css'
import Modal from '@material-ui/core/Modal'

export default props=>{
	
	return (
		<Modal open={props.open} onClose={props.onClose}>
			<div className="Detail">
				<div className="Content">
					<img src={props.item.thumb} alt="" />
					<h2 style={{color: "rosybrown"}}>{props.item.name}</h2>
					<p>Marca: {props.item.brand}</p>
					<p style={{textAlign: "justify"}}>{props.item.description}</p>
					<p style={{fontSize: "x-large", color: "coral"}}><b>{props.item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></p>
					<button onClick={props.onClose}>Fechar</button>
				</div>
			</div>
		</Modal>
	);
}