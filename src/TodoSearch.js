import './TodoSearch.css';

function TodoSearch(){
	return(
		<input 
			type="text" 
			placeholder="Search a TODO"
			onChange={(event) => console.log(event.target.value)}
		/>
	);
}

export { TodoSearch };
