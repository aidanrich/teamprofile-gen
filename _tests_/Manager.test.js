const Manager = require("../lib/Manager");

describe('Manager', () => {
    describe('class', () => {
        it("should create a class with name id email and role and office", () => {
            // Arrange

            const name = "Bob";
            const id = 1;
            const email = "test@email.com"
            const role = "Manager"
            const office = "test"
            // Act
            const manager = new Manager(name, id, email, office, role)
            
            expect(manager.name).toEqual(name);
            expect(manager.id).toEqual(id);
            expect(manager.email).toEqual(email);
            expect(manager.role).toEqual(role);
            expect(manager.office).toEqual(office);

        })
        it("should get all that info as well", () => {
            // Arrange
            const name = "Bob";
            const id = 1;
            const email = "test@email.com"
            const role = "Manager"
            const office = "test"
            // Act
            const manager = new Manager(name, id, email, office, role)
            // Assert
            expect(manager.getName()).toEqual(name);
            expect(manager.getId()).toEqual(id);
            expect(manager.getEmail()).toEqual(email);
            expect(manager.getRole()).toEqual(role);
            expect(manager.getOffice()).toEqual(office);

        })
    })
})