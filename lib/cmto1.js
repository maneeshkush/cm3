function changeLanguage(lang) {
            // Get the current URL and remove any existing language codes
            var currentUrl = window.location.href;
            var newUrl = currentUrl.replace(/\/[a-z]{2}-[a-zA-Z]{2}\//i, '/').replace(/\/[a-z]{2}\//i, '/');

            // Add the new language code to the URL
            newUrl = newUrl.replace(/(https?:\/\/[^\/]+)(\/.*)/, '$1/' + lang + '$2');

            // Redirect to the new URL
            window.location.href = newUrl;
        }
   
        // Language menu
        var languageMenu = document.getElementById('language-menu1');
        var selectElement = document.createElement('select');
        selectElement.id = 'language-select';
        selectElement.onchange = function () {
            changeLanguage(this.value);
        };

        // Language options
        var languages = [
            { value: 'pl', text: 'Select Language:' },
            { value: 'ar', text: 'Arabic - العربية' },
            { value: 'ru', text: 'Russian - Русский' },
            { value: 'es', text: 'Spanish - Español' },
            { value: 'de', text: 'German - Deutsch' },
            { value: 'fr', text: 'French - Français' },
            { value: 'ja', text: 'Japanese - 日本語' },
            { value: 'pt', text: 'Portuguese - Português' },
            { value: 'pl', text: 'Polish - Polski' },
            { value: 'tr', text: 'Turkish - Türkçe' },
            { value: 'it', text: 'Italian - Italiano' },
            { value: 'uk', text: 'Ukrainian - Українська' },
            { value: 'hi', text: 'Hindi - हिन्दी' },
            { value: 'id', text: 'Indonesian - Bahasa Indonesia' },
            { value: 'cs', text: 'Czech - Čeština' },
            { value: 'zh-TW', text: 'Chinese (Traditional) - 繁體中文' },
            { value: 'zh-CN', text: 'Chinese (Simplified) - 简体中文' }
        ];

        // Populate the select element with options
        languages.forEach(function (language) {
            var optionElement = document.createElement('option');
            optionElement.value = language.value;
            optionElement.text = language.text;
            selectElement.appendChild(optionElement);
        });

        // Append the select element to the language menu
        languageMenu.appendChild(selectElement);
		
		
		// Language menu
        var languageMenu = document.getElementById('language-menu');
        var selectElement = document.createElement('select');
        selectElement.id = 'language-select';
        selectElement.onchange = function () {
            changeLanguage(this.value);
        };

        // Language options
        var languages = [
            { value: 'pl', text: 'Select Language:' },
            { value: 'ar', text: 'Arabic - العربية' },
            { value: 'ru', text: 'Russian - Русский' },
            { value: 'es', text: 'Spanish - Español' },
            { value: 'de', text: 'German - Deutsch' },
            { value: 'fr', text: 'French - Français' },
            { value: 'ja', text: 'Japanese - 日本語' },
            { value: 'pt', text: 'Portuguese - Português' },
            { value: 'pl', text: 'Polish - Polski' },
            { value: 'tr', text: 'Turkish - Türkçe' },
            { value: 'it', text: 'Italian - Italiano' },
            { value: 'uk', text: 'Ukrainian - Українська' },
            { value: 'hi', text: 'Hindi - हिन्दी' },
            { value: 'id', text: 'Indonesian - Bahasa Indonesia' },
            { value: 'cs', text: 'Czech - Čeština' },
            { value: 'zh-TW', text: 'Chinese (Traditional) - 繁體中文' },
            { value: 'zh-CN', text: 'Chinese (Simplified) - 简体中文' }
        ];

        // Populate the select element with options
        languages.forEach(function (language) {
            var optionElement = document.createElement('option');
            optionElement.value = language.value;
            optionElement.text = language.text;
            selectElement.appendChild(optionElement);
        });

        // Append the select element to the language menu
        languageMenu.appendChild(selectElement);