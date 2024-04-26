function convert() {
    with (document.converter) {
        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lIn = sigFig(frac2dec(l.value) * 0.3937, 3);
        var wIn = sigFig(frac2dec(w.value) * 0.3937, 3);

        var rectOrsquare = (l.value == l.value) ? "carré" : "rectangle";

        answer.innerHTML = l.value + " cm &times; " + w.value + " cm = " + lIn + " pouces &times; " + wIn + " pouces";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "Veuillez entrer une valeur positive !";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>Comment convertir</h2><p>Pour convertir ces dimensions de pouces en centimètres, multipliez simplement chaque valeur par 0,3937 car 1 pouce = 0,3937 cm. Ainsi,</p>";

        verb += "<p>" + l.value + " fois 0,3937 = <span class='destacado'>" + lIn + "</span></p>";

        verb += "<p>" + w.value + " fois 0,3937 = <span class='destacado'>" + wIn + "</span></p>";

        verb += "<p>Donc,</p>";

        verb += l.value + " &times; " + w.value + " en centimètres = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> en pouces";

        verbose.innerHTML = verb;

        // Section FAQ
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

        FAQ += "<h2>FAQ sur la longueur en centimètres par la largeur en pouces</h2>";

        var q = "Quelle est la superficie d'un " + rectOrsquare + " mesurant " + l.value + " &times; " + w.value + " centimètres en cm^2 ?";
        var a = "<p><span class='formule'>Superficie = longueur &times; largeur</span> (formule)</p><p class='destacado'>Superficie = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Quelle est la superficie d'un " + rectOrsquare + " mesurant " + l.value + " &times; " + w.value + " centimètres en pouces carrés ?";
        a = "<p><span class='formule'>A = L &times; l</span> (formule)</p><p>Superficie = (" + l.value + " &times; 0,3937) &times; (" + w.value + " &times; 0,3937) = " + lIn + " &times; " + wIn + " = <p class='destacado'>Superficie = " + bestFmt(lIn * wIn, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Qu'est-ce que " + l.value + " &times; " + w.value + " en pouces en cm ?";
        a = "<p>" + l.value + " &times; " + w.value + " pouces = (" + l.value + " &times; 0,3937) &times; (" + w.value + " &times; 0,3937) = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> centimètres</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
