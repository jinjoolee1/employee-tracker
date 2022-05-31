const mysql = require('mysql2');
const cTable = require('console.table');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Besitos97890!',
        database: 'employeetracker_db'
    },
    console.log('Connected to the employeetracker database.')
);

// View all departments
const viewAllDpts = () => {
    db.execute(
        `SELECT * FROM departments`,
        function (err, results, fields) {
            console.table('Departments', results);
        }
    );
};

// View all roles
const viewAllRoles = () => {
    db.execute(
        `SELECT roles.id, roles.title, roles.salary, departments.department_name FROM roles
        JOIN departments
        ON roles.department_id = departments.id`,
        function(err, results, fields) {
            console.table('Roles', results);
        }
    );
};

// View all employees
const viewAllEmployees = () => {
    db.execute(
        // GIVE THE 2 INSTANCES 
        `SELECT employees.id, employees.first_name, employees.last_name, roles.title AS title, employees.manager_id AS manager
        FROM employees
        JOIN roles
        ON employees.role_id = roles.id`,
        function(err, results, fields) {
            if(err) {
                console.log(err);
            };
            console.table('Employees', results);
        }
    );
};

module.exports = {
    db,
    viewAllDpts,
    viewAllRoles,
    viewAllEmployees
};