const Employee = require("../lib/Employee");

describe('Employee', () => {
    describe('class', () => {
        it("should create a class with name id email and role", () => {
            // Arrange

            const name = "Bob";
            const id = 1;
            const email = "test@email.com"
            const role = "Manager"
            // Act
            const employee = new Employee(name, id, email, role)
            
            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);
            expect(employee.role).toEqual(role);

        })
        it("should get all that info as well", () => {
            // Arrange
            const name = "Bob";
            const id = 1;
            const email = "test@email.com"
            const role = "Employee"
            // Act
            const employee = new Employee(name, id, email, role)
            // Assert
            expect(employee.getName()).toEqual(name);
            expect(employee.getId()).toEqual(id);
            expect(employee.getEmail()).toEqual(email);
            expect(employee.getRole()).toEqual(role);

        })
    })
})


