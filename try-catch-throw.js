// TRY CATCH

// function getRectArea(width, height) {
//   if (isNaN(width) || isNaN(height)) {
//     throw new Error('Parameter is not a number!');
//   }
// }

// try {
//   getRectArea(3, 2);
// } catch (e) {
//   console.error(e);
//   // Expected output: Error: Parameter is not a number!
// }

const json = '{ "age": 20 }';
// TRY CATCH : THROW ERROR
try {
  const user = JSON.parse(json);

  if (!user.name) {
    throw Error('Error ges');
  }

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}

// TRY CATCH : THROW NEW ERROR
// try {
//   const user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("'name' is required");
//   }

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(`JSON Error: ${error.message}`);
// }
