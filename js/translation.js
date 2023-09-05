const translation = {
    en: {
        home: "Home",
        about: "About",
        pricing: "Pricing",
        contact: "Contact Us",
        english: "English",
        arabic: "Arabic",
        home_head: "Control Your Bussiness",
        home_head_with: "with",
        vondera: "Vondera",
        app_download: "Get App",
        home_join: "and join 1000+ Bussiness",
        app_Store: "App Store",
        google_play: "Google play",
        about_about: "About",
        about_brief: "We are Creative Tech App That mange your Bussiness",
        about_desc: "a comprehensive mobile app available on App Store and Play Store, designed to streamline e- commerce store management. It empowers store owners with features like stock tracking, order receipt printing, and sales analytics.With collaborative tools, order and shipping updates, and expense tracking, Vondera simplifies operations and facilitates accurate net profit calculations.",
        about_desc2: "You can easily create your own store by download our app from google play, or app store. Or you can contact us to help creating your store."
    },
    ar: {
        home: "الرئيسة",
        about: "من نحن",
        pricing: "الاسعار",
        contact: "تواصل معنا",
        english: "الانجليزية ",
        arabic: "العربية",
        home_head: "تحكم في مشروعك",
        home_head_with: "مع",
        vondera: "فونديرا",
        app_download: "تحميل التطبيق",
        home_join: "وانضم إلى أكثر من 1000 براند",
        app_Store: "اب ستور",
        google_play: "جوجل بلاي",
        about_about: "عن",
        about_brief: "نحن تطبيق تقني إبداعي يدير أعمالك.",
        about_desc: "فونديرا هو تطبيق متكامل متاح على متجر التطبيقات ومتجر جوجل بلاي، مصمم لتبسيط إدارة متاجر التجارة الإلكترونية. يمنح أصحاب المتاجر ميزات مثل تتبع المخزون وطباعة إيصالات الطلبات وتحليل المبيعات. تحديثات الطلبات والشحن، وتتبع النفقات، يقوم فونديرا بتبسيط العمليات وتيسير حسابات الأرباح الصافية بدقة.",
        about_desc2: "يمكنك بسهولة إنشاء متجرك الخاص عن طريق تنزيل تطبيقنا من متجر جوجل بلاي أو متجر التطبيقات. أو يمكنك الاتصال بنا للمساعدة في إنشاء متجرك.",

    },
};

const button = document.getElementById('app_store_home');
const icon = document.querySelector('button > i.fa-brands.fa-apple.fa-fade.pad-right');
const span = document.querySelector('button > span[data-il8n="app_Store"]');

const button2 = document.getElementById('google_play_Store');
const icon2 = document.querySelector('button > i.fa-brands.fa-google-play.fa-fade.pad-right');
const span2 = document.querySelector('button > span[data-il8n="google_play"]');
const mockup = document.getElementById("phone_mockup")


const langugeSelcetor = document.querySelector("select");
langugeSelcetor.addEventListener("change", (event) => {
    setLanguge(event.target.value)
    localStorage.setItem("lang", event.target.value)
});

document.addEventListener("DOMContentLoaded", () => {
    const languge = localStorage.getItem("lang")
    setLanguge(languge)
    selected(languge);
});

const setLanguge = (languge) => {
    const elements = document.querySelectorAll("[data-il8n");
    elements.forEach((element) => {
        const translateKey = element.getAttribute("data-il8n")
        element.textContent = translation[languge][translateKey];
    });
    if (languge === "ar") {
        document.dir = "rtl",
            swapicon(button, icon, span, languge)
        swapicon(button2, icon2, span2, languge)
        updateMargins(languge);
    } else {
        document.dir = "ltr"
        swapicon(button, icon, span, languge)
        swapicon(button2, icon2, span2, languge)
        updateMargins(languge);

    }

}


function swapicon(button, icon, span, languge) {
    // Get references to the elements
    // Remove the elements from their current positions
    if (languge === "ar") {
        button.removeChild(icon);
        button.removeChild(span);

        // Add them back to the button element in the desired order
        button.appendChild(span);
        button.appendChild(icon);
    }
    else {
        button.removeChild(icon);
        button.removeChild(span);

        // Add them back to the button element in the desired order
        button.appendChild(icon);
        button.appendChild(span);

    }
}
function updateMargins(language) {
    // Check the viewport width
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth <= 800) {
        if (language === "ar") {
            mockup.style.marginLeft = "0";
            mockup.style.marginRight = "30%";
        } else {
            mockup.style.marginLeft = "30%";
            mockup.style.marginRight = "0";
        }
    } else {
        // Reset margins to their default values for viewport width > 800px
        mockup.style.marginLeft = "";
        mockup.style.marginRight = "";
    }
}
function selected(lang) {
    const select = document.getElementById('lang_select'); // Replace 'yourSelectId' with the actual ID of your <select> element.

    // Set the index of the option you want to select
    if (lang === "ar") {
        const selectedIndex = 1; // Change this to the index of the option you want to select (0-based index).

        // Set the selected option
        select.selectedIndex = selectedIndex;
    }
    else {
        const selectedIndex = 0; // Change this to the index of the option you want to select (0-based index).

        // Set the selected option
        select.selectedIndex = selectedIndex;
    }
}