const jwt = require('jsonwebtoken');

module.exports = {
    validateToken: (req, res, next) => {
        const authorizationHeaader = req.headers.authorization;

        console.log(req.headers);
        console.log(authorizationHeaader);

        let result;
        if (authorizationHeaader) {
            const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
            const options = {
                expiresIn: '1h',
                issuer: 'madTeam'
            };
            try {
                result = jwt.verify(token, process.env.JWT_SECRET, options);
                req.decoded = result;
                next();
            } catch (err) {
                throw new Error(err);
            }
        } else {

            res.status(500).json({
                error: `Authentication error. Token required.`
            });
        }
    }
};