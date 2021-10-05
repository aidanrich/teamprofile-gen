const Intern = require("../lib/Intern");

describe('Intern', () => {
    describe('class', () => {
        it("should create a class with name id email and role and school", () => {
            // Arrange

            const name = "Bob";
            const id = 1;
            const email = "test@email.com"
            const role = "Intern"
            const school = "test"
            // Act
            const intern = new Intern(name, id, email, school, role)
            
            expect(intern.name).toEqual(name);
            expect(intern.id).toEqual(id);
            expect(intern.email).toEqual(email);
            expect(intern.role).toEqual(role);
            expect(intern.school).toEqual(school);

        })
        it("should get all that info as well", () => {
            // Arrange
            const name = "Bob";
            const id = 1;
            const email = "test@email.com"
            const role = "Intern"
            const school = "test"
            // Act
            const intern = new Intern(name, id, email, school, role)
            // Assert
            expect(intern.getName()).toEqual(name);
            expect(intern.getId()).toEqual(id);
            expect(intern.getEmail()).toEqual(email);
            expect(intern.getRole()).toEqual(role);
            expect(intern.getSchool()).toEqual(school);

        })
    })
})