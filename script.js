const Person = win.Person;
const Employee = win.Employee;
const person = new Person("Alice", 25);
const employee = new Employee("Bob", 30, "Manager");

// Spy on the console.log method
cy.window().then((win) => {
  cy.spy(win.console, 'log').as('consoleLog');
});

it('should log the correct greeting for Person and Employee', () => {
  person.greet();
  cy.get('@consoleLog').should('be.calledWith', 'Hello, my name is Alice, I am 25 years old.');

  employee.jobGreet();
  cy.get('@consoleLog').should('be.calledWith', 'Hello, my name is Bob, I am 30 years old, and my job title is Manager.');
});
