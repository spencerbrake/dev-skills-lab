const skills = [
    {id: 1, skill: 'HTML', done: true},
    {id: 2, skill: 'CSS', done: true},
    {id: 3, skill: 'Javascript', done: true},
    {id: 4, skill: 'Node.js', done: false},
    {id: 5, skill: 'Express.js', done: false},
    {id: 6, skill: 'React', done: false}
]; 

module.exports = {
    getAll,
    getOne
  };

  function getAll() {
      return skills
  };

  function getOne(id){
      return skills.find(skill => skill.id === parseInt(id));
  };