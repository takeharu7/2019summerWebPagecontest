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
    const questions = ["象", "フクロモモンガ", "ヤギ", "キツネ", "ひよこ", "蚊", "イノシシ"];

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
        if (displayArea.innerText === "象" && answer === "elephant") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だパオーン！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "象" && answer !== "elephant") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だパオーン！10のダメージを負った！";

        } else if (displayArea.innerText === "フクロモモンガ" && answer === "sugerglider") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だアン！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "フクロモモンガ" && answer !== "sugerglider") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解アン！10のダメージを負った";

        } else if (displayArea.innerText === "ヤギ" && answer === "goat") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だメー！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "ヤギ" && answer !== "goat") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だメー！10のダメージを負った";

        } else if (displayArea.innerText === "キツネ" && answer === "fox") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だコン！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "キツネ" && answer !== "fox") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だコン！10のダメージを負った";

        } else if (displayArea.innerText === "ひよこ" && answer === "chick") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だピヨ！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "ひよこ" && answer !== "chick") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だピヨ！10のダメージを負った";

        } else if (displayArea.innerText === "蚊" && answer === "mosquito") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だブーン！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "蚊" && answer !== "mosquito") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だブーン！10のダメージを負った";

        } else if (displayArea.innerText === "イノシシ" && answer === "boar") {
            page.style.backgroundColor = "yellow";
            enemyHP = enemyHP - 10;
            displayArea.innerText = "正解だプギ！敵に10のダメージを与えた！";

        } else if (displayArea.innerText === "イノシシ" && answer !== "boar") {
            page.style.backgroundColor = "red";
            myHP = myHP - 10;
            displayArea.innerText = "不正解だプギ！10のダメージを負った";
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