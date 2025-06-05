<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 20px;
        }
        .footer {
            background-color: #f1f1f1;
            padding: 10px;
            text-align: center;
            font-size: 12px;
            color: #555;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 20px 0;
            font-size: 16px;
            color: white;
            background-color: #4CAF50;
            text-align: center;
            text-decoration: none;
            border-radius: 5px;
        }
        .contact-info {
            margin-top: 20px;
            font-size: 14px;
            color: #555;
        }
    </style>
    <title>Reparatie Gereed voor Ophalen</title>
</head>
<body>
<div class="container">
    <div class="header">
        <h1>Reparatie Gereed voor Ophalen</h1>
    </div>
    <div class="content">
        <p>Beste klant,</p>
        <p>Wij willen je informeren dat je apparaat met reparatienummer <strong>{{$repair->id}}</strong> gereed is voor ophaling. Je kunt deze tijdens onze openingstijden ophalen bij onze locatie.</p>
        <p>Onze openingstijden zijn:</p>
        <ul>
            <li>Maandag - Vrijdag: 08:30 - 17:00</li>
            <li>Zaterdag: 10:00 - 17:00</li>
            <li>Zondag: Gesloten</li>
        </ul>
        <p>Bedankt voor je geduld en vertrouwen in onze service. We zien je graag spoedig.</p>
        <p>Met vriendelijke groet,</p>
        <p><strong>Techreparatie</strong></p>
        <p class="contact-info">Telefoon: 050-8501234</p>
    </div>
    <div class="footer">
        © 2024 Techreparatie. Alle rechten voorbehouden.
    </div>
</div>
</body>
</html>
