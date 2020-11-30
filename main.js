var quiz = [
   
         {
            "id":1,
            "question": "Which of the following is wrongly spelt",
            "answers" : 
            [
                { id : 1 , description : "exaggeration" },
                { id : 2 , description : "accommodate" },
                { id : 3 , description : "aquaintance" },
                { id : 4 , description : "acquire" },
            ],
            "correct" : 3,
        },

        {
            "id":2,
            "question": "Who won IPL 2020 ?",
            "answers" : 
            [
                { id : 1 , description : "MI" },
                { id : 2 , description : "DC" },
                { id : 3 , description : "RCB" },
                { id : 4 , description : "KKR" },
            ],
            "correct" : 3,
        },

        {
            "id":3,
            "question": "What is GDP of India as per 2020 statistics?",
            "answers" : 
            [
                { id : 1 , description : "20 Million USD" },
                { id : 2 , description : "14 Million USD" },
                { id : 3 , description : "1 Million USD" },
                { id : 4 , description : "4 Million USD" },
            ],
            "correct" : 4,
        },

        {
            "id":4,
            "question": "Find odd man out?",
            "answers" : 
            [
                { id : 1 , description : "MERN stack" },
                { id : 2 , description : "MEAN stack" },
                { id : 3 , description : ".net Core" },
                { id : 4 , description : "Data Science" },
            ],
            "correct" : 4,
        },
    
];

var i =0;
var id =0;
var organs=0;
var usrans=0;
var correct = 0;
var len = quiz.length;

document.getElementById("start").addEventListener("click" , function begin(){
    showquiz();
    document.getElementById("next").style.display = "inline";
    document.getElementById("start").style.display = "none";
} )

function showquiz(){
 
    if(i<len)
   {organs = quiz[i].correct;
    document.getElementById("ques").innerHTML = quiz[i].id+".) "+ quiz[i].question;
    document.getElementById("opta").innerHTML = quiz[i].answers[0].description ;
    document.getElementById("opta").style = "inline";
    document.getElementById("optb").innerHTML = quiz[i].answers[1].description ;
    document.getElementById("optb").style = "inline";
    document.getElementById("optc").innerHTML = quiz[i].answers[2].description ;
    document.getElementById("optc").style = "inline";
    document.getElementById("optd").innerHTML = quiz[i].answers[3].description ;
    document.getElementById("optd").style = "inline";
    i++;
   }
   else
   {
       finish();
       return ; 
   }
}
document.getElementById("next").addEventListener("click" , function next(){
    if(i>len){
        return;
    }
    if(usrans == organs)
        correct++;
    showquiz();
})

document.getElementById("opta").addEventListener("click", function optionA(){
    usrans =1;
})
document.getElementById("optb").addEventListener("click", function optionB(){
    usrans =2;
})
document.getElementById("optc").addEventListener("click", function optionC(){
    usrans =3;
})
document.getElementById("optd").addEventListener("click", function optionD(){
    usrans =4;
})
function finish(){
    document.getElementById("opta").style.display = "none";
    document.getElementById("optb").style.display = "none";
    document.getElementById("optc").style.display = "none";
    document.getElementById("optd").style.display = "none";
    document.getElementById("next").style.display = "none";

    document.getElementById("ques").innerHTML = "Your Score is "+correct+"/"+len;
    return;
}