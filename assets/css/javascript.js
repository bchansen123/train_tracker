

var config = {
    apiKey: "AIzaSyAsLqZ1xtuKceLfZ4qnbtDuWivOkuGWY_w",
    authDomain: "trainsampleproject.firebaseapp.com",
    databaseURL: "https://trainsampleproject.firebaseio.com",
    projectId: "trainsampleproject",
    storageBucket: "trainsampleproject.appspot.com",
    messagingSenderId: "1092436836085",
    appId: "1:1092436836085:web:ae5eb34312ec731f1ccfbc",
    measurementId: "G-XJ29575ZTE"
}
firebase.initializeApp(config);
  firebase.analytics();

  var database = firebase.database();

  //Submission button of new train
  $("#submitButton").on("click", function (event){
    event.preventDefault();
    var trainName = $("#trainName").val().trim();
    var trainDestination = $("#trainDestination").val().trim();
    var trainTime = $("#trainTime").val().trim();
    var trainFrequency = $("#trainFrequency").val().trim();

    console.log(trainName);
    console.log(trainDestination);
    console.log(trainTime);
    console.log(trainFrequency);
    var newTrain = {
        name: trainName,
        destination: trainDestination,
        time: trainTime,
        frequency: trainFrequency
    };
    database.ref().push(newTrain);
    alert("Successfully added train");
    $("#trainname").val("");
    $("#trainDestination").val("");
    $("#trainTime").val("");
    $("#trainFrequency").val("");
  });

  database.ref().on("child_added", function(trainSnap) {
      console.log (trainSnap.val());
      var trainName = trainSnap.val().name;
      var trainDestination = trainSnap.val().destination;
      var trainTime = trainSnap.val().time;
      var trainFrequency = trainSnap.val().frequency;
      var arrivalTime ="";
      var minutesAway = "",
      var newValue = $("<tr>").append(
          $("<td>").text(trainName),
          $("<td>").text(trainDestination),
          $("<td>").text(trainTime),
          $("<td>").text(trainFrequency),
          $("<td>").text(arrivalTime),
          $("<td>").text(minutesAway),
      )
  })