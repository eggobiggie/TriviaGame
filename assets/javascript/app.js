$(document).ready(function() {
     
      var questionBank = {

            //Gifs applicable to each question set
            incorrectGifHTML: "<img src='./assets/images/jackiehahano.gif' class='center-block'>",
            outtaTimeGif: "<img src='./assets/images/jackiewindface.gif' class='center-block'>",

            questionList: [{
                //Question 1 
                question: "What is Jackie Chan afraid of?",
                answerList: ["Needles", "Spiders", "Heights", "Snakes"],
                correctAnswer: 0,
                correctGifHTML: "<img src='./assets/images/jackieladder.gif' class='center-block'>"
            }, {
                //Question 2
                question: "At what age did Jackie Chan make his film debut?",
                answerList: ["4", "21", "17", "8"],
                correctAnswer: 3,
                correctGifHTML: "<img src='./assets/images/jackieheadbob.gif' class='center-block'>"
            }, {
                //Question 3
                question: "Jackie Chan's birthname is Chan Kong-San, which means:",
                answerList: ["Born in the countryside", "Born in Hong Kong", "Born in the city", "Born in Beijing"],
                correctAnswer: 1,
                correctGifHTML: "<img src='./assets/images/jackiethumbsup.gif' class='center-block'>"   
            }, {
                //Question 4
                question: "How many times has Jackie Chan broken his nose?",
                answerList: ["1", "7", "3", "5"],
                correctAnswer: 2,
                correctGifHTML: "<img src='./assets/images/jackiechunli.gif' class='center-block'>"
            }, {
                //Question 5
                question: 'Jackie Chan holds two world records. One is "Most Stunts by a Living Actor". The second one is:',
                answerList: ["Most credits in one movie", "Most injuries in film productions", "Most appearances in films", "Most bones broken from a single injury"],
                correctAnswer: 0,
                correctGifHTML: "<img src='./assets/images/jackiedance.gif' class='center-block'>"   
            }]
        };

        //Iterate through the questions and answers
        for (i = 0; i < questionBank.questionList.length; i++) {
            console.log(questionBank.questionList[i]);
                for (j = 0; j < questionBank.questionList[i].answerList.length; j++) {
                    console.log(questionBank.questionList[i].answerList[j]);
                }
        }

    var clickedAnswer;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var currentQuestionNum = 0;

    $(".startText").on("click", function() {

        //Hide Start Button
        $(".startText").hide();
        check();
        run();
        
        
        
       
        function check() {
            if (currentQuestionNum === 0) {
                 //First Question Displayed
                $("#time-remaining").show();
                $("#question").text(questionBank.questionList[0].question).show();
                $("#answer1").text(questionBank.questionList[currentQuestionNum].answerList[0]).show();
                $("#answer2").text(questionBank.questionList[currentQuestionNum].answerList[1]).show();
                $("#answer3").text(questionBank.questionList[currentQuestionNum].answerList[2]).show();
                $("#answer4").text(questionBank.questionList[currentQuestionNum].answerList[3]).show();

                // run();

                $("#answer1").on("click", function() {
                    clickedAnswer = 0;
                    correctAnswer1Function();
                    run1();
                    stop();
                    number1 = 5;
                });

                $("#answer2").on("click", function() {
                    clickedAnswer = 1;
                    correctAnswer1Function();
                    run1();
                    stop();
                    number1 = 5;
                });

                $("#answer3").on("click", function() {
                    clickedAnswer = 2;
                    correctAnswer1Function();
                    run1();
                    stop();
                    number1 = 5;
                });

                $("#answer4").on("click", function() {
                    clickedAnswer = 3;
                    correctAnswer1Function();
                    run1();
                    stop();
                    number1 = 5;
                });

            } else if (currentQuestionNum === 1) {
                //SHOWS QUESTION 2
                $("#correct-answer-text").hide();
                $("#correct-answer").text(questionBank.questionList[0].answerList[0]).hide();
                $("#win-text").hide();
                $("#win-gif").html(questionBank.questionList[0].correctGifHTML).hide();
                $("#lose-text").hide();
                $("#lose-gif").html(questionBank.incorrectGifHTML).hide();
                $("#question").text(questionBank.questionList[1].question).show();
                $("#answer1").text(questionBank.questionList[1].answerList[0]).show();
                $("#answer2").text(questionBank.questionList[1].answerList[1]).show();
                $("#answer3").text(questionBank.questionList[1].answerList[2]).show();
                $("#answer4").text(questionBank.questionList[1].answerList[3]).show();
                console.log(currentQuestionNum);

            } else if (currentQuestionNum === 2) {
                //SHOWS QUESTION 3
                $("#correct-answer-text").hide();
                $("#correct-answer").text(questionBank.questionList[0].answerList[0]).hide();
                $("#win-text").hide();
                $("#win-gif").html(questionBank.questionList[0].correctGifHTML).hide();
                $("#lose-text").hide();
                $("#lose-gif").html(questionBank.incorrectGifHTML).hide();
                $("#question").text(questionBank.questionList[2].question).show();
                $("#answer1").text(questionBank.questionList[2].answerList[0]).show();
                $("#answer2").text(questionBank.questionList[2].answerList[1]).show();
                $("#answer3").text(questionBank.questionList[2].answerList[2]).show();
                $("#answer4").text(questionBank.questionList[2].answerList[3]).show();
                console.log(currentQuestionNum);

            } else if (currentQuestionNum === 3) {
                //SHOWS QUESTION 4
                $("#correct-answer-text").hide();
                $("#correct-answer").text(questionBank.questionList[0].answerList[0]).hide();
                $("#win-text").hide();
                $("#win-gif").html(questionBank.questionList[0].correctGifHTML).hide();
                $("#lose-text").hide();
                $("#lose-gif").html(questionBank.incorrectGifHTML).hide();
                $("#question").text(questionBank.questionList[3].question).show();
                $("#answer1").text(questionBank.questionList[3].answerList[0]).show();
                $("#answer2").text(questionBank.questionList[3].answerList[1]).show();
                $("#answer3").text(questionBank.questionList[3].answerList[2]).show();
                $("#answer4").text(questionBank.questionList[3].answerList[3]).show();

            } else if (currentQuestionNum === 4) {
                //SHOWS QUESTION 5
                $("#correct-answer-text").hide();
                $("#correct-answer").text(questionBank.questionList[0].answerList[0]).hide();
                $("#win-text").hide();
                $("#win-gif").html(questionBank.questionList[0].correctGifHTML).hide();
                $("#lose-text").hide();
                $("#lose-gif").html(questionBank.incorrectGifHTML).hide();
                $("#question").text(questionBank.questionList[4].question).show();
                $("#answer1").text(questionBank.questionList[4].answerList[0]).show();
                $("#answer2").text(questionBank.questionList[4].answerList[1]).show();
                $("#answer3").text(questionBank.questionList[4].answerList[2]).show();
                $("#answer4").text(questionBank.questionList[4].answerList[3]).show();

            } else if (currentQuestionNum === 5) {
                
                //SHOWS END GAME TALLY
                $("#final-tally").show();
                $("#correct-tally").show();
                $("#correct-tally-score").text(correct).show();
                $("#incorrect-tally").show();
                $("#incorrect-tally-score").text(incorrect).show();
                $("#unanswered-tally").show();
                $("#unanswered-tally-score").text(unanswered).show();
                $("#start-over").show();
                $("#win-text").hide();
                $("#win-gif").html(questionBank.questionList[0].correctGifHTML).hide();
                $("#lose-text").hide();
                $("#lose-gif").html(questionBank.incorrectGifHTML).hide();
                $("#time-remaining").hide();
                $("#correct-answer-text").hide();
                $("#correct-answer").text(questionBank.questionList[0].answerList[0]).hide();
                stop();
                stop1();
                hideStuff();
                resetStuff();                 
            }
        }


        //Correct Answer Function
        function correctAnswer1Function() {
            
        if (clickedAnswer === questionBank.questionList[currentQuestionNum].correctAnswer) {
                correct++;
                $("#win-text").show();
                $("#win-gif").html(questionBank.questionList[0].correctGifHTML).show();
                $("#question").text(questionBank.questionList[0].question).hide();
                $("#answer1").text(questionBank.questionList[0].answerList[0]).hide();
                $("#answer2").text(questionBank.questionList[0].answerList[1]).hide();
                $("#answer3").text(questionBank.questionList[0].answerList[2]).hide();
                $("#answer4").text(questionBank.questionList[0].answerList[3]).hide();
                console.log("yes");
                    if (currentQuestionNum === 1) {
                        $("#win-gif").html(questionBank.questionList[0].correctGifHTML).hide();
                        $("#win-gif").html(questionBank.questionList[1].correctGifHTML).show();
                    } else if (currentQuestionNum === 2) {
                        $("#win-gif").html(questionBank.questionList[0].correctGifHTML).hide();
                        $("#win-gif").html(questionBank.questionList[2].correctGifHTML).show();
                    } else if (currentQuestionNum === 3) {
                        $("#win-gif").html(questionBank.questionList[0].correctGifHTML).hide();
                        $("#win-gif").html(questionBank.questionList[3].correctGifHTML).show();
                    } else if (currentQuestionNum === 4) {
                        $("#win-gif").html(questionBank.questionList[0].correctGifHTML).hide();
                        $("#win-gif").html(questionBank.questionList[4].correctGifHTML).show();
                    }
            } else {
                incorrect++;
                $("#lose-text").show();
                $("#lose-gif").html(questionBank.incorrectGifHTML).show();
                $("#question").text(questionBank.questionList[0].question).hide();
                $("#answer1").text(questionBank.questionList[0].answerList[0]).hide();
                $("#answer2").text(questionBank.questionList[0].answerList[1]).hide();
                $("#answer3").text(questionBank.questionList[0].answerList[2]).hide();
                $("#answer4").text(questionBank.questionList[0].answerList[3]).hide();
                $("#correct-answer-text").show();
                $("#correct-answer").text(questionBank.questionList[0].answerList[0]).show();
                console.log("no");
                if (currentQuestionNum === 1) {
                    $("#correct-answer").text(questionBank.questionList[1].answerList[3]).show();
                } else if (currentQuestionNum === 2) {
                    $("#correct-answer").text(questionBank.questionList[2].answerList[1]).show();
                } else if (currentQuestionNum === 3) {
                    $("#correct-answer").text(questionBank.questionList[3].answerList[2]).show();
                } else if (currentQuestionNum === 4) {
                    $("#correct-answer").text(questionBank.questionList[4].answerList[0]).show();
                }
            }
        }

        // TIMER for 30 second interval
           var number = 31;
           var intervalId;

           function run() {
               intervalId = setInterval(decrement, 1000);
           }

           function decrement() {
               number--;
               $("#time-counter").html(number);
               if (number === 0) {
                   number1 = 5;
                   stop();
                   run1();
               }
           }

           function stop() {
            clearInterval(intervalId);
        }

           //FIVE SECOND COUNTDOWN
            var number1 = 5;
            var intervalId1;

            function run1() {
                intervalId1 = setInterval(decrement1, 1000);
            }

            function decrement1() {
                number1--;
                console.log(number1);
                if (number1 === 0) {
                    number = 31;
                    stop1();
                    run();
                    currentQuestionNum++;
                    check();
                }
            }

            function stop1() {
                clearInterval(intervalId1);
            }

            function resetStuff() {
                $("#start-over").on("click", function() {
                    correct = 0;
                    incorrect = 0;
                    unanswered = 0;
                    currentQuestionNum = 0;
                    number1 = 5;
                    number = 31;
                    stop1();
                    stop();
                    run();
                });
            }
            
    //END OF STARTEXT CLICK FUNCTION
    });    

    function hideStuff() {
        $("#start-over").on("click", function() {
            $("#start-over").hide();
            $("#final-tally").hide();
            $("#correct-tally").hide();
            $("#correct-tally-score").text(correct).hide();
            $("#incorrect-tally").hide();
            $("#incorrect-tally-score").text(incorrect).hide();
            $("#unanswered-tally").hide();
            $("#unanswered-tally-score").text(unanswered).hide();
            $("#time-remaining").show();
            $("#question").text(questionBank.questionList[0].question).show();
            $("#answer1").text(questionBank.questionList[0].answerList[0]).show();
            $("#answer2").text(questionBank.questionList[0].answerList[1]).show();
            $("#answer3").text(questionBank.questionList[0].answerList[2]).show();
            $("#answer4").text(questionBank.questionList[0].answerList[3]).show();
        });
    }
    
    

// end of document.ready    
});