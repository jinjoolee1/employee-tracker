INSERT INTO departments (department_name)
VALUES 
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Full-Stack Enginner', '120000', '2'),
    ('FrontEnd Developer', '75000', '2'),
    ('BackEnd Developer', '85000', '2'),
    ('Sales Representative', '50000', '1'),
    ('Lead Sales Representative', '100000', '1'),
    ('Legal Team Lead', '250000', '3'),
    ('Lawyer', '90000', '3'),

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ('Mike', 'Chan', '1', '1'),
    ('Ashley', 'Rodriguez', '3',  '1'),
    ('Kevin', 'Tupik', '2', '1'),
    ('Kunal', 'Singh', '2', '3'),
    ('Malia', 'Brown', '8', '1'),
    ('Sarah', 'Lourd', '9', '1'),
    ('Tom', 'Allen', '6', '8'),
