exports.up = function(knex) {
  return knex.schema
    .createTable('links', tbl => {
      tbl.increments('link_id')
      tbl.string('title')
      tbl.string('description')
      tbl.string('url')
    })

    .createTable('projects', tbl => {
      tbl.increments('proj_id')
      tbl.string('name', 64)
      tbl.string('category')
      tbl.string('medium')
      tbl.string('roles')
      tbl.string('images')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('links')
};
