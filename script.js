document.getElementById("compatibilityForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (!name1 || !name2) {
        alert("Please enter both names to calculate compatibility!");
        return;
    }

    const loveScore = Math.floor(Math.random() * 100) + 1; 

    let resultMessage = "";

    if (loveScore < 50) {
        resultMessage = `
            💔 Oh no, ${name1} and ${name2} are not very compatible.<br>
            Better luck next time!<br>
            <strong>Your love score is: ${loveScore}%</strong>
        `;
    } else if (loveScore < 80) {
        resultMessage = `
            🌟 ${name1} and ${name2}, you have potential!<br>
            Make efforts for a stronger bond.<br>
            <strong>Your love score is: ${loveScore}%</strong>
        `;
    } else {
        resultMessage = `
            ❤️ Wow, ${name1} and ${name2}, you are a perfect match!<br>
            Rab ne bana di jodi!<br>
            <strong>Your love score is: ${loveScore}%</strong>
        `;
    }

   
    const resultDiv = document.getElementById("result");
    resultDiv.style.opacity = 0;
    resultDiv.innerHTML = resultMessage;
    setTimeout(() => {
        resultDiv.style.opacity = 1;
    }, 300);
});
