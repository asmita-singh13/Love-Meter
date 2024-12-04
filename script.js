document.getElementById("compatibilityForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name1 = document.getElementById("name1").value.trim().toLowerCase();
    const name2 = document.getElementById("name2").value.trim().toLowerCase();

    if (!name1 || !name2) {
        alert("Please enter both names to calculate compatibility!");
        return;
    }

    const loveScore = calculateLoveScore(name1, name2);

    let resultMessage = "";

    if (loveScore < 50) {
        resultMessage = `
            💔 Oh no, ${capitalize(name1)} and ${capitalize(name2)} could improve their connection.<br>
            Better luck next time!<br>
            <strong>Your love score is: ${loveScore}%</strong>
        `;
    } else if (loveScore < 75) {
        resultMessage = `
            🌟 ${capitalize(name1)} and ${capitalize(name2)}, you are on the right path!<br>
            There's great potential for a stronger bond.<br>
            <strong>Your love score is: ${loveScore}%</strong>
        `;
    } else {
        resultMessage = `
            ❤️ Wow, ${capitalize(name1)} and ${capitalize(name2)}, you are a match made in heaven!<br>
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

/**

 * @param {string} name1 - First name
 * @param {string} name2 - Second name
 * @returns {number} Love score percentage
 */
function calculateLoveScore(name1, name2) {
    const combinedName = name1 + name2;
    const alphabetCounts = Array(26).fill(0);

    
    for (const char of combinedName) {
        const charCode = char.charCodeAt(0);
        if (charCode >= 97 && charCode <= 122) {
            alphabetCounts[charCode - 97]++;
        }
    }

    const totalFrequency = alphabetCounts.reduce((acc, count) => acc + count, 0);

    
    const rawScore = (totalFrequency % 100) + 1; 

    const adjustedScore = Math.floor(rawScore * 2.5); 
    return Math.min(adjustedScore, 100); 
}

/**
 
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
