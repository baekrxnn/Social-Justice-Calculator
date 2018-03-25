var next = "number"; 
var item1; 
var item2;

$("#plus").click(function() {
  if (next === "plus") {
    $("#equation").append(" +");
  }
  next = "number";
})

$("#equal").click(function() {
  if(next === "equal") {
    $("#result").html(result(item1, item2));
  if (item1 === undefined || item2 === undefined) {
      $("#result").html("Enter a number");
    }
    next = "nothing";
  }
  $("#result").show();
}) 
  
$("#clear").click(function() {
  $("#equation").html("");
  $("#placeholder").show();
  $("#result").hide();
  
  item1 = undefined;
  item2 = undefined;
  next = "number";
}) 



$("#zero").click(function() {
  if (next === "number") {
    $("#equation").append(" military spending");
    if (item1 === undefined) {
      item1 = "military spending";
        next = "plus";
    }
    else {
      item2 = "military spending";
        next = "equal";
    }
  }
  next = "plus";
  
  $("#placeholder").hide();
})

$("#one").click(function() {
  if (next === "number") {
  $("#equation").append(" education");
    if (item1 === undefined) {
      item1 = "education";
        next = "plus";
  } else {
    item2 = "education";
      next = "equal";
  }
}
  
  $("#placeholder").hide();
})

$("#two").click(function() {
  if (next === "number") {
  $("#equation").append(" racism");
    if (item1 === undefined) {
      item1 = "racism";
        next = "plus";
    } else {
      item2 = "racism";
        next = "equal";
    }
  }
  
  $("#placeholder").hide();
})

$("#three").click(function() {
  if (next === "number") {
  $("#equation").append(" nationalism");
    if (item1 === undefined) {
      item1 = "nationalism";
        next = "plus";
    } else {
      item2 = "nationalism";
        next = "equal";
    }
  }
  
    $("#placeholder").hide();
})

$("#four").click(function() {
  if (next === "number") {
    $("#equation").append(" free speech");
    if (item1 === undefined) {
      item1 = "free speech";
        next = "plus";
    } else {
      item2 = "free speech";
        next = "equal";
    }  
  }
  
    $("#placeholder").hide();
});

$("#five").click(function() {
  if (next === "number") {
  $("#equation").append(" economic inequality");
      if (item1 === undefined) {
      item1 = "economic inequality";
        next = "plus";
    } else {
      item2 = "economic inequality";
        next = "equal";
    }
  }
  
    $("#placeholder").hide();
})

$("#six").click(function() {
  if (next === "number") {
  $("#equation").append(" sexism");
      if (item1 === undefined) {
      item1 = "sexism";
        next = "plus";
    } else {
      item2 = "sexism";
        next = "equal";
    }
  }
  
    $("#placeholder").hide();
})

$("#seven").click(function() {
  if (next === "number") {
  $("#equation").append(" violence");
      if (item1 === undefined) {
      item1 = "violence";
        next = "plus";
    } else {
      item2 = "violence";
        next = "equal";
    }
  }
  
    $("#placeholder").hide();
})

$("#eight").click(function() {
  if (next === "number") {
  $("#equation").append(" government corruption");
      if (item1 === undefined) {
      item1 = "government corruption";
        next = "plus";
    } else {
      item2 = "government corruption";
        next = "equal";
    }
  }
  
    $("#placeholder").hide();
})

$("#nine").click(function() {
  if (next === "number") {
  $("#equation").append(" environmental problems");
      if (item1 === undefined) {
      item1 = "environmental problems";
        next = "plus";
    } else {
      item2 = "environmental problems";
        next = "equal";
    }
  }
  
    $("#placeholder").hide();
})

