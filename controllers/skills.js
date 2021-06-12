const Skill = require('../models/skill')


function index(req, res){
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
    });
};


function show(req, res){
    res.render('skills/index', {skills: Skill.getOne(req.params.id)});
};

module.exports = {index, show}