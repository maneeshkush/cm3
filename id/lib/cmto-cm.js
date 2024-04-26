function convert() {

    with (document.converter) {

        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lIn = sigFig(frac2dec(l.value) * 0.3937, 3);
        var wIn = sigFig(frac2dec(w.value) * 0.3937, 3);

        var rectOrsquare = (l.value == l.value) ? "persegi" : "persegi panjang";

        answer.innerHTML = l.value + " cm &times; " + w.value + " cm = " + lIn + " in &times; " + wIn + " in";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "Harap masukkan nilai positif!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>Cara mengonversi</h2><p>Untuk mengonversi dimensi ini dari inci ke cm, cukup kalikan setiap nilai dengan 0.3937 karena 1 inci = 0.3937 cm. Dengan demikian,</p>";

        verb += "<p>" + l.value + " kali 0.3937 = <span class='destacado'>" + lIn + "</span></p>";

        verb += "<p>" + w.value + " kali 0.3937 = <span class='destacado'>" + wIn + "</span></p>";

        verb += "<p>Jadi,</p>";

        verb += l.value + " &times; " + w.value + " dalam centimeter = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> dalam inci"

        verbose.innerHTML = verb;

        // Bagian FAQ
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

        FAQ += "<h2>Pertanyaan Umum tentang panjang kali lebar dalam centimeter ke inci</h2>";

        var q = "Berapa luas " + rectOrsquare + " dengan ukuran " + l.value + " &times; " + w.value + " centimeter dalam cm^2?";
        var a = "<p><span class='formula'>Luas = panjang &times; lebar</span> (rumus)</p><p class='destacado'>Luas = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Berapa luas " + rectOrsquare + " dengan ukuran " + l.value + " &times; " + w.value + " centimeter dalam inci persegi?";
        a = "<p><span class='formula'>A = P &times; L</span> (rumus)</p><p>Luas = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = " + lIn + " &times; " + wIn + " = <p class='destacado'>Luas = " + bestFmt(lIn * wIn, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Berapa " + l.value + " &times; " + w.value + " dalam inci ke dalam cm?";
        a = "<p>" + l.value + " &times; " + w.value + " inci = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> centimeter</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;

    }
}
