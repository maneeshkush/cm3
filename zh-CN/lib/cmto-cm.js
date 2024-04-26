function convert() {
    with (document.converter) {
        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lIn = sigFig(frac2dec(l.value) * 0.3937, 3);
        var wIn = sigFig(frac2dec(w.value) * 0.3937, 3);

        var rectOrsquare = (l.value == l.value) ? "正方形" : "矩形";

        answer.innerHTML = l.value + " 厘米 &times; " + w.value + " 厘米 = " + lIn + " 英寸 &times; " + wIn + " 英寸";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "请输入正数值！";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>如何转换</h2><p>要将这些尺寸从英寸转换为厘米，只需将每个值乘以0.3937，因为1英寸=0.3937厘米。因此，</p>";

        verb += "<p>" + l.value + " 乘以 0.3937 = <span class='destacado'>" + lIn + "</span></p>";

        verb += "<p>" + w.value + " 乘以 0.3937 = <span class='destacado'>" + wIn + "</span></p>";

        verb += "<p>所以，</p>";

        verb += l.value + " &times; " + w.value + " 厘米 = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> 英寸"

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

        FAQ += "<h2>长度乘宽度厘米转英寸的常见问题解答</h2>";

        var q = "一个 " + rectOrsquare + "，尺寸为 " + l.value + " &times; " + w.value + " 厘米的面积是多少平方厘米？";
        var a = "<p><span class='formula'>面积 = 长 &times; 宽</span>（公式）</p><p class='destacado'>面积 = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " 平方厘米" + "</p>";
        FAQ += FAQItem(q, a);

        q = "一个 " + rectOrsquare + "，尺寸为 " + l.value + " &times; " + w.value + " 厘米的面积是多少平方英寸？";
        a = "<p><span class='formula'>A = L &times; W</span>（公式）</p><p>面积 = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = " + lIn + " &times; " + wIn + " = <p class='destacado'>面积 = " + bestFmt(lIn * wIn, 3) + " 平方厘米" + "</p>";
        FAQ += FAQItem(q, a);

        q = l.value + " &times; " + w.value + " 是多少平方厘米？";
        a = "<p>" + l.value + " &times; " + w.value + " 英寸 = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> 厘米</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
