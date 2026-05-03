import argon from "argon2";

export const registerUser = (req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(401).json({success: false, message: "All fields required"});
    }
    const hashedPassword = await argon.hash(password, 10);

    res.status(201).json({success: true, message: "User Registered Successfully!"});
}

