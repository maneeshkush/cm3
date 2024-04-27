function convert(){

	with (document.converter){

		var lVal = sigFig(frac2dec(l.value), 3);
		var wVal = sigFig(frac2dec(w.value), 3);

		var lCm = sigFig(frac2dec(l.value) * 2.54, 3);
		var wCm = sigFig(frac2dec(w.value) * 2.54, 3);

		var rectOrsquare = (l.value == l.value)? "正方形" : "長方形";

		answer.innerHTML = l.value + " インチ &times; " + w.value + " インチ = " + lCm + " センチメートル &times; " + wCm + " センチメートル";

		if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))){
			answer.innerHTML = "正の値を入力してください！";
			verbose.innerHTML = "";
			return;
		}

		var verb = "<h2>変換方法</h2><p>これらの寸法をインチからセンチメートルに変換するには、1インチ = 2.54センチメートルとして、各値を2.54で掛け算します。したがって、</p>";

		verb += "<p>" + l.value + " 乗算 2.54 = <span class='destacado'>" + lCm + "</span></p>";
		verb += "<p>" + w.value + " 乗算 2.54 = <span class='destacado'>" + wCm + "</span></p>";
		verb += "<p>したがって、</p>";
		verb += l.value + " &times; " + w.value + " インチ = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> センチメートル"

		verbose.innerHTML = verb;

	// FAQセクション
	var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";
			
			var FAQ = "<h2>長さと幅のインチからセンチメートルへのFAQ</h2>";
			
			var q = l.value + " &times; " + w.value + " インチの面積は何ですか？";
			var a = "<p><span class='formula'>面積 = 長さ &times; 幅</span> (式)</p><p class='destacado'>面積 = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " 平方インチ" + "</p>";
			FAQ += FAQItem(q, a);
			
			q = l.value + " &times; " + w.value + " インチの面積は何平方センチメートルですか？";
			a = "<p><span class='formula'>A = L &times; W</span> (式)</p><p>面積 = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = " + lCm + " &times; " + wCm + " = <p class='destacado'>面積 = " + bestFmt(lCm * wCm, 3) + " 平方センチメートル" + "</p>";
			FAQ += FAQItem(q, a);

			q = l.value + " &times; " + w.value + " インチはセンチメートルで何ですか？";
			a = "<p>" + l.value + " &times; " + w.value + " インチ = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> センチメートル</p>";
			FAQ += FAQItem(q, a);

	FAQ += "</div>";
	
	document.getElementById("faqSection").innerHTML = FAQ;
	}
}
