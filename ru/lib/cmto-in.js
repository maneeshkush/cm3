function convert() {
    with (document.converter) {

        var lVal = sigFig(frac2dec(l.value), 3);
        var wVal = sigFig(frac2dec(w.value), 3);

        var lCm = sigFig(frac2dec(l.value) * 2.54, 3);
        var wCm = sigFig(frac2dec(w.value) * 2.54, 3);

        var rectOrsquare = (l.value == l.value) ? "квадрат" : "прямоугольник";

        answer.innerHTML = l.value + " дюймов &times; " + w.value + " дюймов = " + lCm + " см &times; " + wCm + " см";

        if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
            answer.innerHTML = "Пожалуйста, введите положительное значение!";
            verbose.innerHTML = "";
            return;
        }

        var verb = "<h2>Как конвертировать</h2><p>Для преобразования этих размеров из дюймов в сантиметры просто умножьте каждое значение на 2,54, потому что 1 дюйм = 2,54 см. Таким образом,</p>";

        verb += "<p>" + l.value + " умножить на 2,54 = <span class='destacado'>" + lCm + "</span></p>";
        verb += "<p>" + w.value + " умножить на 2,54 = <span class='destacado'>" + wCm + "</span></p>";
        verb += "<p>Следовательно,</p>";
        verb += l.value + " &times; " + w.value + " дюймов = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> сантиметров"

        verbose.innerHTML = verb;

        // FAQ section
        var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

        var FAQ = "<h2>Часто задаваемые вопросы о длине и ширине в дюймах в сантиметры</h2>";

        var q = "Какова площадь " + rectOrsquare + " размером " + l.value + " &times; " + w.value + " дюймов в квадратных дюймах?";
        var a = "<p><span class='formula'>Площадь = длина &times; ширина</span> (формула)</p><p class='destacado'>Площадь = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " кв. дюймов" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Какова площадь " + rectOrsquare + " размером " + l.value + " &times; " + w.value + " дюймов в квадратных сантиметрах?";
        a = "<p><span class='formula'>Площадь = Длина &times; Ширина</span> (формула)</p><p>Площадь = (" + l.value + " &times; 2,54) &times; (" + w.value + " &times; 2,54) = " + lCm + " &times; " + wCm + " = <p class='destacado'>Площадь = " + bestFmt(lCm * wCm, 3) + " кв. см" + "</p>";
        FAQ += FAQItem(q, a);

        q = "Что такое " + l.value + " &times; " + w.value + " в см?";
        a = "<p>" + l.value + " &times; " + w.value + " дюймов = (" + l.value + " &times; 2,54) &times; (" + w.value + " &times; 2,54) = <span class='destacado'>" + lCm + " &times; " + wCm + "</span> сантиметров</p>";
        FAQ += FAQItem(q, a);

        FAQ += "</div>";

        document.getElementById("faqSection").innerHTML = FAQ;
    }
}
