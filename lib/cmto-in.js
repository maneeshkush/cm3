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

		var verb = "<h2>How to convert</h2><p>To convert these dimensions from in to cm simply multiply each value by 2.54 because 1 in = 2.54 cm. So,</p>";

		verb += "<p>" + l.value + " times 2.54 = <span class='destacado'>" + lCm + "</span></p>";
		verb += "<p>" + w.value + " times 2.54 = <span class='destacado'>" + wCm + "</span></p>";
		verb += "<p>Thus,</p>";
		verb += l.value + " &times; " + w.value + " in inches = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> in centimeters"

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
			
			var FAQ = "<h2>FAQ on length by width inches to centimeters</h2>";
			
			var q = "What is the area of a " + rectOrsquare + " measuring " + l.value + " &times; " + w.value + " inches in sq in?";
			var a = "<p><span class='formula'>Area = length &times; width</span> (formula)</p><p class='destacado'>Area = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " in<sup>2</sup>" + "</p>";
			FAQ += FAQItem(q, a);
			
			q = "What is the area of a " + rectOrsquare + " measuring " + l.value + " &times; " + w.value + " inches in square centimeters?";
			a = "<p><span class='formula'>A = L &times; W</span> (formula)</p><p>Area = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = " + lCm + " &times; " + wCm + " = <p class='destacado'>Area = " + bestFmt(lCm * wCm, 3) + " cm<sup>2</sup>" + "</p>";
			FAQ += FAQItem(q, a);

			q = "What is " + l.value + " &times; " + w.value + " in in cm?";
			a = "<p>" + l.value + " &times; " + w.value + " inches = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> centimeters</p>";
			FAQ += FAQItem(q, a);

	FAQ += "</div>";
	
	document.getElementById("faqSection").innerHTML = FAQ;

	}
}