function convert() {
    with (document.converter) {

        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lIn = sigFig(frac2dec(l.value) * 0.3937, 3);
        var wIn = sigFig(frac2dec(w.value) * 0.3937, 3);

        var rectOrsquare = (l.value == w.value) ? "Quadrat" : "Rechteck";

        answer.innerHTML = l.value + " cm &times; " + w.value + " cm = " + lIn + " Zoll &times; " + wIn + " Zoll";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "Bitte geben Sie einen positiven Wert ein!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>Wie man umrechnet</h2><p>Um diese Maße von Zoll in Zentimeter umzurechnen, multiplizieren Sie einfach jeden Wert mit 0,3937, da 1 Zoll = 0,3937 cm. Also,</p>";

        verb += "<p>" + l.value + " mal 0,3937 = <span class='destacado'>" + lIn + "</span></p>";

        verb += "<p>" + w.value + " mal 0,3937 = <span class='destacado'>" + wIn + "</span></p>";

        verb += "<p>Also,</p>";

        verb += l.value + " &times; " + w.value + " in Zentimetern = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> in Zoll";

        verbose.innerHTML = verb;

        // FAQ-Abschnitt
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

        var FAQ = "<h2>FAQ zu Länge mal Breite in Zentimetern zu Zoll</h2>";

        var q = "Was ist die Fläche eines " + rectOrsquare + " mit den Maßen " + l.value + " &times; " + w.value + " Zentimetern in cm^2?";
        var a = "<p><span class='formel'>Fläche = Länge &times; Breite</span> (Formel)</p><p class='destacado'>Fläche = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Was ist die Fläche eines " + rectOrsquare + " mit den Maßen " + l.value + " &times; " + w.value + " Zentimetern in Quadratzoll?";
        a = "<p><span class='formel'>A = L &times; B</span> (Formel)</p><p>Fläche = (" + l.value + " &times; 0,3937) &times; (" + w.value + " &times; 0,3937) = " + lIn + " &times; " + wIn + " = <p class='destacado'>Fläche = " + bestFmt(lIn * wIn, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Was ist " + l.value + " &times; " + w.value + " in Zoll in cm?";
        a = "<p>" + l.value + " &times; " + w.value + " Zoll = (" + l.value + " &times; 0,3937) &times; (" + w.value + " &times; 0,3937) = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> Zentimeter</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
