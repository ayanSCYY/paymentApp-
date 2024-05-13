const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");
const { User } = require("./db");
const { UserToken } = require("./db");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(403).json({});
    }
};
const authMiddlewaresignin=async (req,res,next)=>{
    const user=req.body;
   
    const usert=await User.findOne({
        username:user.username,
        password:user.password
    })
    if(!usert){
        return res.status(403).json({});
    }
    const userId=usert._id;

    const tokenu=await UserToken.findOne({
       userId
    })

    const token = tokenu.token;
    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(403).json({});
    }
    
}

module.exports = {
    authMiddleware,
    authMiddlewaresignin
}
