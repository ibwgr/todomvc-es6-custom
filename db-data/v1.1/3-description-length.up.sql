UPDATE todo.TodoItem
SET description = SUBSTRING(description, 1, 30);
ALTER TABLE todo.TodoItem
    MODIFY COLUMN description VARCHAR(30);
