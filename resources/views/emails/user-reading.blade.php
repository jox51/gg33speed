<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: Arial, sans-serif; }
        .card { background-color: #f9f9f9; border: 1px solid #ddd; padding: 10px 20px; margin: 10px 0; border-radius: 8px; }
        .heading { color: #333; font-size: 18px; font-weight: bold; }
        .content { color: #666; font-size: 16px; margin-top: 5px; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; }
        a { color: #1a0dab; }
    </style>
</head>
<body>
    <h2>Your Speed Reading Results</h2>
    <h4>Date: {{ $date }}</h4>
    <h4> Credits Remaining : {{$creditsRemaining}}</h4>
    
    
    <div class="card">
        <div class="heading">Lifepath Number {{ $userDetails['lifepath'] }}</div>
        <div class="content">{{ $userDetails['reading']['Lifepath'] }}</div>
    </div>

    <div class="card">
        <div class="heading">Bornday Number {{ $userDetails['bornday'] }}</div>
        <div class="content">{{ $userDetails['reading']['Bornday'] }}</div>
    </div>

    <div class="card">
        <div class="heading">Chinese Zodiac: {{ $userDetails['zodiac'] }}</div>
        <div class="content">{{ $userDetails['reading']['ChineseZodiac'] }}</div>
    </div>

    <div class="footer">
        <p>For a deeper reading where you can learn how to manifest the fullest potential of your energy and avoid pitfalls and obstacles in both your personal, professional, and social life, contact one of the GG33 readers from the <a href="https://gg33-now.company.site/GG33-Expert-Readings-c151596812" target="_blank">GG33 Official Reader List</a>.</p>
    </div>
</body>
</html>
