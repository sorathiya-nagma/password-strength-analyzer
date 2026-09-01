
document.addEventListener("DOMContentLoaded", function () {

    const password = document.getElementById("password");
    
     
    
    
    const strengthText = document.getElementById("strengthText");
    
    const crackTime = document.getElementById("crackTime");
    const suggestions = document.getElementById("suggestions");

    const length = document.getElementById("length");
    const upper = document.getElementById("upper");
    const lower = document.getElementById("lower");
    const number = document.getElementById("number");
    const symbol = document.getElementById("symbol");
    

    
// Show / Hide Password
    
    const togglePassword = document.getElementById("togglePassword");

    togglePassword.addEventListener("click", function () {

        if (password.type === "password") {

            password.type = "text";
            togglePassword.innerHTML = '<i class="bi bi-eye-slash"></i>';

        } else {

            password.type = "password";
            togglePassword.innerHTML = '<i class="bi bi-eye"></i>';

        }

    });

    
//Live Password Analyzer

    password.addEventListener("input", function () {

        const pass = password.value;

//Live Statistics
    const score = document.getElementById("score");
    const strengthBar = document.getElementById("strengthBar");
    document.getElementById("charCount").textContent = pass.length;

    document.getElementById("upperCount").textContent =
        (pass.match(/[A-Z]/g) || []).length

    document.getElementById("lowerCount").textContent =
        (pass.match(/[a-z]/g) || []).length;

    document.getElementById("numberCount").textContent =
        (pass.match(/[0-9]/g) || []).length;

    document.getElementById("symbolCount").textContent =
        (pass.match(/[^A-Za-z0-9]/g) || []).length;

    document.getElementById("uniqueCount").textContent =
        new Set(pass).size;
        

        let scoreValue = 0;
        let charset = 0;
        let tips = [];
   
        // Length
        
        if (pass.length >= 8) {

            scoreValue += 20;
            length.innerHTML = "✅ Minimum 8 Characters";
            length.className = "text-success";

        } else {

            length.innerHTML = "❌ Minimum 8 Characters";
            length.className = "text-danger";
            tips.push("Use at least 8 characters.");

        }
        
        // Uppercase
        
        if (/[A-Z]/.test(pass)) {

            scoreValue += 20;
            charset += 26;
            upper.innerHTML = "✅ Uppercase Letter";
            upper.className = "text-success";

        } else {

            upper.innerHTML = "❌ Uppercase Letter";
            upper.className = "text-danger";
            tips.push("Add an uppercase letter.");

        }

        // Lowercase
        
        if (/[a-z]/.test(pass)) {

            scoreValue += 20;
            charset += 26;
            lower.innerHTML = "✅ Lowercase Letter";
            lower.className = "text-success";

        } else {

            lower.innerHTML = "❌ Lowercase Letter";
            lower.className = "text-danger";
            tips.push("Add a lowercase letter.");

        }
        
        // Number

        if (/[0-9]/.test(pass)) {

            scoreValue += 20;
            charset += 10;
            number.innerHTML = "✅ Number";
            number.className = "text-success";

        } else {

            number.innerHTML = "❌ Number";
            number.className = "text-danger";
            tips.push("Add at least one number.");

        }
    
        // Symbol
    
        if (/[^A-Za-z0-9]/.test(pass)) {

            scoreValue += 20;
            charset += 32;
            symbol.innerHTML = "✅ Special Character";
            symbol.className = "text-success";

        } else {

            symbol.innerHTML = "❌ Special Character";
            symbol.className = "text-danger";
            tips.push("Add a special character.");

        }


    // Bonus Score
        
        if (pass.length >= 12)
            scoreValue += 10;

        if (pass.length >= 16)
            scoreValue += 10;

        if (scoreValue > 100)
            scoreValue = 100;

    // Security Score
    
        score.innerHTML = scoreValue + " / 100";

        strengthBar.style.width = scoreValue + "%";

        
        // Password Strength

        if (scoreValue <= 20) {

            strengthText.innerHTML = "🔴 Very Weak";
            strengthBar.className = "progress-bar bg-danger";

        }

        else if (scoreValue <= 40) {

            strengthText.innerHTML = "🟠 Weak";
            strengthBar.className = "progress-bar bg-warning";

        }

        else if (scoreValue <= 60) {

            strengthText.innerHTML = "🟡 Fair";
            strengthBar.className = "progress-bar bg-info";

        }

        else if (scoreValue <= 80) {

            strengthText.innerHTML = "🟢 Strong";
            strengthBar.className = "progress-bar bg-success";

        }

        else {

            strengthText.innerHTML = "🛡 Excellent Password";
            strengthBar.className = "progress-bar bg-success";

        }

        
        // Entropy
        
        const entropy = document.getElementById("entropy");
        let entropyValue = 0;

        if (charset > 0 && pass.length > 0) {

            entropyValue = Math.round(pass.length * Math.log2(charset));

        }

        entropy.innerHTML = entropyValue + " bits";

        
        // Crack Time
        

        let crack = "";

        if (entropyValue < 28)
            crack = "Instantly";

        else if (entropyValue < 36)
            crack = "Few Minutes";

        else if (entropyValue < 60)
            crack = "Several Days";

        else if (entropyValue < 80)
            crack = "Many Years";

        else
            crack = "Millions of Years";

        crackTime.innerHTML = crack;

        
        // Suggestions
        

        if (pass.length === 0) {

            suggestions.className = "alert alert-secondary";
            suggestions.innerHTML = "Start typing your password...";

        }

        else if (tips.length === 0) {

            suggestions.className = "alert alert-success";
            suggestions.innerHTML =
                "🎉 Excellent! Your password follows all recommended security rules.";

        }

        else {

            suggestions.className = "alert alert-warning";

            suggestions.innerHTML =
                "<strong>Suggestions:</strong><br>• " +
                tips.join("<br>• ");

        }

    });

});

