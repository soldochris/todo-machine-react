import React from 'react';
import './TodoSearch.css';

function TodoSearch(){
	
	const [searchValue, setSearchValue] = React.useState("");
	console.log(searchValue);

	return(
		<input 
			type="text"
			value={searchValue}
			placeholder="Search a TODO"
			onChange={(event) => {
				setSearchValue(event.target.value);
			}}
		/>
	);
}

export { TodoSearch };
