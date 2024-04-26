function convert() {
    with (document.converter) {
        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lIn = sigFig(frac2dec(l.value) * 0.3937, 3);
        var wIn = sigFig(frac2dec(w.value) * 0.3937, 3);

        var rectOrsquare = (l.value == l.value) ? "cuadrado" : "rectángulo";

        answer.innerHTML = l.value + " cm &times; " + w.value + " cm = " + lIn + " in &times; " + wIn + " in";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "¡Por favor, ingrese un valor positivo!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>Cómo convertir</h2><p>Para convertir estas dimensiones de pulgadas a cm, simplemente multiplique cada valor por 0.3937 porque 1 pulgada = 0.3937 cm. Por lo tanto,</p>";

        verb += "<p>" + l.value + " multiplicado por 0.3937 = <span class='destacado'>" + lIn + "</span></p>";

        verb += "<p>" + w.value + " multiplicado por 0.3937 = <span class='destacado'>" + wIn + "</span></p>";

        verb += "<p>Así que,</p>";

        verb += l.value + " &times; " + w.value + " en centímetros = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> en pulgadas"

        verbose.innerHTML = verb;

        // Sección de preguntas frecuentes (FAQ)
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

        FAQ += "<h2>Preguntas frecuentes sobre longitud por ancho, de centímetros a pulgadas</h2>";

        var q = "¿Cuál es el área de un " + rectOrsquare + " que mide " + l.value + " &times; " + w.value + " centímetros en cm^2?";
        var a = "<p><span class='formula'>Área = longitud &times; ancho</span> (fórmula)</p><p class='destacado'>Área = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "¿Cuál es el área de un " + rectOrsquare + " que mide " + l.value + " &times; " + w.value + " centímetros en pulgadas cuadradas?";
        a = "<p><span class='formula'>A = L &times; A</span> (fórmula)</p><p>Área = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = " + lIn + " &times; " + wIn + " = <p class='destacado'>Área = " + bestFmt(lIn * wIn, 3) + " cm<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "¿Cuál es " + l.value + " &times; " + w.value + " en pulgadas en cm?";
        a = "<p>" + l.value + " &times; " + w.value + " pulgadas = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> centímetros</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
