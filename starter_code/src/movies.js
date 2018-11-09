/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes() {
  var newMovies = movies.map(function (newObj) {
    var newTime = Object.assign({}, newObj);
    return newTime;
  });
  for (i = 0; i < newMovies.length; i++) {
    newMovies[i].duration = newMovies[i].duration.replace(/h|min/g,'').split(' ');
    if (newMovies[i].duration.length === 2) {
      var hours = parseInt(newMovies[i].duration[0], 10);
      var min = parseInt(newMovies[i].duration[1], 10);
      newMovies[i].duration = [hours, min];
      newMovies[i].duration = hours * 60 + min;
    } else {
      var min = parseInt(newMovies[i].duration[0], 10);
      newMovies[i].duration = [min];
      newMovies[i].duration = min;
    }
  }
  return newMovies;
}


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
