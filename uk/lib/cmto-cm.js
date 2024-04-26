function convert(){

	with (document.converter){

		var lVal = sigFig(frac2dec(l.value), 3);
		var wVal = sigFig(frac2dec(w.value), 3);

		var lIn = sigFig(frac2dec(l.value) * 0.3937, 3);
		var wIn = sigFig(frac2dec(w.value) * 0.3937, 3);

		var rectOrsquare = (l.value == l.value)? "square" : "rectangle";

		answer.innerHTML = l.value + " cm &times; " + w.value + " cm = " + lIn + " in &times; " + wIn + " in";

		if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))){
			answer.innerHTML = "Please enter a positive value!";
			verbose.innerHTML = "";
			return;
		}

		var verb = "<h2>Як конвертувати</h2><p>Для конвертації цих розмірів з дюймів в сантиметри просто помножте кожне значення на 0,3937, оскільки 1 дюйм = 0,3937 см. Отже,</p>";

		verb += "<p>" + l.value + " помножити на 0.3937 = <span class='destacado'>" + lIn + "</span></p>";

		verb += "<p>" + w.value + " помножити на 0.3937 = <span class='destacado'>" + wIn + "</span></p>";

		verb += "<p>Отже,</p>";

		verb += l.value + " &times; " + w.value + " в сантиметрах = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> в дюймах"

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

	// FAQ section
	var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

		var FAQ = "<h2>Часті запитання щодо довжини на ширину в сантиметрах до дюймів</h2>";

		var q = "Яка площа a " + rectOrsquare + " measuring " + l.value + " &times; " + w.value + " сантиметрів в cm^2?";
		var a = "<p><span class='formula'>Area = length &times; width</span> (formula)</p><p class='destacado'>Area = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " cm<sup>2</sup>" + "</p>";
		FAQ += FAQItem(q, a);
		
		q = "Яка площа a " + rectOrsquare + " measuring " + l.value + " &times; " + w.value + " сантиметрів в квадратних дюймах?";
		a = "<p><span class='formula'>A = L &times; W</span> (formula)</p><p>Area = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = " + lIn + " &times; " + wIn + " = <p class='destacado'>Area = " + bestFmt(lIn * wIn, 3) + " cm<sup>2</sup>" + "</p>";
		FAQ += FAQItem(q, a);
		
		q = "Що таке " + l.value + " &times; " + w.value + " в см?";
		a = "<p>" + l.value + " &times; " + w.value + " дюймів = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> сантиметрів</p>";
		FAQ += FAQItem(q, a);
		
	FAQ += "</div>";

	document.getElementById("faqSection").innerHTML = FAQ;

	}
}