import './TodosLoading.css';

function TodosLoading(){
	return(
		<>
			<div className="skeleton-container">
				<span className="skeleton-check"></span>
				<p className="skeleton-text"></p>
				<span className="skeleton-delete"></span>
			</div>
			<div className="skeleton-container">
				<span className="skeleton-check"></span>
				<p className="skeleton-text"></p>
				<span className="skeleton-delete"></span>
			</div>
			<div className="skeleton-container">
				<span className="skeleton-check"></span>
				<p className="skeleton-text"></p>
				<span className="skeleton-delete"></span>
			</div>
		</>
	);
}

export {TodosLoading};
