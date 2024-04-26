function convert() {
    with (document.converter) {
        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lCm = sigFig(frac2dec(l.value) * 2.54, 3);
        var wCm = sigFig(frac2dec(w.value) * 2.54, 3);

        var rectAtauKotak = (l.value == l.value) ? "kotak" : "persegi panjang";

        answer.innerHTML = l.value + " in &times; " + w.value + " in = " + lCm + " cm &times; " + wCm + " cm";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "Silakan masukkan nilai positif!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>Cara Mengonversi</h2><p>Untuk mengonversi dimensi ini dari inci ke cm, cukup kalikan setiap nilai dengan 2.54 karena 1 inchi = 2.54 cm. Jadi,</p>";

        verb += "<p>" + l.value + " kali 2.54 = <span class='destacado'>" + lCm + "</span></p>";
        verb += "<p>" + w.value + " kali 2.54 = <span class='destacado'>" + wCm + "</span></p>";
        verb += "<p>Dengan demikian,</p>";
        verb += l.value + " &times; " + w.value + " inchi = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> dalam sentimeter"

        verbose.innerHTML = verb;

        // Bagian FAQ
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

        var FAQ = "<h2>FAQ tentang panjang dengan lebar dalam inci ke sentimeter</h2>";

        var q = "Apa luas dari " + rectAtauKotak + " dengan ukuran " + l.value + " &times; " + w.value + " inci dalam inci persegi?";
        var a = "<p><span class='formula'>Luas = panjang &times; lebar</span> (rumus)</p><p class='destacado'>Luas = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " inci<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Apa luas dari " + rectAtauKotak + " dengan ukuran " + l.value + " &times; " + w.value + " inci dalam sentimeter persegi?";
        a = "<p><span class='formula'>A = L &times; W</span> (rumus)</p><p>Luas = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = " + lCm + " &times; " + wCm + " = <p class='destacado'>Luas = " + bestFmt(lCm * wCm, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Berapa " + l.value + " &times; " + w.value + " dalam cm?";
        a = "<p>" + l.value + " &times; " + w.value + " inci = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> sentimeter</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
