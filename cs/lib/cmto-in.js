function convert() {
    with (document.converter) {
        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lCm = sigFig(frac2dec(l.value) * 2.54, 3);
        var wCm = sigFig(frac2dec(w.value) * 2.54, 3);

        var rectOrsquare = (l.value == l.value) ? "čtverec" : "obdélník";

        answer.innerHTML = l.value + " palců &times; " + w.value + " palců = " + lCm + " cm &times; " + wCm + " cm";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "Zadejte prosím kladnou hodnotu!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>Jak provést převod</h2><p>Pro převod těchto rozměrů z palců na centimetry stačí vynásobit každou hodnotu číslem 2,54, protože 1 palec = 2,54 cm. Takže,</p>";

        verb += "<p>" + l.value + " krát 2,54 = <span class='destacado'>" + lCm + "</span></p>";
        verb += "<p>" + w.value + " krát 2,54 = <span class='destacado'>" + wCm + "</span></p>";
        verb += "<p>Tedy,</p>";
        verb += l.value + " &times; " + w.value + " palců = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> v centimetrech";

        verbose.innerHTML = verb;

        // Sekce s častými dotazy (FAQ)
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";
        FAQ += "<h2>Časté dotazy o délce a šířce v palcích na centimetry</h2>";

        var q = "Jaká je plocha " + rectOrsquare + " o rozměrech " + l.value + " &times; " + w.value + " palců v čtverečních palcích?";
        var a = "<p><span class='formula'>Plocha = délka &times; šířka</span> (vzorec)</p><p class='destacado'>Plocha = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " palců<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Jaká je plocha " + rectOrsquare + " o rozměrech " + l.value + " &times; " + w.value + " palců v čtverečních centimetrech?";
        a = "<p><span class='formula'>A = D &times; Š</span> (vzorec)</p><p>Plocha = (" + l.value + " &times; 2,54) &times; (" + w.value + " &times; 2,54) = " + lCm + " &times; " + wCm + " = <p class='destacado'>Plocha = " + bestFmt(lCm * wCm, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Jaké jsou " + l.value + " &times; " + w.value + " palců v centimetrech?";
        a = "<p>" + l.value + " &times; " + w.value + " palců = (" + l.value + " &times; 2,54) &times; (" + w.value + " &times; 2,54) = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> centimetrů</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
