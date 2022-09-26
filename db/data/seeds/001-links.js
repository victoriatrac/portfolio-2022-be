
exports.seed = function(knex) {
  const links = [
    {
      link_id: 0, 
      title: 'Portfolio',
      description: 'Portfolio',
      url: 'https://www.linkedin.com/in/victoriatrac/'
    },
    {
      link_id: 1, 
      title: 'LinkedIn',
      description: 'LinkedIn',
      url: 'https://www.linkedin.com/in/victoriatrac/'
    },
    {
      link_id: 2, 
      title: 'rowValue3',
      description: 'link3',
      url: 'https://www.linkedin.com/in/victoriatrac/'
    }
  ]
  
  return knex('links')
    .insert(links)
    
}