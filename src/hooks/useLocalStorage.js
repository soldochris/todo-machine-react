import React from "react";

function useLocalStorage(itemsName, initialValue) {
	const localStorageItems = localStorage.getItem(itemsName);
	let parsedItems;

	if(localStorageItems){
		parsedItems = JSON.parse(localStorageItems);
	}else{
		localStorage.setItem(itemsName,JSON.stringify(initialValue));
		parsedItems = initialValue;
	}

	const [items, setItems] = React.useState(parsedItems);

	function updateItems(newItems){
		localStorage.setItem(itemsName,JSON.stringify(newItems));
		setItems(newItems);
	}

	return [items, updateItems]
}

export {useLocalStorage}