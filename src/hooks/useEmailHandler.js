import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const useEmailHandler = (serviceID, templateID, publicKey) => {
    const [isWaitingServerResp, setIsWaitingServerResp] = useState(false);
    const [isSendSuccess, setIsSendSuccess] = useState(null);
    const [serverResponse, setServerResponse] = useState(null);
    const formRef = useRef(null);

    // Set a timer to clear the server response message after 5 seconds
    useEffect(() => {
        if (serverResponse) {
            const timer = setTimeout(() => {
                setServerResponse(null);
                isSendSuccess && setIsSendSuccess(null); // Only clear the success message
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [serverResponse]);

    const sendEmail = async (event) => {
        event.preventDefault();
        setIsWaitingServerResp(true);

        console.log(formRef.current);

        try {
            const result = await emailjs.sendForm(
                serviceID,
                templateID,
                formRef.current,
                publicKey,
            );
            setIsWaitingServerResp(false);
            setIsSendSuccess(true);
            setServerResponse({
                status: "success",
                msg: "Email sent successfully!",
                responseObject: result,
            });
        } catch (error) {
            console.error(error);
            setIsWaitingServerResp(false);
            setIsSendSuccess(false);
            setServerResponse({
                status: "error",
                msg: "Failed to send email.",
                responseObject: error,
            });
        }
    };

    return {
        formRef,
        isWaitingServerResp,
        isSendSuccess,
        serverResponse,
        setIsSendSuccess,
        sendEmail,
    };
};

export default useEmailHandler;
