(function () {
    'use strict';

    const displayArea = document.getElementById("display-area");
    const page = document.getElementById("page");
    const assessmentbutton = document.getElementById("assessment");
    const wordInput = document.getElementById("word");
    const nextbutton = document.getElementById("next");
    const enemyArea = document.getElementById("enemy-area");

    //敵と自分のHP
    var enemyHP = 50;
    var myHP = 20;

    //クイズの質問
    const questions = ["雌牛", "カエル", "馬", "ライオン", "ねずみ", "猿", "コウモリ"];


    start();
    console.log(questions.length);
    //ランダム関数
    function random() {
        for (let i = questions.length - 1; i >= 0; i--) {
            i = Math.floor(Math.random() * questions.length);
            return i;
        }
    }
    //クイズスタート
    function start() {
        console.log('始まり');
        //自動で入力欄にフォーカス
        document.getElementById("word").focus();
        //入力欄を空にする
        wordInput.value = null;
        page.style.backgroundColor = "white";
        let i = random();
        console.log(questions[i]);
        displayArea.innerText = questions[i];
        questions.splice(i, 1);
        console.log(questions);
        //次へ進むボタンを無効
        nextbutton.disabled = "disabled";
    }

    assessmentbutton.onclick = () => {
        //次へ進むボタンを有効
        nextbutton.disabled = "";
        var answer = wordInput.value;
        //大文字でも小文字でもOKにする
        answer = answer.toLowerCase();
        console.log(answer);

        //答え合わせ
        if (displayArea.innerText === "雌牛" && answer === "cow") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だモー！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "雌牛" && answer !== "cow") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だモー！10のダメージを負った！";

        } else if (displayArea.innerText === "カエル" && answer === "frog") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だケロ！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "カエル" && answer !== "frog") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解ケロ！10のダメージを負った";

        } else if (displayArea.innerText === "馬" && answer === "horse") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だヒヒーン！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "馬" && answer !== "horse") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だヒヒーン！10のダメージを負った";

        } else if (displayArea.innerText === "ライオン" && answer === "lion") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だガオ！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "ライオン" && answer !== "lion") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だガオ！10のダメージを負った";

        } else if (displayArea.innerText === "ねずみ" && answer === "mouse") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だチュー！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "ねずみ" && answer !== "mouse") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だチュー！10のダメージを負った";

        } else if (displayArea.innerText === "猿" && answer === "monkey") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だウキー！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "猿" && answer !== "monkey") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だウキー！10のダメージを負った";

        } else if (displayArea.innerText === "コウモリ" && answer === "bat") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だキィキィ！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "コウモリ" && answer !== "bat") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だキィキィ！10のダメージを負った";
        }

        console.log("enemyHP = " + enemyHP);
        console.log("myHP = " + myHP);

        if (enemyHP === 0) {
            //次へ進むボタンをなくす
            nextbutton.style.display = "none";
            win();
        } else if (myHP === 0) {
            //次へ進むボタンをなくす
            nextbutton.style.display = "none";
            lose();
        }
        nextbutton.onclick = () => {
            start();
        }
    }

    //勝利したとき
    function win() {
        console.log('勝ちました');
        page.style.backgroundColor = "white";
        displayArea.innerText = "おめでとうございます！敵を撃破しました。GAME CLEAR";
        displayArea.style.color = "gold";
        var deg = 0;
        //敵を回転
        function rotateEnemy() {
            deg = deg + 6;
            enemyArea.style.transform = 'rotateZ(' + deg + 'deg)';
        }
        setInterval(rotateEnemy, 20);

        //花火ページへ
        function hanabi() {
            location.href = "hanabi.html";
        }
        setTimeout(hanabi, 5000);
    }

    //負けたとき
    function lose() {
        console.log('負けました');
        page.style.backgroundColor = "darkred";
        displayArea.innerText = "残念！敵に倒されました。GAME OVER";
        displayArea.style.color = "blue";
    }
})();