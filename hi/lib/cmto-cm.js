function convert() {

	with (document.converter) {

		var lVal = sigFig(frac2dec(l.value), 3);
		var wVal = sigFig(frac2dec(w.value), 3);

		var lIn = sigFig(frac2dec(l.value) * 0.3937, 3);
		var wIn = sigFig(frac2dec(w.value) * 0.3937, 3);

		var rectOrsquare = (l.value == l.value) ? "वर्ग" : "आयत";

		answer.innerHTML = l.value + " सेमी &times; " + w.value + " सेमी = " + lIn + " इंच &times; " + wIn + " इंच";

		if (isNaN(frac2dec(l.value)) || isNaN(frac2dec(w.value))) {
			answer.innerHTML = "कृपया एक सकारात्मक मूल्य दर्ज करें!";
			verbose.innerHTML = "";
			return;
		}

		var verb = "<h2>कैसे परिवर्तित करें</h2><p>इन आयामों को इंच से सेमी में परिवर्तित करने के लिए आपको प्रत्येक मूल्य को 0.3937 से गुणा करना होगा क्योंकि 1 इंच = 0.3937 सेमी है। इस प्रकार,</p>";

		verb += "<p>" + l.value + " गुणा 0.3937 = <span class='destacado'>" + lIn + "</span></p>";

		verb += "<p>" + w.value + " गुणा 0.3937 = <span class='destacado'>" + wIn + "</span></p>";

		verb += "<p>इसलिए,</p>";

		verb += l.value + " &times; " + w.value + " इंच में = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> इंच में"

		verbose.innerHTML = verb;

		// FAQ सेक्शन
		var FAQ = "<div id='faqSection' itemtype='https://schema.org/FAQPage' itemscope=''>";

		var FAQ = "<h2>लम्बाई और चौड़ाई सेमी से इंच में FAQ</h2>";

		var q = l.value + " सेमी में " + w.value + " " + rectOrsquare + " का क्षेत्र क्या है?";
		var a = "<p><span class='formula'>क्षेत्र = लम्बाई &times; चौड़ाई</span> (सूत्र)</p><p class='destacado'>क्षेत्र = " + l.value + " &times; " + w.value + " = " + bestFmt(lVal * wVal, 3) + " सेमी<sup>2</sup>" + "</p>";
		FAQ += FAQItem(q, a);

		q = l.value + " सेमी में " + w.value + " " + rectOrsquare + " का क्षेत्र स्क्वायर इंच में क्या है?";
		a = "<p><span class='formula'>A = L &times; W</span> (सूत्र)</p><p>क्षेत्र = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = " + lIn + " &times; " + wIn + " = <p class='destacado'>क्षेत्र = " + bestFmt(lIn * wIn, 3) + " सेमी<sup>2</sup>" + "</p>";
		FAQ += FAQItem(q, a);

		q = l.value + " &times; " + w.value + " क्या है इंच में सेमी में?";
		a = "<p>" + l.value + " &times; " + w.value + " इंच = (" + l.value + " &times; 0.3937) &times; (" + w.value + " &times; 0.3937) = <span class='destacado'>" + lIn + " &times; " + wIn + "</span> सेमी</p>";
		FAQ += FAQItem(q, a);

		FAQ += "</div>";

		document.getElementById("faqSection").innerHTML = FAQ;

	}
}
