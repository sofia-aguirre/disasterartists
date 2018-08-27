var db = require("./models");

var usersList = [
{
  username: "Mark01",
  password: "password",
  location: 93933,
  contact: "email@email.email",
  picture: "LINK-TO-IMG",
  posts: [{subject: "science",
  title: "micro biology for beginners",
  volume: 7,
  price: 15,
  location: 93933}]
},
{
  username: "jon25687",
  password: "password",
  location: 94804,
  contact: "email@email.email",
  picture: "LINK-TO-IMG",
  posts: [{subject: "health",
  title: "hi",
  volume: 1,
  price: 20,
  location: 94804},
  {subject: "biography",
  title: "no body cares",
  volume: 7,
  price: 7,
  location: 94804}]
},
{
  username: "bigboy77",
  password: "password",
  location: 94530,
  contact: "email@email.email",
  picture: "LINK-TO-IMG",
  posts: [{subject: "lit",
  title: "hey there bud",
  volume: 1,
  price: 0,
  location: 94530}]
},
{
  username: "stephany",
  password: "password",
  location: 94530,
  contact: "email@email.email",
  picture: "LINK-TO-IMG",
  posts: [{subject: "math",
  title: "math sucks",
  volume: 5,
  price: 100,
  location: 94530}]
},
{
  username: "457138",
  password: "password",
  location: 94587,
  contact: "email@email.email",
  picture: "LINK-TO-IMG",
  posts: [{subject: "history",
  title: "ancient history",
  volume: 30,
  price: 100,
  location: 94587},
  {subject: "history",
  title: "us history",
  volume: 7,
  price: 15,
  location: 94587},
  {subject: "history",
  title: "micro biology for beginners",
  volume: 7,
  price: 15,
  location: 94587}]
}
];

// var postsList = [
// {
//   subject: "science",
//   title: "micro biology for beginners",
//   volume: 7,
//   price: 15,
//   location: 94587
// },
// {
//   subject: "math",
//   title: "algebra 4",
//   volume: 4,
//   price: 20,
//   location: 94530
// },
// {
//   subject: "art",
//   title: "art history",
//   volume: 1,
//   price: 1,
//   location: 93933
// },
// {
//   subject: "science",
//   title: "micro biology for pros",
//   volume: 10,
//   price: 100,
//   location: 94587
// }
// ]

// usersList.forEach(function(user) {
//     //console.log(this);
//     var post1 = new db.Post({
//   subject: "science",
//   title: "micro biology for beginners",
//   volume: 7,
//   price: 15,
//   location: 94587
// });
//     post1.save();
//     user.posts.push(post1);

//     var post2 = new db.Post({
//   subject: "math",
//   title: "algebra 4",
//   volume: 4,
//   price: 20,
//   location: 94530
// });
//     post2.save();
//     user.posts.push(post2);

//     var post3 = new db.Post({
//   subject: "art",
//   title: "art history",
//   volume: 1,
//   price: 1,
//   location: 94105
// });
//     post3.save();
//     user.posts.push(post3);

//     var post4 = new db.Post({
//   subject: "science",
//   title: "micro biology for pros",
//   volume: 10,
//   price: 100,
//   location: 94587
// });
//     post4.save();
//     user.posts.push(post4);

//     var post5 = new db.Post({
//   subject: "history",
//   title: "us history",
//   volume: 10,
//   price: 100,
//   location: 94016
// });
//     post5.save();
//     user.posts.push(post5);

// });

// usersList.forEach(function(user) {
//   for (var i = 0; i <= postsList.length; i++){
//     user.posts.push(postsList[i]);
//   };
// });


db.User.remove({}, function(err, users){
  // code in here runs after all users are removed
  db.User.create(usersList, function(err, users){
    // code in here runs after all users are created
    if (err) { return console.log('ERROR', err); }
    console.log("all users:", users);
    console.log("created", users.length, "users");
    process.exit();
  });
  // db.Post.create(postsList, function(err, posts){
  //   // code in here runs after all users are created
  //   if (err) { return console.log('ERROR', err); }
  //   console.log("all posts:", posts);
  //   console.log("created", posts.length, "postss");
  //   process.exit();
  // });
});
