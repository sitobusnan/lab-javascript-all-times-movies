/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(newObject) {
  console.log(newObject)
  var modifiedObject = [];
  //newObject.forEach(function(element){
  //  console.log(element.duration)
  //})
  modifiedObject = newObject.map(function(element){
    if(typeof(element.duration) != 'number'){
      if (element.duration.length < 4){
        element.duration = parseInt (element.duration) * 60; 
      }
      else if(element.duration.length === 4 || element.duration.length === 5){
        element.duration = parseInt (element.duration);
        
      }
      else{
        element.duration = parseInt(element.duration.split(" ")[0]) * 60 + parseInt(element.duration.split(" ")[1])
  
      }
    }
    
    
    return element;
  })
  return modifiedObject;
  //newObject.forEach(function(element) {
  //  console.log(elemet.duration)
  //  minutes = element.duration;
  //  if((minutes.indexOf('h'))!=-1||(minutes.indexOf('m')!=-1)){
  //    //console.log(minutes)
  //    minutes = minutes.split(' ');
  //    if (minutes.length == 2) {
  //      minutes = parseInt(minutes[0]) * 60 + parseInt(minutes[1]);
  //    } else 
  //    {
  //      if (minutes[0].length > 3) 
  //      {
  //        minutes = parseInt(minutes[0]);
  //      } else {
  //        minutes = parseInt(minutes[0]) * 60;
  //      }
  //    }
  //  }
  //
//
  //  //console.log(minutes);
  //  element.duration = minutes;
//
  //  Objreturn.push(element);
  //});

  //return Objreturn;
}

// Get the average of all rates with 2 decimals

function ratesAverage(arrAv) {
  var calcAv = [];
  var average = 0;
  arrAv.forEach(function(element) {
    calcAv.push(element.rate);
  });
  calcAv.forEach(function(element) {
    average = average + element;
  });
  average = parseFloat(average / calcAv.length);
  return average;
}

// Get the average of Drama Movies

function dramaMoviesRate(arrDramaAverage) {
  var dramaAverage = [];
  dramaAverage = arrDramaAverage.filter(function(element) {
    return element.genre.indexOf("Drama") != -1;
  });
  if (dramaAverage.length == 0) {
    dramaAverage = undefined;
    return dramaAverage;
  }
  //dramaAverage = dramaAverage.reduce(function(a,b){
  //return a + b
  //})
  
  
  return ratesAverage(dramaAverage);
  //console.log(dramaAverage)
  //return dramaAverage
}

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
