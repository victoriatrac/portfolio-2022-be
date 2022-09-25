
exports.seed = function(knex) {
  const links = [
    {
      link_id: 0, 
      title: 'rowValue1',
      description: 'link1',
      url: 'https://www.linkedin.com/in/victoriatrac/'
    },
    {
      link_id: 1, 
      title: 'rowValue2',
      description: 'link2',
      url: 'https://www.linkedin.com/in/victoriatrac/'
    },
    {
      link_id: 2, 
      title: 'rowValue3',
      description: 'link3',
      url: 'https://www.linkedin.com/in/victoriatrac/'
    }
  ]
  
  return knex('links').truncate()
    .then(function () {
      return knex('links').insert(links)
    })
};
