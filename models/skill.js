const skills = [
    {id: 1, skill: 'HTML', done: true},
    {id: 2, skill: 'CSS', done: true},
    {id: 3, skill: 'Javascript', done: true},
    {id: 4, skill: 'Node.js', done: false},
    {id: 5, skill: 'Express.js', done: false},
]; 

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };

  function getAll() {
      return skills
  };

  function getOne(id){
      return skills.find(skill => skill.id === parseInt(id));
  };

  function create(skill){
      skill.id = Date.now() * 1000000
      skill.done = false
      skills.push(skill)
  };

  function deleteOne(id){
      const idx = skills.findIndex(skill => skill.id === parseInt(id))
      skills.splice(idx, 1)
  };

  function update(id, newSkill){
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills[idx].skill = newSkill.skill
    skills[idx].done = newSkill.done === 'on' ? true : false
  }