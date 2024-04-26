function convert() {
    with (document.converter) {
        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lIn = sigFig(frac2dec(l.value) * 0.3937, 3);
        var wIn = sigFig(frac2dec(w.value) * 0.3937, 3);

        var rectOrsquare = (l.value == l.value) ? "квадрат" : "прямоугольник";

        answer.innerHTML = l.value + " см &times; " + w.value + " см = " + lIn + " дюймов &times; " + wIn + " дюймов";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "Пожалуйста, введите положительное значение!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>Как конвертировать</h2><p>Для преобразования этих размеров из дюймов в сантиметры просто умножьте каждое значение на 0.3937, так как 1 дюйм = 0.3937 см. Таким образом,</p>";

        verb += "<p>" + l.value + " умножить на 0.3937 = <span class='destacado'>" + lIn + "</span></p>";

        verb += "<p>" + w.value + " умножить на 0.3937 = <span class='destacado'>" + wIn + "</span></p>";

        verb += "<p>Итак,</p>";

        verb += l.value + " &times; " + w.value + " в сантиметрах = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> в дюймах"

        verbose.innerHTML = verb;

        // FAQ section
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

        var FAQ = "<h2>FAQ по длине и ширине в сантиметрах в дюймах</h2>";

        var q = "Какая площадь " + rectOrsquare + " размером " + l.value + " &times; " + w.value + " сантиметров в см^2?";
        var a = "<p><span class='formula'>Площадь = длина &times; ширина</span> (формула)</p><p class='destacado'>Площадь = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " см<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Какая площадь " + rectOrsquare + " размером " + l.value + " &times; " + w.value + " сантиметров в квадратных дюймах?";
        a = "<p><span class='formula'>A = L &times; W</span> (формула)</p><p>Площадь = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = " + lIn + " &times; " + wIn + " = <p class='destacado'>Площадь = " + bestFmt(lIn * wIn, 3) + " см<sup>2</sup>" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Что такое " + l.value + " &times; " + w.value + " в дюймах в см?";
        a = "<p>" + l.value + " &times; " + w.value + " дюймов = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> сантиметров</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
