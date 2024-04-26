function convert(){

	with (document.converter){

		var lVal = sigFig(frac2dec(l.value), 3);
		var wVal = sigFig(frac2dec(w.value), 3);

		var lCm = sigFig(frac2dec(l.value) * 2.54, 3);
		var wCm = sigFig(frac2dec(w.value) * 2.54, 3);

		var rectOrsquare = (l.value == l.value)? "carré" : "rectangle";

		answer.innerHTML = l.value + " pouces &times; " + w.value + " pouces = " + lCm + " cm &times; " + wCm + " cm";

		if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))){
			answer.innerHTML = "Veuillez entrer une valeur positive !";
			verbose.innerHTML = "";
			return;
		}

		var verb = "<h2>Comment convertir</h2><p>Pour convertir ces dimensions de pouces en centimètres, il suffit de multiplier chaque valeur par 2,54 car 1 pouce = 2,54 cm. Ainsi,</p>";

		verb += "<p>" + l.value + " fois 2,54 = <span class='destacado'>" + lCm + "</span></p>";
		verb += "<p>" + w.value + " fois 2,54 = <span class='destacado'>" + wCm + "</span></p>";
		verb += "<p>Donc,</p>";
		verb += l.value + " &times; " + w.value + " pouces = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> centimètres"

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
	
	// Section FAQ
	var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";
			
			var FAQ = "<h2>FAQ sur les pouces en centimètres</h2>";
			
			var q = "Quelle est la superficie d'un " + rectOrsquare + " mesurant " + l.value + " &times; " + w.value + " pouces carrés ?";
			var a = "<p><span class='formula'>Superficie = longueur &times; largeur</span> (formule)</p><p class='destacado'>Superficie = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " pouces<sup>2</sup>" + "</p>";
			FAQ += FAQItem(q, a);
			
			q = "Quelle est la superficie d'un " + rectOrsquare + " mesurant " + l.value + " &times; " + w.value + " pouces carrés en centimètres carrés ?";
			a = "<p><span class='formula'>A = L &times; W</span> (formule)</p><p>Superficie = (" + l.value + " &times; 2,54) &times; (" + w.value + " &times; 2,54) = " + lCm + " &times; " + wCm + " = <p class='destacado'>Superficie = " + bestFmt(lCm * wCm, 3) + " cm<sup>2</sup>" + "</p>";
			FAQ += FAQItem(q, a);

			q = "Qu'est-ce que " + l.value + " &times; " + w.value + " en cm ?";
			a = "<p>" + l.value + " &times; " + w.value + " pouces = (" + l.value + " &times; 2,54) &times; (" + w.value + " &times; 2,54) = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> centimètres</p>";
			FAQ += FAQItem(q, a);

	FAQ += "</div>";
	
	document.getElementById("faqSection").innerHTML = FAQ;

	}
}
