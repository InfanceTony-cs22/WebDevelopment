<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .id-card {
            background-color: white;
            width: 300px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            text-align: center;
        }

        .student-photo {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 0 auto 10px;
            display: block;
        }

        button#print-button {
            display: block;
            margin: 20px auto;
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
    </style>
    <title>Student ID Card</title>
</head>
<body>
    <div class="id-card">
        <img src="student.jpg" alt="Student Photo" class="student-photo">
        <div class="student-info">
            <h1>Student ID Card</h1>
            <p><strong>Name:</strong> Infance Tony.E</p>
            <p><strong>Student ID:</strong> 22RUCSB018</p>
            <p><strong>Program:</strong> Computer Science</p>
            <p><strong>Batch:</strong> 2023</p>
        </div>
    </div>

    <button id="print-button">Print ID Card</button>

    <script>
        // Function to print the student ID card
        document.getElementById("print-button").addEventListener("click", function() {
            window.print();
        });
    </script>
</body>
</html>
