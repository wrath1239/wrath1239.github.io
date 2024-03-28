const firstNames = ['John', 'Jane', 'Michael', 'Emily', 'David', 'Sarah', 'Elliot', 'Jonathan', 'Emelie'];
const lastNames = ['Doe', 'Smith', 'Johnson', 'Carlsson', 'Brown', 'Lee', 'Wilson', 'Andersson', 'Sjöstedt'];

/* This is the function that will generate the names */
function generateName() {
    const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
    const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);

    const firstName = firstNames[randomFirstNameIndex];
    const lastName = lastNames[randomLastNameIndex];

    document.getElementById('generatedName').value = firstName + ' ' + lastName;
}