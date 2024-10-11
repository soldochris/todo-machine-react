import React from "react";

function useLocalStorage(itemsName, initialValue) {
	const [items, setItems] = React.useState(initialValue);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		setTimeout( () => {
			try {
				const localStorageItems = localStorage.getItem(itemsName);
				let parsedItems;

				if(localStorageItems){
					parsedItems = JSON.parse(localStorageItems);
					setItems(parsedItems);
				}else{
					localStorage.setItem(itemsName, JSON.stringify(initialValue));
					parsedItems = initialValue;
				}

				setLoading(false);
			} catch {
				setLoading(false);
				setError(true);
			}
		}, 1000);
	},[]);

	function updateItems(newItems){
		localStorage.setItem(itemsName,JSON.stringify(newItems));
		setItems(newItems);
	}

	return {loading, error, items, updateItems}
}

export {useLocalStorage}
