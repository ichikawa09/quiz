let question = [
    [
        "ルフィの次に麦わらの一味に入ったのは誰？",
        "①.ナミ",
        "②.サンジ",
        "③.ゾロ",
        "3"
    ],
    [
        "ルフィの誕生日は？",
        "①.5月4日",
        "②.5月5日",
        "③.5月6日",
        "2"
    ],
    [
        "イーストブルーで麦わらの一味に加わったのは何人？(ルフィも含む)",
        "①.4人",
        "②.5人",
        "③.6人",
        "2"
    ],
    [
        "ガイモンは何から抜けられなくなっていた？",
        "①.樽",
        "②.バケツ",
        "③.宝箱",
        "3"
    ],
    [
        "ルフィに一番最初についた懸賞金の額は？",
        "①.3000万ベリー",
        "②.4000万ベリー",
        "③.5000万ベリー",
        "1"
    ],
    [
        "ナミの好きなものは？",
        "①.いちご",
        "②.みかん",
        "③.りんご",
        "2"
    ],

];

//console.log(question[0][1]);

let quiz = document.getElementById('question');
let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');

let total = question.length;
let correct = 0;
let quizCount = 0;

function quizSet(){
    quiz.textContent = "Q" + (quizCount+1) + " " + question[quizCount][0];
    ans1.textContent = question[quizCount][1];
    ans2.textContent = question[quizCount][2];
    ans3.textContent = question[quizCount][3];
}

quizSet();

function answerCheck(ans){
    if(ans == question[quizCount][4]){
        alert("正解^ ^");
        correct++;
    }else{
    alert("不正解; ;");
    }
    quizCount++;
    if(quizCount == question.length){
        quiz.textContent = `正解数は${correct}/${total}でした`;
        ans1.textContent = "";
        ans2.textContent = "";
        ans3.textContent = "";
    }else{
        quizSet();
    }
}
