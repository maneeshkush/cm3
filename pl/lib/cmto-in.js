function convert() {
    with (document.converter) {
        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lCm = sigFig(frac2dec(l.value) * 2.54, 3);
        var wCm = sigFig(frac2dec(w.value) * 2.54, 3);

        var rectOrsquare = (l.value == l.value) ? "kwadrat" : "prostokąt";

        answer.innerHTML = l.value + " cal &times; " + w.value + " cal = " + lCm + " cm &times; " + wCm + " cm";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "Proszę podać dodatnią wartość!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>Jak przeliczyć</h2><p>Aby przeliczyć te wymiary z cali na centymetry, po prostu pomnóż każdą wartość przez 2,54, ponieważ 1 cal = 2,54 cm. Tak więc,</p>";

        verb += "<p>" + l.value + " razy 2,54 = <span class='destacado'>" + lCm + "</span></p>";
        verb += "<p>" + w.value + " razy 2,54 = <span class='destacado'>" + wCm + "</span></p>";
        verb += "<p>Stąd,</p>";
        verb += l.value + " &times; " + w.value + " cali = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> centymetrów"

        verbose.innerHTML = verb;

        // Sekcja FAQ
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";
        FAQ += "<h2>FAQ dotyczące długości i szerokości cali na centymetry</h2>";

        var q = "Jaka jest powierzchnia " + rectOrsquare + " o wymiarach " + l.value + " &times; " + w.value + " cali w calach kwadratowych?";
        var a = "<p><span class='formula'>Powierzchnia = długość &times; szerokość</span> (wzór)</p><p class='destacado'>Powierzchnia = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " cal<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Jaka jest powierzchnia " + rectOrsquare + " o wymiarach " + l.value + " &times; " + w.value + " cali w centymetrach kwadratowych?";
        a = "<p><span class='formula'>A = L &times; W</span> (wzór)</p><p>Powierzchnia = (" + l.value + " &times; 2,54) &times; (" + w.value + " &times; 2,54) = " + lCm + " &times; " + wCm + " = <p class='destacado'>Powierzchnia = " + bestFmt(lCm * wCm, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Ile to jest " + l.value + " &times; " + w.value + " cali w centymetrach?";
        a = "<p>" + l.value + " &times; " + w.value + " cali = (" + l.value + " &times; 2,54) &times; (" + w.value + " &times; 2,54) = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> centymetrów</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
