//تابع محاسبه
function calculate(firstnumber, secondnumber, operation) {
  if (operation === "+") {
    return firstnumber + secondnumber;
  } else if (operation === "-") {
    return firstnumber - secondnumber;
  } else if (operation === "*") {
    return firstnumber * secondnumber;
  } else if (operation === "/") {
    if (secondnumber === 0) {
      return "تقسیم بر عدد صفر ممکن نیست";
    }
    return firstnumber / secondnumber;
  } else {
    return "عملیات نامعتبر است";
  }
}
// شروع محاسبه
function startcalculator() {
  let firstnumber = Number(prompt("عدد اول را وارد کنید"));
  let operation = prompt(
    "عملیات مورد نظر خود را وارد کنید\n\n" +
      "+برای جمع\n" +
      "- برای تفریق\n" +
      "*برای ضرب\n" +
      "/برای تقسیم\n",
  );
  let secondnumber = Number(prompt("عدد دوم را وارد کنید"));
  let result = calculate(firstnumber, secondnumber, operation);
  alert("نتیجه محاسبه:" + result);
}
