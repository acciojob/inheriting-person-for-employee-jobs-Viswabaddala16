// cypress/integration/example.spec.js

// This is your base URL, replace it with your actual application URL
const baseUrl = 'http://localhost:3000'; // Replace with your application's URL

describe('Example Test Suite', () => {
  beforeEach(() => {
    cy.visit(`${baseUrl}/main.html`);
  });

  it('should greet a person and an employee', () => {
    cy.window().then((win) => {
      const Person = win.Person;
      const Employee = win.Employee;
      const person = new Person('Alice', 25);
      const employee = new Employee('Bob', 30, 'Manager');

      // Stub the console.log method
      cy.stub(win.console, 'log').as('consoleLog');

      // Call the greet methods
      person.greet();
      cy.get('@consoleLog').should('be.calledWith', `Hello, my name is Alice and I am 25 years old.`);

      employee.jobGreet();
      cy.get('@consoleLog').should(
        'be.calledWith',
        `Hello, my name is Bob, I am 30 years old, and my job title is Manager.`
      );
    });
  });
});
