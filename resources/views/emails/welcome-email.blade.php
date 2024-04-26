<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            background-color: #f4f4f4;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #4CAF50; /* A nice green */
        }
        p {
            font-size: 16px;
        }
        a.button {
            display: inline-block;
            padding: 10px 20px;
            margin: 10px 0;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <h1>Welcome to Our Community, {{$user->name}}!</h1>
        <p>We are thrilled to have you with us. As a new member, you'll get to explore all the exciting features we offer. Get ready to experience the best we have to offer!</p>
        <p>If you have any questions or need assistance, feel free to contact our support team. We're here to help you every step of the way.</p>
        <a href="{{ url('/') }}" class="button">Purchase To Get Started</a>
    </div>
</body>
</html>
