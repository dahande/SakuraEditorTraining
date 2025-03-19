function checkAnswer() {
    const userInput = document.getElementById("regexInput").value;
    const testStrings = ["apple", "banana", "cherry"];
    let regex;

    try {
        regex = new RegExp(userInput);
    } catch (e) {
        document.getElementById("result").textContent = "無効な正規表現です。";
        return;
    }

    const isCorrect = testStrings.every(str => regex.test(str));

    if (isCorrect) {
        document.getElementById("result").textContent = "正解です！";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").textContent = "不正解です。";
        document.getElementById("result").style.color = "red";
    }
}
