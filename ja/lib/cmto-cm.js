function convert() {
    with (document.converter) {
        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lIn = sigFig(frac2dec(l.value) * 0.3937, 3);
        var wIn = sigFig(frac2dec(w.value) * 0.3937, 3);

        var rectOrsquare = (l.value == l.value) ? "正方形" : "長方形";

        answer.innerHTML = l.value + " cm &times; " + w.value + " cm = " + lIn + " インチ &times; " + wIn + " インチ";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "正の値を入力してください！";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>変換方法</h2><p>これらの寸法をインチからセンチメートルに変換するには、1インチ = 0.3937センチメートルで各値を掛け算します。したがって、</p>";

        verb += "<p>" + l.value + " 乗る 0.3937 = <span class='destacado'>" + lIn + "</span></p>";

        verb += "<p>" + w.value + " 乗る 0.3937 = <span class='destacado'>" + wIn + "</span></p>";

        verb += "<p>したがって、</p>";

        verb += l.value + " &times; " + w.value + " センチメートル = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> インチ"

        verbose.innerHTML = verb;

        // FAQセクション
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

        FAQ += "<h2>長さと幅のセンチメートルからインチへのFAQ</h2>";

        var q = l.value + " &times; " + w.value + " センチメートルの面積は何ですか？";
        var a = "<p><span class='formula'>面積 = 長さ &times; 幅</span>（式）</p><p class='destacado'>面積 = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " センチメートル<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = l.value + " &times; " + w.value + " センチメートルの面積は何平方インチですか？";
        a = "<p><span class='formula'>A = L &times; W</span>（式）</p><p>面積 = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = " + lIn + " &times; " + wIn + " = <p class='destacado'>面積 = " + bestFmt(lIn * wIn, 3) + " センチメートル<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = l.value + " &times; " + w.value + " は何センチメートルですか？";
        a = "<p>" + l.value + " &times; " + w.value + " インチ = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> センチメートル</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
