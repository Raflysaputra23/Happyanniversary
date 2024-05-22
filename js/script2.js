document.addEventListener('DOMContentLoaded', () => {
	const text = document.querySelector('.textWriting');
	const box = document.querySelector('.box');
	let isiText = text.innerHTML;
	textWriting(isiText);

	const inputCek = document.querySelector('.inputCek');
	const btnCek = document.querySelector('.btnCek');

	btnCek.addEventListener('click', (e)=> {
		e.preventDefault();
		if (inputCek.value == '2020-12-23') {
			Swal.fire({
			  title: "Yey, ayang inget",
			  icon: "success",
			  showCancelButton: false,
			  confirmButtonColor: "#3085d6",
			  cancelButtonColor: "#d33",
			  confirmButtonText: "Lanjut"
			}).then((result) => {
			  if (result.isConfirmed) {
			    window.location.href = 'index5.html';
			  }
			});
		} else if(inputCek.value.toLowerCase() == 'tirtayasa') {
			Swal.fire({
			  title: "Yey, ayang inget",
			  icon: "success",
			  showCancelButton: false,
			  confirmButtonColor: "#3085d6",
			  cancelButtonColor: "#d33",
			  confirmButtonText: "Lanjut"
			}).then((result) => {
			  if (result.isConfirmed) {
			    window.location.href = 'index6.html';
			  }
			});
		}else {
			Swal.fire({
			  title: "Kok ayang lupa sih!",
			  icon: "warning",
			  showCancelButton: false,
			  confirmButtonColor: "#3085d6",
			  cancelButtonColor: "#d33",
			  confirmButtonText: "Ulangi!"
			});
		}
	});





	function textWriting(isiText) {
	let putText = 0;
	setInterval( ()=> {
		text.innerHTML = isiText.slice(0, putText);
		putText++;

		if (putText == isiText.length) {
			box.classList.remove('opacity-0');
			box.classList.add('opacity-1');
		}
	},100)
}
});





