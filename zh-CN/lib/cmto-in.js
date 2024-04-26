function convert(){

	with (document.converter){

		var lVal = sigFig(frac2dec(l.value), 3);
		var wVal = sigFig(frac2dec(w.value), 3);

		var lCm = sigFig(frac2dec(l.value) * 2.54, 3);
		var wCm = sigFig(frac2dec(w.value) * 2.54, 3);

		var rectOrsquare = (l.value == l.value)? "square" : "rectangle";

		answer.innerHTML = l.value + " in &times; " + w.value + " in = " + lCm + " cm &times; " + wCm + " cm";

		if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))){
			answer.innerHTML = "请输入正值!";
			verbose.innerHTML = "";
			return;
		}

		var verb = "<h2>如何转换</h2><p>要将这些尺寸从英寸转换为厘米，只需将每个值乘以2.54，因为1英寸 = 2.54厘米。所以,</p>";

		verb += "<p>" + l.value + " 乘以 2.54 = <span class='destacado'>" + lCm + "</span></p>";
		verb += "<p>" + w.value + " 乘以 2.54 = <span class='destacado'>" + wCm + "</span></p>";
		verb += "<p>因此,</p>";
		verb += l.value + " &times; " + w.value + " 英寸 = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> 厘米"

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
			
			var FAQ = "<h2>关于长度和宽度英寸到厘米的常见问题</h2>";
			
			var q = "a的面积是多少 " + rectOrsquare + " measuring " + l.value + " &times; " + w.value + " 英寸 等于 平方英寸 ?";
			var a = "<p><span class='formula'>Area = length &times; width</span> (formula)</p><p class='destacado'>Area = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " in<sup>2</sup>" + "</p>";
			FAQ += FAQItem(q, a);
			
			q = "a的面积是多少 " + rectOrsquare + " measuring " + l.value + " &times; " + w.value + " 英寸换算成平方厘米？";
			a = "<p><span class='formula'>A = L &times; W</span> (formula)</p><p>Area = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = " + lCm + " &times; " + wCm + " = <p class='destacado'>Area = " + bestFmt(lCm * wCm, 3) + " cm<sup>2</sup>" + "</p>";
			FAQ += FAQItem(q, a);

			q = "什么是 " + l.value + " &times; " + w.value + " 单位是厘米？";
			a = "<p>" + l.value + " &times; " + w.value + " 英寸 = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> 厘米</p>";
			FAQ += FAQItem(q, a);

	FAQ += "</div>";
	
	document.getElementById("faqSection").innerHTML = FAQ;

	}
}