function result (item1, item2) {
  console.log(item1);
  console.log(item2);
  if((item1 === "military spending" && item2 === "nationalism") || (item1 === "military spending" && item2 === "violence" ) ||
     (item1 === "nationalism" && item2 === "violence") || 
     
     (item1 === "nationalism" && item2 === "military spending") || (item1 === "violence" && item2 === "military spending" ) || 
     (item1 === "violence" && item2 === "military spending" )) 
     {
       return("<a href='https://en.wikipedia.org/wiki/World_War_II' target='_blank' title='click for more info'>war</a>");
     }
      else if ((item1 === "military spending" && item2 === "government corruption") || (item1 === "nationalism" && item2 === "sexism") || 
                (item1 === "racism" && item2 === "government corruption") || (item1 === "nationalism" && item2 === "government corruption") ||
                (item1 === "economic inequality" && item2 === "racism") || (item1 === "economic inequality" && item2 === "government corruption") ||
                (item1 === "military spending" && item2 === "economic inequality") || 
               
               (item1 === "government corruption" && item2 === "military spending" )
              || (item1 === "sexism" && item2 === "nationalism") || (item1 === "government corruption" && item2 === "racism") 
               || (item1 === "government corruption" && item2 === "nationalism") || (item1 === "racism" && item2 === "economic inequality") 
               || (item1 === "government corruption" && item2 === "economic inequality") || (item1 === "economic inequality" && item2 === "military spending") )
     {
       return("social injustice");
     }
      else if ((item1 === "sexism" && item2 === "racism") || (item1 === "education" && item2 === "sexism") ||
               (item1 === "sexism" && item2 === "economic inequality") || (item1 === "education" && item2 === "sexism") ||
        
              (item1 === "racism" && item2 === "sexism") || (item1 === "sexism" && item2 === "education") || 
              (item1 === "econmic inequality" && item2 === "sexism") || (item1 === "sexism" && item2 === "education")) {
      return("<a href='https://bit.ly/2eQWYh8' target='_blank' title='click for more info'>discrimination</a>");
      }
      else if ((item1 === "racism" && item2 === "free speech") || (item1 === "sexism" && item2 === "free speech") ||
              (item1 === "violence" && item2 === "free speech") || (item1 === "nationalism" && item2 === "free speech") ||
               
              (item1 === "free speech" && item2 === "racism") || (item1 === "feee speech" && item2 === "sexism ") ||
              (item1 === "fee speech" && item2 === "violence") || (item1 === "free speech " && item2 === "nationalism"))
      {
        return("<a href='https://en.wikipedia.org/wiki/Hate_speech'target='_blank' title='click for more info'> hate speech</a>"); 
      }
      else if ((item1 === "education" && item2 === "free speech") || (item1 === "education" && item2 === "government corruption") ||
              (item1 === "education" && item2 === "environmental problems") || (item1 === "education" && item2 === "economic inequality") ||
              
              (item1 === "free speech" && item2 === "education") || (item1 === "government corruption" && item2 === "education") ||
              (item1 === "environmental problems" && item2 === "education") || (item1 === "economic inequality" && item2 === "education"))
     {
        return("<a href='https://www.nytimes.com/2018/03/24/us/march-for-our-lives.html' title='click for more info'>activism</a>");
      }
      else if ((item1 === "violence " && item2 === "racism") || (item1 === "violence" && item2 === "economic inequality") ||
               
              (item1 === "racism" && item2 === "violence") || (item1 === "economic inequality" && item2 === "violence"))
      {
       return("<a href='https://wapo.st/2uhSzwJ' target='_blank' title='click for more info'>riots</a>");
      }
      else if ((item1 === "violence" && item2 === "sexism") || (item1 === "sexism" && item2 === "violence")) 
      { 
       return("<a href='https://usat.ly/2lkJdeS' target='_blank' title='click for more info'>sexual harassment/assault</a>");
      }
      else if ((item1 === "military spending" && item2 === "racism") || (item1 === "government corruption" && item2 === "racism")
               
              || (item1 === "racism" && item2 === "military spending") || (item1 === "racism" && item2 === "government corruption"))
      {
       return("<a href='https://bit.ly/2GqbhqH' target='_blank' title='click for more info'>ethnic cleansing</a>"); 
      }
      else if ((item1 === "military spending" && item2 === "environmental problems") || (item1 === "violence" && item2 === "environmental problems") ||
              (item1 === "government corruption" && item2 === "environmental problems") ||
              
              (item1 === "environmental problems" && item2 === "military") || (item1 === "environmental problems" && item2 === "violence") ||
              (item1 === "enviromental problems" && item2 === "government problems"))
      {
        return("<a href='https://en.wikipedia.org/wiki/Environmental_impact_of_war' target='_blank' title='click for more info'>environmental damage</a>");
      }
      else if ((item1 === "nationalism" && item2 === "education") || (item1 === "education" && item2 === "nationalism"))
      {
        return("<a href='https://cnn.it/2GaJtDi' target='_blank' title='click for more info'>propaganda</a>");
      } 
      else if (item1 === item2){
        return(item1);
      }
  else {
  return("<a href='https://www.google.com/' target='_blank' title='click for more info'>let's ask google</a>");
      }
  
}
