const Programmer = require("../models/Programmer");

const createProgrammer = async (req,res) => {

    const programmer = new Programmer({
        name : req.body.name,
        age : req.body.age,
        skills: req.body.skills,
        hasJob : req.body.hasJob
    });

    try{
        const newProgrammer = await programmer.save();
        return res.status(201).send(newProgrammer);
    } catch (err){
        return res.status(500).send({message: err.message});
    }
};


const fetchAllProgrammers = async (req,res) => {
    try{
        const programmers = await Programmer.find();
        return res.status(200).send(programmers);
    } catch(err){
        return res.status(500).send({message: err.message});
    }
};


const singleProgrammer = async (req,res) => {
    var id = req.params.id;

    try{
        const programmer = await Programmer.findById(id);

        if(!programmer)
            return res.status(404).send({message: "No Such Programmer Exists"});

        return res.status(200).send(programmer);
    } catch(err){
        return res.status(500).send({message: err.message});
    }
};


const updateProgrammer = async (req,res) => {
    var id = req.params.id;

    try{
        const programmer = await Programmer.findById(id);

        if(!programmer)
            return res.status(404).send({message: "No Such Programmer Exists"});

        programmer.name = req.body.name;
        programmer.age = req.body.age;
        programmer.skills = req.body.skills;
        programmer.hasJob = req.body.hasJob;

        const updatedProgrammer = await programmer.save();
        return res.status(200).send(updatedProgrammer);
    } catch(err){
        return res.status(500).send({message: err.message});
    }
};


const deleteProgrammer = async (req,res) => {
    var id = req.params.id;

    try{
        const programmer = await Programmer.findById(id);

        if(!programmer)
            return res.status(404).send({message: "No Such Programmer Exists"});

        await programmer.deleteOne();
        return res.status(200).send({message: "Programmer Deleted"});

    } catch(err){
        return res.status(500).send({message: err.message});
    }
};

module.exports = {
    createProgrammer,
    fetchAllProgrammers,
    singleProgrammer,
    updateProgrammer,
    deleteProgrammer
};