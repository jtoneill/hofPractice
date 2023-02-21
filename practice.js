// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var count = 0;
  _.each(numbers, function(numbers, index, collection) {
    if (numbers % 5 === 0) {
      count += 1;
    }
  });
  return count;
};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var result = [];
  _.each(tweets, function(tweets, index, collection) {
    if (tweets['user'] === user) {
      result.push(tweets);
    }
  });
  return result;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  var result = _.filter(fruits, function(fruits, index, collection) {
    return fruits === targetFruit;
  });
  return result;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {

  return _.filter(fruits, function(fruit, index, collection) {
    if (fruit.slice(0, 1).toLowerCase() === letter.toLowerCase()) {
      return fruit;
    }
  });

};

/*
  I - an array of objects representing defferent desserts - keys (name, ingredients, type)
  O - an array containing only the desserts that pass the predicate test function
  C - only pass cookie type desserts
  E -
*/

// return _.filter passing in desserts and function
  // if desserts[type] equals cookie
    //return desserts

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  return _.filter(desserts, function(dessert, index, collection) {
    if (dessert['type'] === 'cookie') {
      return dessert;
    }
  });
};


/*
  I - tweets (an array of objects), user (string)
  O - an array with all tweet from given user
  C - use _.filter
  E -
*/

// declare a result variable
// return _.filter passing in tweets and a function
  // if tweet is from user
    //push tweet into result
//return result

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {

  return _.filter(tweets, function(tweet, index, collection) {
    if (tweet['user'] === user) {
      return tweet;
    }
  });

};

/*
 *
 *  _.map
 *
 */

/*
  I - array of strings
  O - array of modified strings
  C - use _.map
  E -
*/

// return _.map passing in fruits, and a function that takes fruit, index, and fruits
  // return fruit all upper case

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(fruit, index, fruits) {
    return fruit.toUpperCase();
  });
};

/*
   I - an array of objects representing defferent desserts - keys (name, ingredients, type)
   O - an array of objects each with a new property, glutenFree which is true or false
   C - use _.map,
   E -
*/

// return _.map passing in desserts and a function that takes fruit index and fruits
  // dessert[gultenFree] is equal to false
  // if ingredients indexof flour is -1
    // set glutenFree to true
  // return dessert

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  return _.map(desserts, function(dessert, index, desserts) {
    dessert['glutenFree'] = false;
    if (dessert['ingredients'].indexOf('flour') === -1) {
      dessert['glutenFree'] = true;
    }
    return dessert;
  });
};


/*
  I - tweets (an array of tweet objects)
  O - array of strings from the key message
  C - use _.map
  E -
*/

// return _.map passing in tweets and a function that takes tweet, index, and tweets
  // return tweet[message]


// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  return _.map(tweets, function(tweet, index, tweets) {
    return tweet['message'];
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/

/*
  I - groceries (array of grocery objects), coupon (a decimal number)
  O - same groceries array adding a salePrice property to each object
  C - use _.map
  E - round decimals to 2 places
*/

// reutrn _.map passing groceries and a function that takes grocery, index, and groceries
  //grocery[salePrice] is equal to grocery[price] - (grocery[price] * coupon) rounded to
  //2 decimal places
  //return grocery


var applyCoupon = function (groceries, coupon) {
  return _.map(groceries, function(grocery, index, groceries) {
    var tempPrice = parseFloat(grocery['price'].slice(1));
    grocery['salePrice'] = '$' + (tempPrice - (tempPrice * coupon)).toFixed(2);
    return grocery;
  });
};

/*
 *
 *  _.reduce
 *
 */

/*
  I - products (array of object)
  O - single value (total of all prices)
  C - use _.reduce
  E -
*/

//return _.reduce passing in products and a function that takes accumulator and product
  //return accumulator += product[price]
//set accumulator starting value to 0

// return the total price of all products.
var sumTotal = function (products) {
  return _.reduce(products, function(accumulator, product) {
    return accumulator += parseFloat(product['price'].slice(1));
  }, 0);
};

/*
  I - desserts (array of objects)
  O - object consisting of dessert types and how many times they appear in the desserts array
  C - use _.reduce
  E -
*/


// return _.reduce passing in desserts and a function that take accumulator and dessert
  // if accumulator[dessert[type]] equals undefined
    // set accumulator[dessert[type]] equal to 0
  // add 1 to accumulator[dessert[type]]
  //return accumulator
// set inital value of accumulator to an empty object

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  return _.reduce(desserts, function(accumulator, dessert) {
    if (accumulator[dessert['type']] === undefined) {
      accumulator[dessert['type']] = 0;
    }
    accumulator[dessert['type']]++;
    return accumulator;
  }, {});
};

/*
  I - tweets ( array of tweet objects)
  O - object showing how many messages are tied to each name
  C - use _.reduce
  E -
*/

// return _.reduce passing in tweets and a function that takes accumulator and tweet
  // if accumulator[tweet[name]] is undefined
    // accumulator[tweet[name]] is equal to zero
  // accumulator[tweet[name]] plus 1
  // return accumulator


// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {
  return _.reduce(tweets, function(accumulator, tweet) {
    if (accumulator[tweet['user']] === undefined) {
      accumulator[tweet['user']] = 0;
    }
    accumulator[tweet['user']]++;
    return accumulator;
  }, {});
};

/*
  I - movies (array of movie objects)
  O - an array of movies released between 1990 and 2000
  C - use _.reduce, and an [] as the accumulator
  E -
*/

// return _.reduce passing in movies and a function which takes accumulator and movie
  // if movie[releaseYear] > 1990 and movie[releaseYear] < 2000
    // push movie title to accumulator
  // return accumulator
// set inital value of accumulator to []


// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
  return _.reduce(movies, function(accumulator, movie) {
    if (movie['releaseYear'] >= 1990 && movie['releaseYear'] <= 2000) {
      accumulator.push(movie['title']);
    }
    return accumulator;
  }, []);

};


/*
  I - movies (array of movie objects), timeLimit (number)
  O - boolean
  C - use _.reduce
  E -
*/

// var result = _.reduce passing in movies and a function which takes accumulator and movie
  // if movie[runtime] < timeLimit
    // accumulator++
    // return accumulator
// set accumulator inital value to 0
// return true if result is bigger than 0, otherwise false

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  var result = _.reduce(movies, function(accumulator, movie) {
    if (movie['runtime'] < timeLimit) {
      accumulator++;
    }
    return accumulator;
  }, 0);
  return result > 0 ? true : false;
};
