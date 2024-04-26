function convert(){

	with (document.converter){

		var lVal = sigFig(frac2dec(l.value), 3);
		var wVal = sigFig(frac2dec(w.value), 3);

		var lCm = sigFig(frac2dec(l.value) * 2.54, 3);
		var wCm = sigFig(frac2dec(w.value) * 2.54, 3);

		var rectOrsquare = (l.value == l.value)? "वर्ग" : "आयत";

		answer.innerHTML = l.value + " इंच &times; " + w.value + " इंच = " + lCm + " सेंटीमीटर &times; " + wCm + " सेंटीमीटर";

		if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))){
			answer.innerHTML = "कृपया एक सकारात्मक मूल्य दर्ज करें!";
			verbose.innerHTML = "";
			return;
		}

		var verb = "<h2>कैसे परिवर्तित करें</h2><p>इन आयामों को इंच से सेंटीमीटर में परिवर्तित करने के लिए बस प्रत्येक मूल्य को 2.54 से गुणा करें क्योंकि 1 इंच = 2.54 सेंटीमीटर। इसलिए,</p>";

		verb += "<p>" + l.value + " गुना 2.54 = <span class='destacado'>" + lCm + "</span></p>";
		verb += "<p>" + w.value + " गुना 2.54 = <span class='destacado'>" + wCm + "</span></p>";
		verb += "<p>इस प्रकार,</p>";
		verb += l.value + " &times; " + w.value + " इंच = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> सेंटीमीटर में"

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
			
			var FAQ = "<h2>परिमाप द्वारा चौड़ाई इंच से सेंटीमीटर</h2>";
			
			var q = l.value + " &times; " + w.value + " इंच में कितना क्षेत्रफल है?";
			var a = "<p><span class='formula'>क्षेत्रफल = लंबाई &times; चौड़ाई</span> (सूत्र)</p><p class='destacado'>क्षेत्रफल = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " इंच<sup>2</sup>" + "</p>";
			FAQ += FAQItem(q, a);
			
			q = l.value + " &times; " + w.value + " इंच में कितने सेंटीमीटर हैं?";
			a = "<p><span class='formula'>क्षेत्रफल = लंबाई &times; चौड़ाई</span> (सूत्र)</p><p>क्षेत्रफल = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = " + lCm + " &times; " + wCm + " = <p class='destacado'>क्षेत्रफल = " + bestFmt(lCm * wCm, 3) + " सेंटीमीटर<sup>2</sup>" + "</p>";
			FAQ += FAQItem(q, a);

			q = l.value + " &times; " + w.value + " इंच में सेंटीमीटर में क्या है?";
			a = "<p>" + l.value + " &times; " + w.value + " इंच = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> सेंटीमीटर</p>";
			FAQ += FAQItem(q, a);

	FAQ += "</div>";
	
	document.getElementById("faqSection").innerHTML = FAQ;

	}
}
