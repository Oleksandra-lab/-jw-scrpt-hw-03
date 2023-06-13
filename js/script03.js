// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = "happy"
// console.log(user);

// const userKeys = Object.keys(user);
// console.log(userKeys);

// /* Task 1 */
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// } 
// console.log(apartment);

// /* Task 2 */
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// } 
// console.log(apartment);

// /* Task 3 */
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment.rating;
//   console.log(aptRating);

//   const aptDescr = apartment.descr;
//   console.log(aptDescr);

//   const aptPrice = apartment.price;
//   console.log(aptPrice);

//   const aptTags = apartment.tags;
//   console.log(aptTags);
//   // Change code above this line

//   /* Task 4 */
//   const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   const ownerName = apartment.owner.name;
//   console.log(ownerName);

//   const ownerPhone = apartment.owner.phone;
//   console.log(ownerPhone);

//   const ownerEmail = apartment.owner.email;
//   console.log(ownerEmail);

//   const numberOfTags = apartment.tags.length;
//   console.log(numberOfTags);

//   const firstTag = apartment.tags[0];
//   console.log(firstTag);

//   const lastTag = apartment.tags[2];
//   console.log(lastTag);
//   // Change code above this line

// /* Task 5 */
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment["rating"];
//   console.log(aptRating);

//   const aptDescr = apartment["descr"];
//   console.log(aptDescr);

//   const aptPrice = apartment["price"];
//   console.log(aptPrice);

//   const aptTags = apartment["tags"];
//   console.log(aptTags);
//   // Change code above this line
  
// /* Task 6 */
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   apartment.rating = 4.7;
//   apartment.price = 5000;
//   apartment.owner.name = "Henry Sibola";
//   apartment.tags.push("trusted");

//   console.log(apartment);

/* Task 7 */
const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4.7,
    price: 5000,
    tags: ["premium", "promoted", "top", "trusted"],
    owner: {
      name: "Henry Sibola",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  // Change code below this line
  apartment.area = 60;
  apartment.rooms = 3;
  apartment.location = {};
  apartment.location.country = "Jamaica";
  apartment.location.city = "Kingston";
    

console.log(apartment);
  

