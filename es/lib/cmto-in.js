function convert() {

	with (document.converter) {

		var lVal = sigFig(frac2dec(l.value), 3);
		var wVal = sigFig(frac2dec(w.value), 3);

		var lCm = sigFig(frac2dec(l.value) * 2.54, 3);
		var wCm = sigFig(frac2dec(w.value) * 2.54, 3);

		var rectOrsquare = (l.value == l.value) ? "cuadrado" : "rectángulo";

		answer.innerHTML = l.value + " pulgadas &times; " + w.value + " pulgadas = " + lCm + " cm &times; " + wCm + " cm";

		if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
			answer.innerHTML = "¡Por favor, ingrese un valor positivo!";
			verbose.innerHTML = "";
			return;
		}

		var verb = "<h2>Cómo convertir</h2><p>Para convertir estas dimensiones de pulgadas a centímetros, simplemente multiplique cada valor por 2.54 porque 1 pulgada = 2.54 cm. Así que,</p>";

		verb += "<p>" + l.value + " multiplicado por 2.54 = <span class='destacado'>" + lCm + "</span></p>";
		verb += "<p>" + w.value + " multiplicado por 2.54 = <span class='destacado'>" + wCm + "</span></p>";
		verb += "<p>Así,</p>";
		verb += l.value + " &times; " + w.value + " pulgadas = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> centímetros"

		verbose.innerHTML = verb;

		// Sección de preguntas frecuentes
		var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

		FAQ += "<h2>Preguntas frecuentes sobre longitud por ancho en pulgadas a centímetros</h2>";

		var q = "¿Cuál es el área de un " + rectOrsquare + " que mide " + l.value + " &times; " + w.value + " pulgadas en pulgadas cuadradas?";
		var a = "<p><span class='formula'>Área = longitud &times; ancho</span> (fórmula)</p><p class='destacado'>Área = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " pulgadas<sup>2</sup>" + "</p>";
		FAQ += FAQItem(q, a);

		q = "¿Cuál es el área de un " + rectOrsquare + " que mide " + l.value + " &times; " + w.value + " pulgadas en centímetros cuadrados?";
		a = "<p><span class='formula'>A = L &times; W</span> (fórmula)</p><p>Área = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = " + lCm + " &times; " + wCm + " = <p class='destacado'>Área = " + bestFmt(lCm * wCm, 3) + " cm<sup>2</sup>" + "</p>";
		FAQ += FAQItem(q, a);

		q = "¿Cuánto es " + l.value + " &times; " + w.value + " en centímetros?";
		a = "<p>" + l.value + " &times; " + w.value + " pulgadas = (" + l.value + " &times; 2.54) &times; (" + w.value + " &times; 2.54) = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> centímetros</p>";
		FAQ += FAQItem(q, a);

		FAQ += "</div>";

		document.getElementById("faqSection").innerHTML = FAQ;

	}
}
