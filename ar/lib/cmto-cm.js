function convert() {
    with (document.converter) {
        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lIn = sigFig(frac2dec(l.value) * 0.3937, 3);
        var wIn = sigFig(frac2dec(w.value) * 0.3937, 3);

        var rectOrsquare = (l.value == l.value) ? "مربع" : "مستطيل";

        answer.innerHTML = l.value + " سم × " + w.value + " سم = " + lIn + " بوصة × " + wIn + " بوصة";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "الرجاء إدخال قيمة إيجابية!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>كيفية التحويل</h2><p>لتحويل هذه الأبعاد من السنتيمترات إلى بوصة، قم بضرب كل قيمة بـ 0.3937 لأن 1 سم = 0.3937 بوصة. لذلك،</p>";

        verb += "<p>" + l.value + " مضروبة في 0.3937 = <span class='destacado'>" + lIn + "</span></p>";

        verb += "<p>" + w.value + " مضروبة في 0.3937 = <span class='destacado'>" + wIn + "</span></p>";

        verb += "<p>لذا،</p>";

        verb += l.value + " سم × " + w.value + " في السنتيمترات = <span class='destacado'>" + lIn + " × " + wIn + "</span> بوصة"

        verbose.innerHTML = verb;

        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

        var FAQ = "<h2>أسئلة شائعة حول التحويل من السنتيمترات إلى بوصة</h2>";

        var q = "ما هي مساحة " + rectOrsquare + " بقياس " + l.value + " سم × " + w.value + " سم في سم مربع؟";
        var a = "<p><span class='formula'>المساحة = الطول × العرض</span> (الصيغة)</p><p class='destacado'>المساحة = " + l.value + " × " + w.value + " = " + bestFmt(lVal * wVal, 3) + " سم مربع" + "</p>";
        FAQ += FAQItem(q, a);

        q = "ما هي مساحة " + rectOrsquare + " بقياس " + l.value + " سم × " + w.value + " سم في بوصة مربعة؟";
        a = "<p><span class='formula'>A = L × W</span> (الصيغة)</p><p>المساحة = (" + l.value + " × 0.3937) × (" + w.value + " × 0.3937) = " + lIn + " × " + wIn + " = <p class='destacado'>المساحة = " + bestFmt(lIn * wIn, 3) + " بوصة مربعة" + "</p>";
        FAQ += FAQItem(q, a);

        q = "ما هي قيمة " + l.value + " × " + w.value + " في السنتيمترات بالبوصة؟";
        a = "<p>" + l.value + " × " + w.value + " سم = (" + l.value + " × 0.3937) × (" + w.value + " × 0.3937) = <span class='destacado'>" + lIn + " × " + wIn + "</span> بوصة</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
