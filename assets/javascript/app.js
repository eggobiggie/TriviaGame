$(document).ready(function() {
    
      
    
      var questionBank = {
          
    
        currentQuestion: 1,
        question1: {
            fearQuestion: "What is Jackie Chan afraid of?",
            fearAnswer1: {
                text: "Needles",
                correct: true
            },
            fearAnswer2: {
                text: "Spiders",
                correct: false
            },
            fearAnswer3: {
                text: "Heights",
                correct: false
            },
            fearAnswer4: {
                text: "Snakes",
                correct: false
            }
        },
    
        // currentQuestion: 2,
        question2: {
            debutQuestion: "At what age did Jackie Chan make his film debut?",
            debutAnswer1: {
                text: "4",
                correct: false
            },
            debutAnswer2: {
                text:"21",
                correct: false
            },
            debutAnswer3: {
                text: "17",
                correct: false
            },
            debutAnswer4: {
                text: "8",
                correct: true
            }
        },
    
        // currentQuestion: 3,
        question3: {
            nameQuestion: "Jackie Chan's birthname is Chan Kong-San which means:",
            nameAnswer1: {
                text: "Born in the countryside",
                correct: false
            },
            nameAnswer2: {
                text: "Born in Hong Kong",
                correct: true
            },
            nameAnswer3: {
                text: "Born in the city",
                correct: false
            },
            nameAnswer4: {
                text: "Born in Beijing",
                correct: false
            }
        },
    
        // currentQuestion: 4,
        question4: {
            noseQuestion: "How many times has Jackie Chan broken his nose?",
            noseAnswer1: {
                text: "1",
                correct: false
            },
            noseAnswer2: {
                text: "7",
                correct: false
            },
            noseAnswer3: {
                text: "3",
                correct: true
            },
            noseAnswer4: {
                text: "5",
                correct: false
            }
        },
    
        // currentQuestion: 5,
        question5: {
            recordQuestion: 'Jackie Chan holds two world records. One is "Most Stunts by a Living Actor". The second one is:',
            recordAnswer1: {
                text: "Most credits in one movie",
                correct: true
            },
            recordAnswer2: {
                text: "Most injuries in film productions",
                correct: false
            },
            recordAnswer3: {
                text: "Most appearances in films",
                correct: false
            },
            recordAnswer4: {
                text: "Most bones broken from a single injury",
                correct: false
            }
          }
        }

        var correct = 0;
        var incorrect = 0;
        var unanswered = 0;

        $(".startText").on("click", function() {

            //Initial question and answers
            $(".startText").hide();
            $("#time-remaining").show();
            $("#question").text(questionBank.question1.fearQuestion).show();
            $("#answer1").text(questionBank.question1.fearAnswer1.text).show();
            $("#answer2").text(questionBank.question1.fearAnswer2.text).show();
            $("#answer3").text(questionBank.question1.fearAnswer3.text).show();
            $("#answer4").text(questionBank.question1.fearAnswer4.text).show();

            $("#answer1").on("click", function() {
                $("#win-text").show();
                $("#win-gif").html("<img src='./assets/images/jackieladder.gif' class='center-block'>").show();
                $("#question").text(questionBank.question1.fearQuestion).hide();
                $("#answer1").text(questionBank.question1.fearAnswer1.text).hide();
                $("#answer2").text(questionBank.question1.fearAnswer2.text).hide();
                $("#answer3").text(questionBank.question1.fearAnswer3.text).hide();
                $("#answer4").text(questionBank.question1.fearAnswer4.text).hide();
                correct++;
            });

            $("#answer2").on("click", function() {
                question1IncorrectFunction();
                $("#correct-answer").text(questionBank.question1.fearAnswer1.text).show();                               
            });

            $("#answer3").on("click", function() {
                question1IncorrectFunction();
                $("#correct-answer").text(questionBank.question1.fearAnswer1.text).show();                       
            });

            $("#answer4").on("click", function() {
                question1IncorrectFunction();
                $("#correct-answer").text(questionBank.question1.fearAnswer1.text).show();                                
            });

            //FUNCTION for if the clicked answer is incorrect
            function question1IncorrectFunction() {
                $("#lose-text").text("Sorry, that's wrong!").show();
                $("#correct-answer-text").show();
                $("#lose-gif").html("<img src='./assets/images/jackiehahano.gif' class='center-block'>").show();
                $("#question").text(questionBank).hide();
                $("#answer1").text(questionBank).hide();
                $("#answer2").text(questionBank).hide();
                $("#answer3").text(questionBank).hide();
                $("#answer4").text(questionBank).hide();    
                incorrect++;
                console.log(incorrect);
            }

            //FUNCTION for timeout/unanswered
            function outtaTime() {
                $("#lose-text").text("You ran out of time!");
                $("#correct-answer-text").show();
                $("#lose-gif").html("<img src='./assets/images/jackiewindface.gif' class='center-block'>").show();
                $("#question").text(questionBank).hide();
                $("#answer1").text(questionBank).hide();
                $("#answer2").text(questionBank).hide();
                $("#answer3").text(questionBank).hide();
                $("#answer4").text(questionBank).hide();
                unanswered++;
                console.log(unanswered);
            }

            // TIMER for 30 second interval
            var number = 30;
            var intervalId;

            function run() {
                intervalId = setInterval(decrement, 1000);
            }

            function stop() {
                clearInterval(intervalId);
            }
    
            function decrement() {
                number--;
                $("#time-counter").html(number);
                if (number === 0) {
                    stop();
                    run1();
                    outtaTime();
                }
            }

            run();
            
            // TIMER for 5 second interval
            var number1 = 5;
            var intervalId1;

            function run1() {
                intervalId1 = setInterval(decrement1, 1000);
            }

            function decrement1() {
                number1--;
                console.log(number1);
                if (number1 === 0) {
                    stop1();
                    number = 30;
                    run();
                    $("#time-remaining").show();
                    $("#question").text(questionBank.question2.debutQuestion).show();
                    $("#answer1").text(questionBank.question2.debutAnswer1.text).show();
                    $("#answer2").text(questionBank.question2.debutAnswer2.text).show();
                    $("#answer3").text(questionBank.question2.debutAnswer3.text).show();
                    $("#answer4").text(questionBank.question2.debutAnswer4.text).show();
                    $("#lose-text").text("You ran out of time!").hide();
                    $("#correct-answer-text").hide();
                    $("#correct-answer").text(questionBank.question1.fearAnswer1.text).hide();
                    $("#lose-gif").html("<img src='./assets/images/jackiewindface.gif' class='center-block'>").hide();
                } 
            }

            function stop1() {
                clearInterval(intervalId1);
            }



    

            
        });

   


    // end of document.ready    
    });