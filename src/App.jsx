import React, { useState } from 'react';
import './App.css';
import items from './data/items.json';
import Card from './components/Card';
import Filter from './components/Filter';
import WhatsModal from './components/WhatsModal';
import { Grid, CircularProgress } from '@material-ui/core';

export default props=>{
	
	const [itemList,setItemList] = useState(undefined);
	//simulacao de resposta assincrona
	setTimeout(()=>setItemList(items), 2000);
	const isReady = ()=>{return !!itemList;}

	const [whatsPan, setWhatsPan] = useState(false);
	const toggleWhats = ()=>setWhatsPan(!whatsPan);
	
	const [filter, setFilter] = useState("Todas");
	const filteredItems = ()=>{
		if(!isReady()) return [];
		if(filter === "Todas") return itemList;
		return itemList.filter(e => e.brand === filter);
	}
	
	return (<>
		<div className="App">
			<div className="Header">
				<span className="Title">Catálogo de Panetone</span>
				<div className="Center">
				
					<button onClick={toggleWhats}>O que é um panetone?</button>
					<WhatsModal open={whatsPan} onClose={toggleWhats}></WhatsModal>
					
					{/*
					Detalhe especial pra como fiz pra pegar as marcas sem repetidos
					myArray = [3,2,3,1,2,4];
					mySet = new Set(myArray);
					uniques = [...mySet]; // resultado: [3,2,1,4]
					*/}
					<Filter
						brands={isReady() ? [...(new Set(itemList.map(e=>e.brand)))] : []}
						change={x=>setFilter(x)}
					></Filter>
					
				</div>
			</div>
			
			<div style={{padding: "0.5em"}}>
				{ isReady() ? 
					<Grid container>
						{filteredItems().map(e =>
							<Grid key={e.id} item xs={12} sm={6} lg={4}>
								<Card item={e} />
							</Grid>
						)}
					</Grid>
					: <div className="Loading"><CircularProgress /></div>
				}
			</div>
			
		</div>
	</>);
};
