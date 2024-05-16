* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
}
header {
    background-color: #2c3e50;
    color: #fff;
    padding: 20px 0;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo {
    margin: 0;
    font-size: 24px;
}
.nav-links {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.nav-links li {
    display: inline;
    margin-right: 20px;
}

.nav-links li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;
}

.nav-links li a:hover {
    color: #f39c12;
}


.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.7);
}
.modal-content {
    background-color: #fff;
    margin: 10% auto;
    padding: 20px;
    border-radius: 5px;
    max-width: 500px;
}
.close {
    color: #aaa;
    float: right;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
}
.close:hover {
    color: #333;
}
footer {
    background-color: #34495e;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}
.contact-section {
    padding: 50px 0;
    text-align: center;
}
.contact-section h2 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #2c3e50;
}
.contact-section form {
    max-width: 600px;
    margin: 0 auto;
}
.form-group {
    margin-bottom: 20px;
}
.form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-group textarea {
    resize: vertical;
}

button[type="submit"] {
    background-color: #f39c12;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button[type="submit"]:hover {
    background-color: #e67e22;
}
