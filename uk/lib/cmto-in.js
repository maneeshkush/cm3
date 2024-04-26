function convert(){

	with (document.converter){

		var lVal = sigFig(frac2dec(l.value), 3);
		var wVal = sigFig(frac2dec(w.value), 3);

		var lCm = sigFig(frac2dec(l.value) * 2.54, 3);
		var wCm = sigFig(frac2dec(w.value) * 2.54, 3);

		var rectOrsquare = (l.value == l.value)? "квадрат" : "прямокутник";

		answer.innerHTML = l.value + " дюймів &times; " + w.value + " дюймів = " + lCm + " см &times; " + wCm + " см";

		if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))){
			answer.innerHTML = "Будь ласка, введіть додатнє значення!";
			verbose.innerHTML = "";
			return;
		}

		var verb = "<h2>Як конвертувати</h2><p>Щоб конвертувати ці розміри з дюймів в сантиметри, просто помножте кожне значення на 2,54, оскільки 1 дюйм = 2,54 см. Таким чином,</p>";

		verb += "<p>" + l.value + " помножити на 2,54 = <span class='destacado'>" + lCm + "</span></p>";
		verb += "<p>" + w.value + " помножити на 2,54 = <span class='destacado'>" + wCm + "</span></p>";
		verb += "<p>Отже,</p>";
		verb += l.value + " &times; " + w.value + " дюймів = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> сантиметрів"

		verbose.innerHTML = verb;


	// <div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>
	// 	<h2>FAQ page on pound to ounces</h2>
	// 	<div itemscope='' itemprop='mainEntity' itemtype='https://schema.org/Question'>
	// 		<h3 itemprop='name text'>Pergunta ....?</h3>
	// 		<div itemscope='' itemprop='suggestedAnswer acceptedAnswer' itemtype='https://schema.org/Answer'>
	// 			<div itemprop='text'>
	// 				<p>Resposta ....</p>
	// 			</div>
	// 		</div>
	// 	</div>
	// </div>
	
	// Розділ з частими запитаннями
	var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";
			
			var FAQ = "<h2>Часті запитання щодо довжини та ширини в дюймах до сантиметрів</h2>";
			
			var q = "Яка площа " + rectOrsquare + " розміром " + l.value + " &times; " + w.value + " дюймів в квадратних дюймах?";
			var a = "<p><span class='formula'>Площа = довжина &times; ширина</span> (формула)</p><p class='destacado'>Площа = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " дюйма<sup>2</sup>" + "</p>";
			FAQ += FAQItem(q, a);
			
			q = "Яка площа " + rectOrsquare + " розміром " + l.value + " &times; " + w.value + " дюймів в квадратних сантиметрах?";
			a = "<p><span class='formula'>A = L &times; W</span> (формула)</p><p>Площа = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = " + lCm + " &times; " + wCm + " = <p class='destacado'>Площа = " + bestFmt(lCm * wCm, 3) + " см<sup>2</sup>" + "</p>";
			FAQ += FAQItem(q, a);

			q = "Що таке " + l.value + " &times; " + w.value + " в см?";
			a = "<p>" + l.value + " &times; " + w.value + " дюймів = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> сантиметрів</p>";
			FAQ += FAQItem(q, a);

	FAQ += "</div>";
	
	document.getElementById("faqSection").innerHTML = FAQ;

	}
}
