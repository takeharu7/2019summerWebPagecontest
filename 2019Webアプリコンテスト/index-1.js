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
    const questions = ["犬", "猫", "鳥", "うさぎ", "豚", "蛇", "亀"];

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
        if (displayArea.innerText === "犬" && answer === "dog") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だわん！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "犬" && answer !== "dog") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だわん！10のダメージを負った！";

        } else if (displayArea.innerText === "猫" && answer === "cat") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だにゃー！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "猫" && answer !== "cat") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だにゃー！10のダメージを負った";

        } else if (displayArea.innerText === "鳥" && answer === "bird") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だピピッ！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "鳥" && answer !== "bird") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だピピッ！10のダメージを負った";

        } else if (displayArea.innerText === "うさぎ" && answer === "rabbit") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だぴょん！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "うさぎ" && answer !== "rabbit") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だぴょん！10のダメージを負った";

        } else if (displayArea.innerText === "豚" && answer === "pig") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だブー！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "豚" && answer !== "pig") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だブー！10のダメージを負った";

        } else if (displayArea.innerText === "蛇" && answer === "snake") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だニョロ！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "蛇" && answer !== "snake") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だニョロ！10のダメージを負った";

        } else if (displayArea.innerText === "亀" && answer === "turtle") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だノロ！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "亀" && answer !== "turtle") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だノロ！10のダメージを負った";
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