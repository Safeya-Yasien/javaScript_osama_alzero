function sayHello(theName, theGender) {
  // Your Code Here
  theGender == "Female"
    ? console.log(`Hello Miss ${theName}`)
    : theGender == "Male"
    ? console.log(`Hello Mr ${theName}`)
    : console.log(`Hello ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
