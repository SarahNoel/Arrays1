var numbers = [0, 1, 2, 3, 4, 5, 10, 500]

var average = function(arr){
  var total = 0;
  for (var i = 0; i < arr.length; i++){
  total += arr[i];
  }
    return total / arr.length;
  }

  var max = function(arr){
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] > result) {
        result = arr[i];

    }
  }
    return result;
  }


console.log("Your average is "  + average(numbers) +".", "Your biggest number is " + max(numbers)+".");
