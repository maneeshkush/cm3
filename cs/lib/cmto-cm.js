function convert() {
    with (document.converter) {
        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lIn = sigFig(frac2dec(l.value) * 0.3937, 3);
        var wIn = sigFig(frac2dec(w.value) * 0.3937, 3);

        var rectOrsquare = (l.value == l.value) ? "čtverec" : "obdélník";

        answer.innerHTML = l.value + " cm &times; " + w.value + " cm = " + lIn + " in &times; " + wIn + " in";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "Zadejte prosím kladnou hodnotu!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>Jak převést</h2><p>Pro převod těchto rozměrů z centimetrů na palce jednoduše vynásobte každou hodnotu číslem 0,3937, protože 1 cm = 0,3937 in. Takže,</p>";

        verb += "<p>" + l.value + " krát 0,3937 = <span class='destacado'>" + lIn + "</span></p>";

        verb += "<p>" + w.value + " krát 0,3937 = <span class='destacado'>" + wIn + "</span></p>";

        verb += "<p>Takže,</p>";

        verb += l.value + " &times; " + w.value + " v centimetrech = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> v palcích"

        verbose.innerHTML = verb;

        // FAQ section
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

        FAQ += "<h2>Časté otázky k centimetrům od šířky a délky v palcích</h2>";

        var q = "Jaká je plocha " + rectOrsquare + " o rozměrech " + l.value + " &times; " + w.value + " centimetrů v cm^2?";
        var a = "<p><span class='formula'>Plocha = délka &times; šířka</span> (vzorec)</p><p class='destacado'>Plocha = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Jaká je plocha " + rectOrsquare + " o rozměrech " + l.value + " &times; " + w.value + " centimetrů v čtverečních palcích?";
        a = "<p><span class='formula'>A = D &times; Š</span> (vzorec)</p><p>Plocha = (" + l.value + " &times; 0,3937) &times; (" + w.value + " &times; 0,3937) = " + lIn + " &times; " + wIn + " = <p class='destacado'>Plocha = " + bestFmt(lIn * wIn, 3) + " palců<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Kolik je " + l.value + " &times; " + w.value + " v palcích v cm?";
        a = "<p>" + l.value + " &times; " + w.value + " palců = (" + l.value + " &times; 0,3937) &times; (" + w.value + " &times; 0,3937) = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> centimetrů</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
