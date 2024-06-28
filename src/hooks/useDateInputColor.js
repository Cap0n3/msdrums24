import { useEffect, useContext } from "react";
import { LangContext } from "../context/LangContext";

/**
 * This hook is part of a workaround to remove the placeholder text 'mm/dd/yyyy' from date inputs
 * when it's first presented to the user. If it is not removed, the custom label and the
 * placeholder text will overlap confusingly (only for date inputs).
 *
 * First the user will see the placeholder text, then the text will be replaced with the
 * actual date and class 'date-filled' will be added to the input. It works in conjunction
 * with the custom hook useDateInputColor() that will change the class to 'date-filled' if
 * the user has filled the date.
 * 
 */
function useDateInputColor() {
    const { language } = useContext(LangContext); // To reload inputs on language change

    useEffect(() => {
        const dateInputs = document.querySelectorAll('input[type="date"]');

        // Function to detect if the browser is Safari
        const isSafari = () => {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        };

        // Function to detect if the browser is Firefox
        const isFirefox = () => {
            return navigator.userAgent.toLowerCase().includes('firefox');
        };

        dateInputs.forEach((input) => {
            if (isSafari() || isFirefox()) {
                // Control Firefox and Safari placeholders (cannot be controlled by CSS like with Chrome)
                input.style.color = 'transparent'; // Only for Safari and Firefox
            }

            const handleChange = () => {
                console.log("Change detected");
                if (input.value) {
                    input.classList.add("date-filled");
                } else {
                    input.classList.remove("date-filled");
                }
            };

            const handleFocus = () => {
                input.style.color = "black"; // Only for Safari and Firefox
            };

            input.addEventListener("change", handleChange);
            input.addEventListener("focus", handleFocus);

            return () => {
                input.removeEventListener("change", handleChange);
                input.removeEventListener("focus", handleFocus);
            };
        });
    }, [language]);
}

export default useDateInputColor;
