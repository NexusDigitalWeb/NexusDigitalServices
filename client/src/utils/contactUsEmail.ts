import { FieldValues } from "../components/contactUs/ContactForm";

const sendEmail = async (body: FieldValues) => {
    try {
        const response = await fetch('https://nexusdigitalservices.fly.dev/emails/contactUs', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();

        if (response.status === 400) return { message: 'Bad request', status: response.status };
        if (response.status === 404) return { message: 'Not found', status: response.status };
        if (response.ok) return { message: 'New email received', data, status: response.status };
        
    } catch (error) {
        console.error(error);
    }
};

export default sendEmail;