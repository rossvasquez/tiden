import ReCAPTCHA from "react-google-recaptcha"

export default function VerifyHuman({OnChangeFunc}) {

    return(
        <ReCAPTCHA
            sitekey="6LfHlYgoAAAAACYiiDUwTomaJaFzWubR4ivBnuAa"
            onChange={OnChangeFunc}
            theme="dark"
        />
    )
}