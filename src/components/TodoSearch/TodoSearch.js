import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../context/TodoContext';
function TodoSearch(){

	const {searchValue, setSearchValue} = React.useContext(TodoContext);
	
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
