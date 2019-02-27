// const movies = require(???);

module.exports = {
  getMovie: (request, response, next) => {
    console.log('getMovie is doing something')
    //response.locals.movies = movies;
    next();
  },
  // postMovie: (request,response) => {
  //   

  // }
};