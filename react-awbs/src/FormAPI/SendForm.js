const serviceID = 'service_5t2r77h';
const templateID = 'template_untp5bh';
const userID = '05ByVH_6VmZp7c_js2aAC';
const postURL = 'https://api.emailjs.com/api/v1.0/email/send-form';

//function to send form data
export const SendFormAPI = {

    sendForm (formData) {
        //append the form data with ID's
        formData.append('serivce_id', serviceID);
        formData.append('template_id', templateID)
        formData.append('user_id', userID)

        try {
            return fetch(postURL, {
                type: "POST",
                data: formData,
                contentType: false,
                processData: false
            }).then( console.log('Form Sent'))
               
        } catch (error) {
            console.log('Failure');
        }
    }
}