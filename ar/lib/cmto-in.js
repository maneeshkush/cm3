function convert() {
    with (document.converter) {
        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lCm = sigFig(frac2dec(l.value) * 2.54, 3);
        var wCm = sigFig(frac2dec(w.value) * 2.54, 3);

        var rectOrsquare = (l.value == l.value) ? "مربع" : "مستطيل";

        answer.innerHTML = l.value + " بوصة &times; " + w.value + " بوصة = " + lCm + " سم &times; " + wCm + " سم";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "الرجاء إدخال قيمة إيجابية!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>كيفية التحويل</h2><p>لتحويل هذه الأبعاد من بوصة إلى سم، قم بضرب كل قيمة بمعامل 2.54 لأن 1 بوصة = 2.54 سم. لذا،</p>";

        verb += "<p>" + l.value + " مرات 2.54 = <span class='destacado'>" + lCm + "</span></p>";
        verb += "<p>" + w.value + " مرات 2.54 = <span class='destacado'>" + wCm + "</span></p>";
        verb += "<p>بالتالي،</p>";
        verb += l.value + " &times; " + w.value + " بوصة = <span class='destacado'>" + lCm + " سم &times; " + wCm + "</span> سم"

        verbose.innerHTML = verb;

        // قسم الأسئلة الشائعة
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

        FAQ += "<h2>أسئلة شائعة حول طول البوصة إلى السنتيمتر</h2>";

        var q = "ما هو مساحة " + rectOrsquare + " القياس " + l.value + " &times; " + w.value + " بوصة مربعة؟";
        var a = "<p><span class='formula'>المساحة = الطول &times; العرض</span> (الصيغة)</p><p class='destacado'>المساحة = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " بوصة<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "ما هو مساحة " + rectOrsquare + " القياس " + l.value + " &times; " + w.value + " بوصة في السنتيمتر المربع؟";
        a = "<p><span class='formula'>A = L &times; W</span> (الصيغة)</p><p>المساحة = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = " + lCm + " &times; " + wCm + " = <p class='destacado'>المساحة = " + bestFmt(lCm * wCm, 3) + " سم<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "ما هو " + l.value + " &times; " + w.value + " بوصة في السنتيمتر؟";
        a = "<p>" + l.value + " &times; " + w.value + " بوصة = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> سنتيمتر</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
