exports.up = (pgm) => {
  pgm.createTable('todos', {
    id: 'id',
    title: { type: 'varchar(255)', notNull: true },
    
  });
};

exports.down = (pgm) => {
  pgm.dropTable('todos');
};
