function changeLanguage(lang) {
            // Get the current URL and remove the existing language code
            var currentUrl = window.location.href;
            var currentLangCode = currentUrl.match(/\/([a-z]{2})\//i);
            
            // If there is a language code in the URL, replace it with the new language code
            if (currentLangCode) {
                // Replace all language codes in the URL
                var newUrl = currentUrl.replace(/\/([a-z]{2})\//gi, '/' + lang + '/');
            } else {
                // If there is no language code, add it to the URL
                var newUrl = currentUrl.replace(/(https?:\/\/[^\/]+)(\/.*)/, '$1/' + lang + '$2');
            }

            // Redirect to the new URL
            window.location.href = newUrl;
        }
		
		// Language menu
        var languageMenu = document.getElementById('language-menu');
        var selectElement = document.createElement('select');
        selectElement.id = 'language-select';
        selectElement.onchange = function () {
            changeLanguage(this.value);
        };

        // Language options
        var languages = [
            { value: 'pl', text: 'Polish' },
            { value: 'ar', text: 'Arabic' },
            { value: 'ru', text: 'Russian' },
            { value: 'es', text: 'Spanish' },
            { value: 'de', text: 'German' },
            { value: 'fr', text: 'French' },
            { value: 'ja', text: 'Japanese' },
            { value: 'pt', text: 'Portuguese' },
            { value: 'tr', text: 'Turkish' },
            { value: 'it', text: 'Italian' },
            { value: 'uk', text: 'Ukrainian' },
            { value: 'hi', text: 'Hindi' },
            { value: 'id', text: 'Indonesian' },
            { value: 'cs', text: 'Czech' },
            { value: 'zh-TW', text: 'Chinese (Traditional)' },
            { value: 'zh-CN', text: 'Chinese (Simplified)' },
            { value: 'x-default', text: 'Default' }
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