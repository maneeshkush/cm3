function convert(){

    with (document.converter){

        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lCm = sigFig(frac2dec(l.value) * 2.54, 3);
        var wCm = sigFig(frac2dec(w.value) * 2.54, 3);

        var rectOrsquare = (l.value == l.value)? "kare" : "dikdörtgen";

        answer.innerHTML = l.value + " in &times; " + w.value + " in = " + lCm + " cm &times; " + wCm + " cm";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))){
            answer.innerHTML = "Lütfen pozitif bir değer girin!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>Nasıl dönüştürülür</h2><p>Bu boyutları inç'ten cm'ye çevirmek için her değeri 2.54 ile çarpın çünkü 1 inç = 2.54 cm. Yani,</p>";

        verb += "<p>" + l.value + " kez 2.54 = <span class='destacado'>" + lCm + "</span></p>";
        verb += "<p>" + w.value + " kez 2.54 = <span class='destacado'>" + wCm + "</span></p>";
        verb += "<p>Bu nedenle,</p>";
        verb += l.value + " &times; " + w.value + " inç = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> santimetre"

        verbose.innerHTML = verb;

        // FAQ bölümü
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";
        FAQ += "<h2>Uzunluk genişlik inçten santimetreye SSS</h2>";

        var q = "Bir " + rectOrsquare + " alanı kaç inç &times; " + w.value + " inç?";
        var a = "<p><span class='formula'>Alan = uzunluk &times; genişlik</span> (formül)</p><p class='destacado'>Alan = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " in<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Bir " + rectOrsquare + " alanı kaç santimetre kare?";
        a = "<p><span class='formula'>A = U &times; G</span> (formül)</p><p>Alan = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = " + lCm + " &times; " + wCm + " = <p class='destacado'>Alan = " + bestFmt(lCm * wCm, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = l.value + " &times; " + w.value + " inç kaç cm?";
        a = "<p>" + l.value + " &times; " + w.value + " inç = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> santimetre</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;

    }
}
