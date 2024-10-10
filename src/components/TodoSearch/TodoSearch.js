import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){
	
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
