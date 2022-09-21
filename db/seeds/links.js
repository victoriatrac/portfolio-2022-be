/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  const links = [
    {
      id: 0, 
      title: 'rowValue1',
      description: 'link1',
      url: 'https://www.linkedin.com/in/victoriatrac/'
    },
    {
      id: 1, 
      title: 'rowValue2',
      description: 'link2',
      url: 'https://www.linkedin.com/in/victoriatrac/'
    },
    {
      id: 2, 
      title: 'rowValue3',
      description: 'link3',
      url: 'https://www.linkedin.com/in/victoriatrac/'
    }
  ]
  
  return knex('links').del()
    .then(function() {
      return knex('links').insert([links])
    })
};
