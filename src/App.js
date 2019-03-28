import React, { Component } from 'react';
import Header from './components/header';
import shuffle from 'shuffle-array';
import './App.css';
import Tile from './components/tile';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hiding: 0,
			showing: 1,
			matching: 2,
		};
		const { hiding } = this.state;

		let cards = [
			{
				id: 0,
				cardState: hiding,
				backgroundColor: 'red',
			},
			{
				id: 1,
				cardState: hiding,
				backgroundColor: 'red',
			},
			{
				id: 2,
				cardState: hiding,
				backgroundColor: 'navy',
			},
			{
				id: 3,
				cardState: hiding,
				backgroundColor: 'navy',
			},
			{
				id: 4,
				cardState: hiding,
				backgroundColor: 'green',
			},
			{
				id: 5,
				cardState: hiding,
				backgroundColor: 'green',
			},
			{
				id: 6,
				cardState: hiding,
				backgroundColor: 'yellow',
			},
			{
				id: 7,
				cardState: hiding,
				backgroundColor: 'yellow',
			},
			{
				id: 8,
				cardState: hiding,
				backgroundColor: 'black',
			},
			{
				id: 9,
				cardState: hiding,
				backgroundColor: 'black',
			},
			{
				id: 10,
				cardState: hiding,
				backgroundColor: 'purple',
			},
			{
				id: 11,
				cardState: hiding,
				backgroundColor: 'purple',
			},
			{
				id: 12,
				cardState: hiding,
				backgroundColor: 'pink',
			},
			{
				id: 13,
				cardState: hiding,
				backgroundColor: 'pink',
			},
			{
				id: 14,
				cardState: hiding,
				backgroundColor: 'white',
			},
			{
				id: 15,
				cardState: hiding,
				backgroundColor: 'white',
			},
		];
		cards = shuffle(cards);
		this.state = { cards, noClick: false };
	}

	handleClick = (id) => {
		this.setState((prevState) => {
			let cards = prevState.cards.map(
				(c) =>
					c.id === id
						? {
								...c,
								cardState: c.cardState === this.state.hiding ? this.state.matching : this.state.hiding,
							}
						: c
			);
			return { cards };
		});
	};

	render() {
		const cards = this.state.cards.map((card) => (
			<Tile
				key={card.id}
				showing={card.cardState !== this.state.hiding}
				backgroundColor={card.backgroundColor}
				onClick={() => this.handleClick(card.id)}
			/>
		));

		return (
			<div id="App">
				<Header />
				{cards}
			</div>
		);
	}
}

export default App;
