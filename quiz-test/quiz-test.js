var score = {
    Doer: 0,
    Thinker: 0,
    Creator: 0,
    Helper: 0,
    Persuader: 0,
    Organizer: 0
  };

function getDataAndCalculate() {
  
  var items = [];
  
  // GET the data
  axios.get("https://api.airtable.com/v0/appCZfN8YJIVjk5vJ/PersonalityNew?maxRecords=20&api_key=keyMwPvtH405pkWbz").then(function(result) {
    
    //Run below if GET successful

    items = result.data.records;
    console.log(items);

    
    //Loop through data array and add to scores
    items.forEach(function(element, index) {
      
      
      //Add to scores if swipe is YES
      if(element.fields.HOLLANDYes && element.fields.Ash==1){
          console.log(index + element.fields.HOLLANDYes[0] + element.fields.Weight);

          var points = element.fields.Weight;

          //Add the Weight-ed points to its corresponding personality type in score, looping through in case of multiple personality additions
          element.fields.HOLLANDYes.forEach(function(element){
            score[element] += points;
          });
      }
      
      
      //Add to scores if swipe is NO
      if(element.fields.HOLLANDNo && element.fields.Ash==0){
          
          var points = element.fields.Weight;

          //Add the Weight-ed points to its corresponding personality type in score, looping through in case of multiple personality additions
          element.fields.HOLLANDNo.forEach(function(element){
            score[element] += points;
          });
      }
  
    });


    $('#D').html(score.Doer / 4 * 100 + '%');
    $('#T').html(score.Thinker / 4 * 100 + '%');
    $('#C').html(score.Creator / 4 * 100 + '%');
    $('#H').html(score.Helper / 4 * 100 + '%');
    $('#P').html(score.Persuader / 4 * 100 + '%');
    $('#O').html(score.Organizer / 4 * 100 + '%');



  //If it fails  
  }).catch(function(error){
    console.log(error);
    alert("failed")
  });
  
}

getDataAndCalculate();