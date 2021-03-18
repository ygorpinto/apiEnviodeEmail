import express from 'express'
import User from '../data/schema.js'

const router = express.Router();

router.get("/all", async (req,res)=>{
    try {
        const user = await User.find();
       return res.status(200).send(user)
    } catch (err) {
       return res.send(err);
    }
})

router.get("/user/:name", async (req,res)=>{
    try {
        const user = await User.findOne({name:req.params.name}).exec();
        return res.status(200).send(user);
    } catch (err) {
       return res.send(err);
    }
});

router.post("/adduser", async (req,res)=>{
    try {
        const user = await User.create(req.body);
        return res.status(200).send(user)
    } catch (err) {
       return res.send(err)
    }
});

router.delete("/d", async (req,res)=>{
    try {
        const user = await User.deleteMany();
        return res.status(200).send(user)
    } catch(err){
        return res.send(err)
    }
});

export default router;
