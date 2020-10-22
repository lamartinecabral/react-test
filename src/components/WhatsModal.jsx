import React from 'react'
import './WhatsModal.css'
import whatspanettone from '../data/whatspanettone.json'
import Modal from '@material-ui/core/Modal'

export default props=>{
	
	return (
		<Modal open={props.open} onClose={props.onClose}>
			<div className="Whats">
				<div className="Content">
					<img src="https://img.itdg.com.br/images/recipes/000/081/011/329186/329186_original.jpg" alt=""></img>
					<h1 style={{color: "rosybrown"}}>O que é um panetone?</h1>
					<p>{whatspanettone}</p>
					<button onClick={props.onClose}>Fechar</button>
				</div>
			</div>
		</Modal>
	);
}