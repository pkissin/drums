



// Pseduo drum

// Define the characteristics of a note (duration, accent)

// Define the different voices of the drumset (bass, floorTom, Tom1, Tom2, Snare, Crash, Ride)

// create functions that allow the properties of a note (duration, accent) and the properties of the inst. voice to be passed in (customized)

//   The functions should be setup to output the return value (a note) to the dom

// Create inputs - buttons? Or allow the user to type in values referring to a provided key (of available inputs)

// Connect everything whoo hoo

// Create template for the staff (Each note creates a new div)

//    Up to 3 sounds can be played at the same time

// Assign "play" to execute the functions created above in sequential order 



//optional - 

// Add staffs

// Add rests

// Add time signature input 

// Add tempo input


// Additional thoughts
// what's the logic around the creation of 8th and 16th notes? If there are two notes in the previous/next div, how does it know which one to be paired with?
// 

// var note = {
//  length : {
//    sixteenth: .0625,
//    eighth: .125,
//    quarter: .25,
//    half: .5,
//    whole: 1,
//    },
//  Accent : {
//        soft : 0.2,
//        medium : 0.4,
//        loud : 0.6, 
//  }
// }


// // var sound = {
// //    // bass :
// //    // floorTom :
// //    // tom1 :
// //    // tom2 :
// //    // HiHat :
// //    // Crash :
// //    // Ride :
// // }


// function drumConnecter (length, accent, voice) {
//     this.length = length;
//     this.accent = accent;
//     this.voice = voice;
// }

// var accentDial =  function (dial, decible) {
//     $( dial ).slider({
//       range: "max",
//       min: 1,
//       max: 3,
//       value: 2,
//       slide: function( event, ui, decible ) {
//         $( decible ).val( ui.value );
//             console.log(ui.value);
//       }
//     });
//     $( decible ).val( $( dial ).slider( "value" ) );

//    }



$( document ).ready(function() {
    console.log( "ready!" );



var playSequence = [];

var kick = $('#Kick-Audio');
var floor = $('#Floor-Tom-Audio');
var bigT = $('#Big-Rack-Tom-Audio');
var smallT = $('#Small-Rack-Tom-Audio');
var snare = $('#Snare-Audio');
var hiHat = $('#Hi-Hat-Closed-Audio');
var crash = $('#Crash-Audio');




$('#kick').on('click', function () {
   // accentDial("#slider-range-max","#amount");
   // accentDial("#slider-range-max-2","#amount-2");
   $("#note").append('<div class="quarter note e4"></div>');
   playSequence.push( kick);
  
})

$('#floorTom').on('click', function() {
    playSequence.push( floor );
    $("#note").append('<div class="quarter note a5"></div>');
    console.log(playSequence[1]);
});

$('#bigTom').on('click', function() {
    playSequence.push(bigT);
    $("#note").append('<div class="quarter note c5"></div>');
    console.log(playSequence[2]);
});

$('#smallTom').on('click', function() {
    playSequence.push( smallT );
    $("#note").append('<div class="quarter note e5"></div>');
});

$('#snare').on('click', function() {
    playSequence.push( snare );
    $("#note").append('<div class="quarter note g5"></div>');
});

$('#hiHat').on('click', function() {
    playSequence.push ( hiHat );
    $("#note").append('<div class="quarter note b6"></div>');
});

$('#crash').on('click', function() {
    playSequence.push( crash );
      $("#note").append('<div class="quarter note d6"></div>');
        crash.get(0).play();
    
});

$('.note:first-of-type').on('playing', function() {
  console.log('playing');

});

$('#note').on(".d6",'click', function() {
    crash.get(0).play();
    console.log("here");

  });

$('#play').on('click', function() {
   console.log(playSequence);


   for (i = 0; i < playSequence.length; i++) {
     playSequence[i].get(0).play();
   }

});



});



$('#clear').on('click', function() {
    playSequence.length = 0;

});