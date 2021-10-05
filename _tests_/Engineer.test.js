const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    describe('class', () => {
        it("should create a class with name id email and role and github", () => {
            // Arrange

            const name = "Bob";
            const id = 1;
            const email = "test@email.com"
            const role = "Engineer"
            const github = "test"
            // Act
            const engineer = new Engineer(name, id, email, github, role)
            
            expect(engineer.name).toEqual(name);
            expect(engineer.id).toEqual(id);
            expect(engineer.email).toEqual(email);
            expect(engineer.role).toEqual(role);
            expect(engineer.github).toEqual(github);

        })
        it("should get all that info as well", () => {
            // Arrange
            const name = "Bob";
            const id = 1;
            const email = "test@email.com"
            const role = "Engineer"
            const github = "test"
            // Act
            const engineer = new Engineer(name, id, email, github, role)
            // Assert
            expect(engineer.getName()).toEqual(name);
            expect(engineer.getId()).toEqual(id);
            expect(engineer.getEmail()).toEqual(email);
            expect(engineer.getRole()).toEqual(role);
            expect(engineer.getGithub()).toEqual(github);

        })
    })
})