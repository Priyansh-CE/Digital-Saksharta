/* =========================================
   Digital Saksharta Language System
========================================= */

const languageSelect = document.getElementById("languageSelect");

const dictionary = {

en:{

Home:"Home",
About:"About",
Modules:"Modules",
"Cyber Safety":"Cyber Safety",
Quiz:"Quiz",
Contact:"Contact",

"Start Learning":"Start Learning",
"Take Quiz":"Take Quiz",

"Digital Literacy Quiz":"Digital Literacy Quiz",

"Interactive Quiz":"Interactive Quiz",

"Students Educated":"Students Educated",

"Learning Modules":"Learning Modules",

"Quiz Questions":"Quiz Questions",

"Digital Awareness":"Digital Awareness"

},

hi:{

Home:"होम",
About:"हमारे बारे में",
Modules:"मॉड्यूल",
"Cyber Safety":"साइबर सुरक्षा",
Quiz:"क्विज़",
Contact:"संपर्क",

"Start Learning":"सीखना शुरू करें",
"Take Quiz":"क्विज़ शुरू करें",

"Digital Literacy Quiz":"डिजिटल साक्षरता क्विज़",

"Interactive Quiz":"इंटरैक्टिव क्विज़",

"Students Educated":"प्रशिक्षित विद्यार्थी",

"Learning Modules":"अध्ययन मॉड्यूल",

"Quiz Questions":"क्विज़ प्रश्न",

"Digital Awareness":"डिजिटल जागरूकता"

}

};
/* =========================================
   Translate Page
========================================= */

function translatePage(lang){

    if(!dictionary[lang]) return;

    // Save language
    localStorage.setItem("language",lang);

    // Update dropdown
    if(languageSelect){
        languageSelect.value=lang;
    }

    // Translate all text nodes
    document.querySelectorAll("h1,h2,h3,h4,h5,h6,p,a,button,span,label,li").forEach(element=>{

        let text=element.innerText.trim();

        if(dictionary[lang][text]){

            element.innerText=dictionary[lang][text];

        }

    });

}


/* =========================================
   Load Saved Language
========================================= */

const savedLanguage=localStorage.getItem("language") || "en";

translatePage(savedLanguage);


/* =========================================
   Language Change Event
========================================= */

if(languageSelect){

languageSelect.value=savedLanguage;

languageSelect.addEventListener("change",function(){

translatePage(this.value);

});

}
