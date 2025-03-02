exports.up = (pgm) => {
    pgm.addColumn('todos', {
      created_at: { type: 'timestamp', notNull: true, default: pgm.func('NOW()') },
    });
  };
  
  exports.down = (pgm) => {
    pgm.dropColumn('todos', 'created_at');
  };
  