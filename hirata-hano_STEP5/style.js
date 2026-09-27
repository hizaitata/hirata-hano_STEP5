//追加ボタン関連

// テーブルの行数を更新する
function updateLineCount() {
    var tableBody = document.querySelector("#text-table tbody");
    var lineCount = document.getElementById("line-count");
    var displayBtn = document.getElementById("display");
    var count = tableBody ? tableBody.rows.length : 0;

    if (lineCount) {
        lineCount.textContent = count;
    }

    if (displayBtn) {
        displayBtn.hidden = count >= 3;
    }
}

// 入力値を取得してテーブルに追加する、追加ボタン関係の処理
function getInputValue() {
    var input = document.getElementById("text-input");
    var text = input.value.trim();

    if (text === "") {
        return;
    }

    var tableBody = document.querySelector("#text-table tbody");
    var row = tableBody.insertRow();
    var textCell = row.insertCell(0);
    var actionCell = row.insertCell(1);

    textCell.textContent = text;

    var deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", function () {
        row.remove();
        updateLineCount();
    });

    actionCell.appendChild(deleteButton);

    // 最大3件まで保持。4件目は古い順に削除
    if (tableBody.rows.length > 3) {
        tableBody.deleteRow(0);
    }

    input.value = "";
    updateLineCount();
}

// 表示エリアに文字を追加する
function showTextInDisplayArea() {
    var input = document.getElementById("text-input");
    var text = input.value.trim();

    if (text === "") {
        alert("入力値が空です");
        return; // 空ならハイライトを切り替えない
    }

    var displayArea = document.getElementById("display-area");
    var paragraph = document.createElement("p");
    paragraph.textContent = text;

    displayArea.appendChild(paragraph);

    displayArea.classList.remove("highlight");
    void displayArea.offsetWidth;
    displayArea.classList.add("highlight");
    setTimeout(function () {
        displayArea.classList.remove("highlight");
    }, 500);

    input.value = "";
}

// フォームの送信イベント
document.getElementById("text-form").addEventListener("submit", function (event) {
    event.preventDefault();
    getInputValue();
});

// 表示ボタンのクリックイベント
document.getElementById("display").addEventListener("click", function () {
    showTextInDisplayArea();
});

// バリデーション
function validateInput() {
    var input = document.getElementById("text-input");
    var text = input.value.trim();

    if (text === "") {
        alert("入力値が空です");
        return false;
    }

    return true;
}

// 背景色を順番に変更する
var colorSequence = ["#ADD8E6", "#90EE90", "#f08080"];
var colorIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colorSequence[colorIndex];
    colorIndex = (colorIndex + 1) % colorSequence.length;
}

document.getElementById("background-color").addEventListener("click", changeBackgroundColor);

updateLineCount();

//設問７
  for (let i = 1; i <= 5; i++) {
        console.log(i);
    }