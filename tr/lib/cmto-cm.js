function convert() {
    with (document.converter) {
        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lIn = sigFig(frac2dec(l.value) * 0.3937, 3);
        var wIn = sigFig(frac2dec(w.value) * 0.3937, 3);

        var rectOrsquare = (l.value == l.value) ? "kare" : "dikdörtgen";

        answer.innerHTML = l.value + " cm &times; " + w.value + " cm = " + lIn + " in &times; " + wIn + " in";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "Lütfen pozitif bir değer girin!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>Nasıl dönüştürülür</h2><p>Bu ölçüleri inç cinsinden santimetreye çevirmek için her bir değeri 0.3937 ile çarpın çünkü 1 inç = 0.3937 cm. Dolayısıyla,</p>";

        verb += "<p>" + l.value + " kez 0.3937 = <span class='destacado'>" + lIn + "</span></p>";

        verb += "<p>" + w.value + " kez 0.3937 = <span class='destacado'>" + wIn + "</span></p>";

        verb += "<p>Böylece,</p>";

        verb += l.value + " &times; " + w.value + " inç = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> santimetre"

        verbose.innerHTML = verb;

        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

        var FAQ = "<h2>Boyut hakkında SSS santimetre ile inç</h2>";

        var q = "Bir " + rectOrsquare + "ın alanı nedir, ölçüleri " + l.value + " &times; " + w.value + " santimetre?";
        var a = "<p><span class='formula'>Alan = uzunluk &times; genişlik</span> (formül)</p><p class='destacado'>Alan = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Bir " + rectOrsquare + "ın alanı nedir, ölçüleri " + l.value + " &times; " + w.value + " santimetre kare?";
        a = "<p><span class='formula'>A = U &times; G</span> (formül)</p><p>Alan = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = " + lIn + " &times; " + wIn + " = <p class='destacado'>Alan = " + bestFmt(lIn * wIn, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = l.value + " &times; " + w.value + " inç ne kadar santimetre?";
        a = "<p>" + l.value + " &times; " + w.value + " inç = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> santimetre</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
