import jwt from "jsonwebtoken";

export default {
    validateRoute: (token) => {
        const options = {
            expiresIn: '1h',
            issuer: 'madTeam'
        };

        try {
            let result = jwt.verify(token, process.env.JWT_SECRET, options)
            console.log(result);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}