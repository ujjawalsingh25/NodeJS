
const {validateToken} = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];
        if(!tokenCookieValue) {
            return next();
        }

        try {           // if get userPayload then make req.user equals userPaylaod
            const userPayload = validateToken(tokenCookieValue);
            req.user = userPayload;
        } catch (error) {}

        return next(); 
    }
}

module.exports = {
    checkForAuthenticationCookie,
}

