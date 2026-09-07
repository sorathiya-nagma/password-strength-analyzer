 # 🔐 Password Strength Analyzer

A Django-based web application designed to analyze and evaluate password security using multiple security metrics such as **password entropy, security score, password statistics, and estimated crack time**.

The application also provides **user registration and authentication**, with passwords securely hashed before storage using Django's password-hashing utilities.

---

## ✨ Features

### 🔐 Password Strength Analysis

The application performs a detailed analysis of the entered password, including:

* 🔢 **Password Entropy**
* 📊 **Password Statistics**
* ⏱️ **Estimated Crack Time**
* 🛡️ **Security Score**
* 💪 **Password Strength Level**
* 💡 **Security Recommendations**

---

### 📐 Password Entropy

The application calculates password entropy to estimate the unpredictability of a password.

Entropy is expressed in **bits** and is influenced by factors such as:

* Password length
* Character variety
* Uppercase letters
* Lowercase letters
* Numbers
* Special characters

A higher entropy generally indicates a larger search space for an attacker.

Example:

```text
Entropy: 72.45 bits
```

---

### 📊 Password Statistics

The analyzer provides detailed statistics about the entered password.

It can display information such as:

* Password length
* Number of uppercase characters
* Number of lowercase characters
* Number of digits
* Number of special characters
* Character-set information
* Character composition

Example:

```text
Password Length       : 14
Uppercase Characters  : 2
Lowercase Characters  : 7
Numbers               : 3
Special Characters    : 2
```

---

### ⏱️ Estimated Crack Time

The application estimates how long it could take to guess the password under the model used by the analyzer.

The result can be presented in units such as:

```text
Seconds
Minutes
Hours
Days
Years
```

Example:

```text
Estimated Crack Time: many years
```

> Crack-time estimates are theoretical and depend heavily on the assumed attack method and guessing rate. They should not be interpreted as a guarantee that a password will remain secure for that exact amount of time.

---

### 🛡️ Security Score

The application calculates an overall **Security Score** based on password characteristics.

Example:

```text
Security Score: 86 / 100
```

The score helps users quickly understand the overall security quality of their password.

---

### 💪 Password Strength Level

Based on the analysis, the password can be categorized into different strength levels, for example:

```text
Very Weak
Weak
Medium
Strong
Very Strong
```

---

### 💡 Security Recommendations

For weaker passwords, the application provides suggestions to improve password security.

Recommendations can include:

* Increase password length
* Add uppercase characters
* Add lowercase characters
* Include numbers
* Include special characters
* Avoid predictable patterns
* Avoid commonly used passwords

---

## 👤 User Registration

Users can create an account through the registration system.

The application:

* Validates user information
* Accepts a password during registration
* Hashes the password before storing it
* Prevents plain-text password storage

Password hashing is implemented using Django's utilities:

```python
from django.contrib.auth.hashers import make_password, check_password
```

During registration:

```python
hashed_password = make_password(password)
```

The hashed password is then stored instead of the original password.

---

## 🔑 User Authentication

Registered users can log in using their credentials.

During authentication, the application verifies the entered password against the stored hash:

```python
if check_password(password, stored_hashed_password):
    # Login successful
else:
    # Invalid password
```

This allows the application to verify a password without storing the user's original password.

---

## 🔄 Application Workflow

```text
              ┌──────────────────┐
              │     Register     │
              └────────┬─────────┘
                       │
                       ▼
              ┌──────────────────┐
              │ Password Hashing │
              │  make_password() │
              └────────┬─────────┘
                       │
                       ▼
              ┌──────────────────┐
              │      Login       │
              └────────┬─────────┘
                       │
                       ▼
              ┌──────────────────┐
              │ Enter Password   │
              └────────┬─────────┘
                       │
                       ▼
       ┌───────────────────────────────┐
       │      Password Analysis        │
       ├───────────────────────────────┤
       │ • Entropy                     │
       │ • Password Statistics         │
       │ • Crack Time                  │
       │ • Security Score              │
       │ • Strength Level              │
       └───────────────┬───────────────┘
                       │
                       ▼
              ┌──────────────────┐
              │ Security Tips   │
              └──────────────────┘
```

---

## 📊 Example Analysis

For a password entered by the user, the application can provide a result similar to:

```text
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       PASSWORD ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Security Score      : 86 / 100
Strength            : Strong
Entropy             : 72.45 bits
Estimated Crack Time: many years

Password Statistics
-------------------
Length              : 14
Uppercase           : 2
Lowercase           : 7
Numbers             : 3
Special Characters  : 2

Recommendations
-------------------
✓ Good password length
✓ Good character variety
✓ Contains numbers
✓ Contains special characters
```

---

## 🛠️ Technologies Used

| Technology | Purpose                   |
| ---------- | ------------------------- |
| Python     | Backend programming       |
| Django     | Web framework             |
| HTML5      | Frontend structure        |
| CSS3       | User interface styling    |
| JavaScript | Interactive functionality |
| SQLite     | Database                  |
| Git        | Version control           |
| GitHub     | Source-code management    |

---

## 🎯 Key Learning Outcomes

This project demonstrates practical knowledge of:

* Python programming
* Django web development
* User authentication
* Password hashing
* Password verification
* Password entropy
* Password-strength analysis
* Security scoring
* Crack-time estimation
* Statistical password analysis
* Database integration
* HTML, CSS and JavaScript
* Git and GitHub
* Basic cybersecurity concepts

---

## 🚀 Future Improvements

Possible future enhancements include:

* 🔑 Secure password generator
* 📧 Email-based password reset
* 🔢 OTP verification
* 🔐 Two-factor authentication
* 📚 Common-password detection
* 🗂️ Dictionary attack analysis
* 🔁 Password reuse detection
* 📈 Password security history
* 👤 Personal security dashboard
* 🌐 Deployment to a production server
* 🔒 Additional application security controls

---
🧑‍💻 Installation & Setup
1. Clone the Repository
git clone YOUR_GITHUB_REPOSITORY_URL

Move into the project directory:

cd Password-Strength-Checker
2. Create a Virtual Environment

Create a virtual environment:

python -m venv venv
Windows
venv\Scripts\activate
macOS / Linux
source venv/bin/activate
3. Install Dependencies

Install the required Python packages:

pip install -r requirements.txt

If you haven't created requirements.txt yet, you can install Django with:

pip install django

Then generate the requirements file:

pip freeze > requirements.txt
4. Apply Database Migrations

Run:

python manage.py makemigrations

Then:

python manage.py migrate
5. Create a Superuser

To access the Django admin panel:

python manage.py createsuperuser

Follow the instructions shown in the terminal.

6. Run the Development Server

Start the Django server:

python manage.py runserver

The application will normally be available at:

http://127.0.0.1:8000/

Open the address in your browser.

📊 Example Analysis

For a password entered by the user, the application can provide a result similar to:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       PASSWORD ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Security Score      : 86 / 100
Strength            : Strong
Entropy             : 72.45 bits
Estimated Crack Time: many years

Password Statistics
-------------------
Length              : 14
Uppercase           : 2
Lowercase           : 7
Numbers             : 3
Special Characters  : 2

Recommendations
-------------------
✅ Minimum 8 Characters
✅ Uppercase Letter
✅ Lowercase Letter
✅ Number
✅ Special Character

## 👩‍💻 Author

**Nagma Sorathiya**

Diploma in Computer Engineering
B. H. Gardi College of Engineering & Technology

### Technical Skills

* Python
* Django
* HTML
* CSS
* JavaScript
* SQL
* Git & GitHub

---

## ⭐ Project

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project was developed for **educational and learning purposes**.
