function calculateTip() {
    let billAmount = getInputValue("billAmount");
    let tipPercent = getInputValue("tipPercent");
  
    if (isNaN(billAmount) || isNaN(tipPercent)) {
      showResult("Please enter valid inputs.");
      return;
    }
  
    let tipAmount = calculateTipAmount(billAmount, tipPercent);
    let totalAmount = billAmount + tipAmount;
  
    showResult(
      `Tip Amount: ₹${tipAmount.toFixed(2)}<br/>Total Amount: ₹${totalAmount.toFixed(2)}`
    );
  }
  
  function getInputValue(id) {
    let value = parseFloat(document.getElementById(id).value);
    return value;
  }
  
  function calculateTipAmount(bill, percent) {
    let tip = (bill * percent) / 100;
    return tip;
  }
  
  function showResult(message) {
    document.getElementById("result").innerHTML = message;
  }
  