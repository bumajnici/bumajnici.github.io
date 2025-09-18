document.addEventListener('DOMContentLoaded', () => { 
	const header = document.querySelector('header'); 
	const right = document.querySelector('.right');
	function updateRightTop() { 
		// Встановлюємо top рівним висоті хедера у пікселях 
		right.style.top = header.offsetHeight + 'px'; 
	} 
		
	// Оновлюємо після завантаження сторінки 
	updateRightTop(); 

	// Оновлюємо при зміні розміру вікна 
	window.addEventListener('resize', updateRightTop); 

	// Додатково можна оновлювати при зміні контенту хедера 
	// (якщо динамічно додаєш текст) 
	const observer = new MutationObserver(updateRightTop); 
	observer.observe(header, { childList: true, subtree: true, characterData: true }); 
});