function convert(){

	with (document.converter){

		var lVal = sigFig(frac2dec(l.value), 3);
		var wVal = sigFig(frac2dec(w.value), 3);

		var lCm = sigFig(frac2dec(l.value) * 2.54, 3);
		var wCm = sigFig(frac2dec(w.value) * 2.54, 3);

		var rectOrsquare = (l.value == l.value)? "square" : "rectangle";

		answer.innerHTML = l.value + " in &times; " + w.value + " in = " + lCm + " cm &times; " + wCm + " cm";

		if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))){
			answer.innerHTML = "Please enter a positive value!";
			verbose.innerHTML = "";
			return;
		}

		var verb = "<h2>Como converter</h2><p>Para converter essas dimensões de polegadas para centímetros, basta multiplicar cada valor por 2,54, pois 1 pol = 2,54 cm. Então,</p>";

		verb += "<p>" + l.value + " vezes 2.54 = <span class='destacado'>" + lCm + "</span></p>";
		verb += "<p>" + w.value + " vezes 2.54 = <span class='destacado'>" + wCm + "</span></p>";
		verb += "<p>Thus,</p>";
		verb += l.value + " &times; " + w.value + " em polegadas = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> em centímetros"

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
			
			var FAQ = "<h2>FAQ sobre comprimento por largura em polegadas para centímetros</h2>";
			
			var q = "Qual é a área de um " + rectOrsquare + " measuring " + l.value + " &times; " + w.value + " polegadas em sq in?";
			var a = "<p><span class='formula'>Area = length &times; width</span> (formula)</p><p class='destacado'>Area = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " in<sup>2</sup>" + "</p>";
			FAQ += FAQItem(q, a);
			
			q = "Qual é a área de um " + rectOrsquare + " measuring " + l.value + " &times; " + w.value + " polegadas em centímetros quadrados?";
			a = "<p><span class='formula'>A = L &times; W</span> (formula)</p><p>Area = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = " + lCm + " &times; " + wCm + " = <p class='destacado'>Area = " + bestFmt(lCm * wCm, 3) + " cm<sup>2</sup>" + "</p>";
			FAQ += FAQItem(q, a);

			q = "Qual é " + l.value + " &times; " + w.value + " em centímetros?";
			a = "<p>" + l.value + " &times; " + w.value + " polegadas = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> centímetros</p>";
			FAQ += FAQItem(q, a);

	FAQ += "</div>";
	
	document.getElementById("faqSection").innerHTML = FAQ;

	}
}