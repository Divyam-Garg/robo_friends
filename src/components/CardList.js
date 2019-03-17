import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

	const CardArray = robots.map((user) => {
		return (
			<Card name={user.name} email={user.email} key={user.id} id={user.id} />
			);
	});
	
	return CardArray;
}

export default CardList;