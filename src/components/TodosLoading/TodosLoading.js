import './TodosLoading.css';

function TodosLoading(){
	return(
		<>
			<div class="skeleton-container">
				<span class="skeleton-check"></span>
				<p class="skeleton-text"></p>
				<span class="skeleton-delete"></span>
			</div>
			<div class="skeleton-container">
				<span class="skeleton-check"></span>
				<p class="skeleton-text"></p>
				<span class="skeleton-delete"></span>
			</div>
			<div class="skeleton-container">
				<span class="skeleton-check"></span>
				<p class="skeleton-text"></p>
				<span class="skeleton-delete"></span>
			</div>
		</>
	);
}

export {TodosLoading};
