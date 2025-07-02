function saveAsPDF() {
  // نجيب العنصر اللي نريد نحفظه كـ PDF
  const element = document.getElementById("invoice");

  // نجيب اسم نوع الجهاز من الإدخال (input) مع إزالة الفراغات
  const device = document.getElementById("deviceInput").value.trim() || "جهاز";

  // نجيب الرقم التسلسلي من الإدخال (input)
  const serial = document.getElementById("serialNumber").value.trim() || "فاتورة";

  // نصنع اسم الملف بدمج نوع الجهاز مع الرقم التسلسلي
  const filename = device + " " + serial + ".pdf";

  // خيارات الحفظ
  const opt = {
    margin:       0.5,
    filename:     filename,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // ننفذ الحفظ
  html2pdf().set(opt).from(element).save();
}
document.getElementById('updateTime').value = new Date().toISOString().slice(0,16);
