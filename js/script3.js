document.addEventListener('DOMContentLoaded', () => {
	const text = document.querySelector('.textWriting');
	const text2 = document.querySelector('.textWriting2');
	let isiText2 = text2.innerHTML;
	const box = document.querySelector('.box');
	let isiText = text.innerHTML;
	textWriting(isiText);

	const envelope = document.querySelector('.envelope');
	const container = document.querySelector('.container');
	const container2 = document.querySelector('.container2');
	const container3 = document.querySelector('.container3');


	envelope.addEventListener('click', (e)=> {
		e.preventDefault();
		e.target.classList.remove('bx-envelope');
		e.target.classList.add('bx-envelope-open');

		setTimeout(() => {
		container.classList.add('hidden');
		container2.classList.remove('hidden');
		textWriting2();

		},500)
	});

	const next = document.querySelector('.next');
	next.addEventListener('click', (e)=> {
		e.preventDefault();
		container2.classList.add('hidden');
		container3.classList.remove('hidden');
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

function textWriting2() {
	let putText = 0;
	let isiText = 'Happy anniversary yah sayang yang ke 41 bulannya sayang aku, makasih yah sayang udah mau bertahan sampe selama ini, Rafly minta maaf yah sayang kalo rafly blm bisa jadi yang terbaik buat ayang, rafly minta maaf yah sayang kalo rafly masih sering ngelakuin kesalahan sama ayang, rafly minta maaf yah sayang kalo rafly masih banyak kurangnya sama ayang rafly bener bener minta maaf yah sayang, rafly bakalan janji buat buktiin kalo rafly bisa jadi yang terbaik buat ayang, rafly bakalan selalu tulus buat ayang sampai akhir hayat nanti sayang aku, rafly cuman minta sama ayang, ayang jangan pernah tinggalin aku yah sayang disini, aku disini cuman punya ayang, rumah kedua aku adalah ayang, cuman ayang disini harapan aku buat kedepannya sayang, rafly minta ayang selalu sama aku terus yah sayang sampai akhir nanti, rafly minta ayang jangan pernah kecewain aku lagi yah sayang aku, apapun masalahnya kita harus hadepin bareng bareng yah sayang pokoknya kita harus berjuang buat pertahanin hubungan ini yah sayang, rafly minta ayang jaga hati ayang buat aku yah sayang, ayang jaga perasaan aku, jaga diri ayang buat aku, jaga aurat ayang buat aku, jaga semuanya pokoknya buat aku yah sayang, rafly seneng banget udah kenal ayang, rafly bangga banget punya ayang selama ini, cuman sama ayang rafly bisa sampe sesayang ini setulus ini, jadi rafly minta ayang selalu jaga yah sayang hati ayang buat aku, rafly bakalan terus selalu berjuang sayang buat hubungan ini, rafly disini bakalan selalu jaga hati aku buat ayang, selalu jaga perasaan ayang, pokoknya selalu jaga semuanya buat ayang, rafly bakalan selalu berusaha buat ayang seneng terus sama aku, jadi kita harus pertahanin hubungan ini sampai akhir nanti yah sayang rafly pengen ayang selalu jadi pendamping hidup aku sampe selamanya sayang, pokoknya ayang selalu jaga kesehatan yah sayang, pokoknya ayang harus makan yang teratur yah sayang aku, pokoknya ayang sholat 5 waktu yah sayang aku, pokoknya ayang nurut yah sayang sama aku sayang aku, pokoknya ayang hindarin apa yang enggak aku suka yang buat aku marah ayang hindarin itu yah sayang aku, pokoknya kalo ada apa apa ayang langsung bilang sama aku yah sayang, aku pengen ayang selalu lapor sama aku, aku pengen aku yang jadi satu satunya tempat untuk cerita ayang, aku pengen ayang selalu minta kemana kemana sama aku yah sayang, rafly bakalan selalu berusaha buat nurutin permintaan ayang karena ayang calon istri aku nanti, pokoknya apapun masalahnya kita harus hadepin yah sayang, pokoknya jangan ada yang dipendem sayang kita juga harus saling mengingatkan kalo salah satu dari kita ngelakuin kesalahan sayang, dan harus melengkapi satu sama lain sayang aku, rafly sayang bangett bangett sama ayang, rafly enggak mau sayang kehilangan ayang aku, pokoknya doanya kita harus selalu sama sama terus yah sayang sampai akhir nanti aamiin ya allah. I LOVE YOU AYANG AKU CINTA AKU TERSAYANG BANGETTT'
	setInterval( ()=> {
		text2.innerHTML = isiText.slice(0, putText);
		putText++;

		if (putText == isiText.length) {
			next.classList.remove('opacity-0');
			next.classList.add('opacity-1');
		}
	},50)
}
});





