// * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
//    * The closest match will be the user with the least amount of difference.

// function difference(n, m){
//     var result = Math.abs(n - m);
//     console.log(result);
// }

// var num1 = process.argv[2];
// var num2 = process.argv[3];

// difference(num1, num2);

// for (var i = 0; i < Things.length; i++) {
// 	difference(Things[i], Things2[i])
// }

var friends = [
	{
	  "name":"Ahmed",
	  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  "scores":[
	      5,
	      1,
	      4,
	      4,
	      5,
	      1,
	      2,
	      5,
	      4,
	      1
	    ]
	},
	{
	  "name":"Ahmed",
	  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  "scores":[
	      4,
	      1,
	      4,
	      3,
	      5,
	      1,
	      5,
	      2,
	      4,
	      1
	    ]
	},
	{
	  "name":"Ahmed",
	  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  "scores":[
	      2,
	      2,
	      2,
	      2,
	      2,
	      2,
	      2,
	      5,
	      4,
	      1
	    ]
	}
]

module.exports = friends;