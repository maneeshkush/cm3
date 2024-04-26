function convert() {
    with (document.converter) {

        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lIn = sigFig(frac2dec(l.value) * 0.3937, 3);
        var wIn = sigFig(frac2dec(w.value) * 0.3937, 3);

        var rectOrsquare = (l.value == l.value) ? "quadrato" : "rettangolo";

        answer.innerHTML = l.value + " cm &times; " + w.value + " cm = " + lIn + " in &times; " + wIn + " in";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "Inserire un valore positivo!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>Come convertire</h2><p>Per convertire queste dimensioni da pollici a cm, moltiplicare ciascun valore per 0,3937 perché 1 in = 0,3937 cm. Quindi,</p>";

        verb += "<p>" + l.value + " per 0,3937 = <span class='destacado'>" + lIn + "</span></p>";

        verb += "<p>" + w.value + " per 0,3937 = <span class='destacado'>" + wIn + "</span></p>";

        verb += "<p>Quindi,</p>";

        verb += l.value + " &times; " + w.value + " in centimetri = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> in pollici"

        verbose.innerHTML = verb;

        // FAQ section
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

        FAQ += "<h2>FAQ su lunghezza per larghezza centimetri a pollici</h2>";

        var q = "Qual è l'area di un " + rectOrsquare + " di dimensioni " + l.value + " &times; " + w.value + " centimetri in cm^2?";
        var a = "<p><span class='formula'>Area = lunghezza &times; larghezza</span> (formula)</p><p class='destacado'>Area = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Qual è l'area di un " + rectOrsquare + " di dimensioni " + l.value + " &times; " + w.value + " centimetri in pollici quadrati?";
        a = "<p><span class='formula'>A = L &times; W</span> (formula)</p><p>Area = (" + l.value + " &times; 0,3937) &times; (" + w.value + " &times; 0,3937) = " + lIn + " &times; " + wIn + " = <p class='destacado'>Area = " + bestFmt(lIn * wIn, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Quanto è " + l.value + " &times; " + w.value + " in cm?";
        a = "<p>" + l.value + " &times; " + w.value + " pollici = (" + l.value + " &times; 0,3937) &times; (" + w.value + " &times; 0,3937) = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> centimetri</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
