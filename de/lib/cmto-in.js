function convert() {
    with (document.converter) {
        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lCm = sigFig(frac2dec(l.value) * 2.54, 3);
        var wCm = sigFig(frac2dec(w.value) * 2.54, 3);

        var rectOrsquare = (l.value == l.value) ? "Quadrat" : "Rechteck";

        answer.innerHTML = l.value + " Zoll &times; " + w.value + " Zoll = " + lCm + " cm &times; " + wCm + " cm";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "Bitte geben Sie einen positiven Wert ein!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>Wie man umrechnet</h2><p>Um diese Abmessungen von Zoll in Zentimeter umzurechnen, multiplizieren Sie einfach jeden Wert mit 2,54, da 1 Zoll = 2,54 cm. Also,</p>";

        verb += "<p>" + l.value + " mal 2,54 = <span class='destacado'>" + lCm + "</span></p>";
        verb += "<p>" + w.value + " mal 2,54 = <span class='destacado'>" + wCm + "</span></p>";
        verb += "<p>Demnach ergibt sich,</p>";
        verb += l.value + " &times; " + w.value + " Zoll = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> Zentimeter";

        verbose.innerHTML = verb;

        // FAQ-Abschnitt
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

        FAQ += "<h2>FAQ zu Länge mal Breite in Zoll zu Zentimeter</h2>";

        var q = "Was ist die Fläche eines " + rectOrsquare + " mit den Maßen " + l.value + " &times; " + w.value + " Zoll in Quadratzoll?";
        var a = "<p><span class='formula'>Fläche = Länge &times; Breite</span> (Formel)</p><p class='destacado'>Fläche = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " Quadratzoll" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Was ist die Fläche eines " + rectOrsquare + " mit den Maßen " + l.value + " &times; " + w.value + " Zoll in Quadratzentimetern?";
        a = "<p><span class='formula'>A = L &times; B</span> (Formel)</p><p>Fläche = (" + l.value + " &times; 2,54) &times; (" + w.value + " &times; 2,54) = " + lCm + " &times; " + wCm + " = <p class='destacado'>Fläche = " + bestFmt(lCm * wCm, 3) + " Quadratzentimeter" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Was ist " + l.value + " &times; " + w.value + " in cm?";
        a = "<p>" + l.value + " &times; " + w.value + " Zoll = (" + l.value + " &times; 2,54) &times; (" + w.value + " &times; 2,54) = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> Zentimeter</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
