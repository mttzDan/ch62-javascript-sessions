/* Ejemplo de Objeto Literal
   -útil para configyraciones unicas
   No escalable para crear multiples entidades
*/
const internalID = Symbol ("id");

const aliceUser = {
    [internalID]: "User-T100",
    name: "Alice",
    age: 30,
    email: "alice@gmail.com",

    getFullName() {
        // return `${aliceUser.name} ${aliceUser.lastName} ${aliceUser.age}`;
        return `${this.name} ${this.age} ${this.email}`;
    },
    stringify() {
        return JSON.stringify(this);
    }
}
export { aliceUser };