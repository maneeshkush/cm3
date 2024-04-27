function convert(){

	with (document.converter){

		var lVal = sigFig(frac2dec(l.value), 3);
		var wVal = sigFig(frac2dec(w.value), 3);

		var lIn = sigFig(frac2dec(l.value) * 0.3937, 3);
		var wIn = sigFig(frac2dec(w.value) * 0.3937, 3);

		var rectOrsquare = (l.value == l.value)? "square" : "rectangle";

		answer.innerHTML = l.value + " cm &times; " + w.value + " cm = " + lIn + " in &times; " + wIn + " in";

		if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))){
			answer.innerHTML = "請輸入正值!";
			verbose.innerHTML = "";
			return;
		}

		var verb = "<h2>如何轉換</h2><p>要將這些尺寸從英寸轉換為公分，只需將每個值乘以 0.3937，因為 1 英寸 = 0.3937 公分。因此，</p>";

		verb += "<p>" + l.value + " 乘以 0.3937 = <span class='destacado'>" + lIn + "</span></p>";

		verb += "<p>" + w.value + " 乘以 0.3937 = <span class='destacado'>" + wIn + "</span></p>";

		verb += "<p>所以,</p>";

		verb += l.value + " &times; " + w.value + " 以公分為單位 = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> 以英吋來算"

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

		var FAQ = "<h2>有關長寬公分轉英寸的常見問題</h2>";

		var q = "a的面積是多少 " + rectOrsquare + " measuring " + l.value + " &times; " + w.value + " 公分 cm^2?";
		var a = "<p><span class='formula'>Area = length &times; width</span> (formula)</p><p class='destacado'>Area = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " cm<sup>2</sup>" + "</p>";
		FAQ += FAQItem(q, a);
		
		q = "a的面積是多少 " + rectOrsquare + " measuring " + l.value + " &times; " + w.value + " 厘米換算成平方英吋？";
		a = "<p><span class='formula'>A = L &times; W</span> (formula)</p><p>Area = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = " + lIn + " &times; " + wIn + " = <p class='destacado'>Area = " + bestFmt(lIn * wIn, 3) + " cm<sup>2</sup>" + "</p>";
		FAQ += FAQItem(q, a);
		
		q = "什麼是 " + l.value + " &times; " + w.value + " 單位是公分？";
		a = "<p>" + l.value + " &times; " + w.value + " 英吋 = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> 公分</p>";
		FAQ += FAQItem(q, a);
		
	FAQ += "</div>";

	document.getElementById("faqSection").innerHTML = FAQ;

	}
}