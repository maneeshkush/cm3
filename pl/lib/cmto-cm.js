function convert() {
    with (document.converter) {

        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lIn = sigFig(frac2dec(l.value) * 0.3937, 3);
        var wIn = sigFig(frac2dec(w.value) * 0.3937, 3);

        var rectOrsquare = (l.value == l.value) ? "kwadrat" : "prostokąt";

        answer.innerHTML = l.value + " cm &times; " + w.value + " cm = " + lIn + " cal &times; " + wIn + " cal";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "Proszę podać wartość dodatnią!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>Jak przeliczyć</h2><p>Aby przeliczyć te wymiary z cali na cm, po prostu pomnóż każdą wartość przez 0.3937, ponieważ 1 cal = 0.3937 cm. Tak więc,</p>";

        verb += "<p>" + l.value + " razy 0.3937 = <span class='destacado'>" + lIn + "</span></p>";

        verb += "<p>" + w.value + " razy 0.3937 = <span class='destacado'>" + wIn + "</span></p>";

        verb += "<p>Więc,</p>";

        verb += l.value + " &times; " + w.value + " w centymetrach = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> w calach"

        verbose.innerHTML = verb;

        // Sekcja FAQ
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

        var FAQ = "<h2>FAQ na temat długości i szerokości w centymetrach na cale</h2>";

        var q = "Jaka jest powierzchnia " + rectOrsquare + " o wymiarach " + l.value + " &times; " + w.value + " centymetrów w cm^2?";
        var a = "<p><span class='formula'>Powierzchnia = długość &times; szerokość</span> (wzór)</p><p class='destacado'>Powierzchnia = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Jaka jest powierzchnia " + rectOrsquare + " o wymiarach " + l.value + " &times; " + w.value + " centymetrów w calach kwadratowych?";
        a = "<p><span class='formula'>A = D &times; S</span> (wzór)</p><p>Powierzchnia = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = " + lIn + " &times; " + wIn + " = <p class='destacado'>Powierzchnia = " + bestFmt(lIn * wIn, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Ile to jest " + l.value + " &times; " + w.value + " w cm?";
        a = "<p>" + l.value + " &times; " + w.value + " cali = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> centymetrów</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
