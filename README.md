<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>3uTools - iOS</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f3f3f3;
      margin: 0;
      padding: 0;
    }
    header {
      background-color: #1b7ef2;
      
      padding: 15px 30px;
      color: white;
      text-align: center;
    }
    header h1 {
      margin: 0;
      font-size: 28px;
    }
    .container {
      max-width: 1100px;
      margin: 40px auto;
      padding: 20px;
    }
    .section-title {
      text-align: center;
      margin-bottom: 40px;
    }
    .section-title h2 {
      font-size: 24px;
      color: #333;
    }
    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }
    .card {
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      padding: 25px;
      width: 300px;
      text-align: center;
      cursor: pointer;
      transition: box-shadow 0.3s ease;
    }
    .card:hover {
      box-shadow: 0 6px 18px rgba(0,0,0,0.15);
    }
    .card img {
      width: 80px;
      height: 80px;
      margin-bottom: 15px;
    }
    .card h3 {
      margin-bottom: 10px;
      color: #1b7ef2;
    }
    .card p {
      color: #666;
      font-size: 15px;
      line-height: 1.6;
    }
    .btn {
      display: inline-block;
      margin-top: 15px;
      background-color: #1b7ef2;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 600;
      transition: background-color 0.3s ease;
    }
    .btn:hover {
      background-color: #155bb5;
    }
    
  </style>
</head>
<body>

  <header>
    
    <h1>Al-Moussawi</h1>
  </header>

  <div class="container">
    <div class="section-title">
      <h2></h2>
    </div>

    <div class="cards">

      <!-- مربع توافق الأجهزة -->
      <div class="card" onclick="window.location.href='FATORA.html'">
        
        <h3>فاتوره مبيعات عامه </h3>
        <p> فواتير البيع  يتيح إدخال البيانات، حساب الإجماليات، والمبالغ المستلمة والمتبقية بشكل تلقائي  </p>
        <span class="btn">عرض الفاتورة</span>
      </div>

      <!-- مربع ضمان الصيانة -->
      <div class="card" onclick="window.location.href='sorer.html'">
        <h3>ضمان الصيانة</h3>
        <p>
         هذه فاتورة صيانة إلكترونية مصممة لتعرض نموذجًا لتسجيل بيانات الزبائن
        </p>
        <span class="btn">اذهب إلى الضمان</span>
      </div>

      <!-- مربع توافق الشاشات -->
      <div class="card" onclick="window.location.href='totel.html'">
        <h3>توافــــق الشاشات</h3>
        <p>توافق مجموعة من الهواتف تحمل نفس نوع الشاشة وتسمح باستخدامها.</p>
        <span class="btn">انتقل الى التوافق</span>
      </div>
      
    </div>
  </div>

  <footer>
    &copy; 2025 TROEIL
  </footer>

</body>
</html>
