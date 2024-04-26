function convert() {
    with (document.converter) {
        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lCm = sigFig(frac2dec(l.value) * 2.54, 3);
        var wCm = sigFig(frac2dec(w.value) * 2.54, 3);

        var rectOrsquare = (l.value == l.value) ? "quadrato" : "rettangolo";

        answer.innerHTML = l.value + " pollici &times; " + w.value + " pollici = " + lCm + " cm &times; " + wCm + " cm";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "Inserisci un valore positivo!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>Come convertire</h2><p>Per convertire queste dimensioni da pollici a cm, moltiplica ogni valore per 2,54 poiché 1 pollice = 2,54 cm. Così,</p>";

        verb += "<p>" + l.value + " per 2,54 = <span class='destacado'>" + lCm + "</span></p>";
        verb += "<p>" + w.value + " per 2,54 = <span class='destacado'>" + wCm + "</span></p>";
        verb += "<p>Quindi,</p>";
        verb += l.value + " &times; " + w.value + " pollici = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> centimetri";

        verbose.innerHTML = verb;

        // Sezione FAQ
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";
        FAQ += "<h2>FAQ su lunghezza per larghezza pollici a centimetri</h2>";

        var q = "Qual è l'area di un " + rectOrsquare + " con dimensioni " + l.value + " &times; " + w.value + " pollici in pollici quadrati?";
        var a = "<p><span class='formula'>Area = lunghezza &times; larghezza</span> (formula)</p><p class='destacado'>Area = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " in<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Qual è l'area di un " + rectOrsquare + " con dimensioni " + l.value + " &times; " + w.value + " pollici in centimetri quadrati?";
        a = "<p><span class='formula'>A = L &times; W</span> (formula)</p><p>Area = (" + l.value + " &times; 2,54) &times; (" + w.value + " &times; 2,54) = " + lCm + " &times; " + wCm + " = <p class='destacado'>Area = " + bestFmt(lCm * wCm, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Quanto fa " + l.value + " &times; " + w.value + " in cm?";
        a = "<p>" + l.value + " &times; " + w.value + " pollici = (" + l.value + " &times; 2,54) &times; (" + w.value + " &times; 2,54) = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> centimetri</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
