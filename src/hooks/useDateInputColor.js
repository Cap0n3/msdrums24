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
 */
function useDateInputColor() {
    const { language } = useContext(LangContext); // To reload inputs on language change
    
    useEffect(() => {
        console.log("Date input color hook: ", language);
        const dateInputs = document.querySelectorAll('input[type="date"]');
        console.log(dateInputs);

        dateInputs.forEach((input) => {
            const handleChange = () => {
                if (input.value) {
                    input.classList.add("date-filled");
                } else {
                    input.classList.remove("date-filled");
                }
            };

            input.addEventListener("change", handleChange);

            // Cleanup event listener on component unmount
            return () => {
                input.removeEventListener("change", handleChange);
            };
        });
    }, [language]);
}

export default useDateInputColor;
