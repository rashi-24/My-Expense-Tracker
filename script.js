function addtra() {
    let text = document.getElementById("text").value;
    let amt = document.getElementById("amount").value;
    localStorage.setItem(text, amt);
}

function history() {
    let incomeCount = 0,
        expenseCount = 0;
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let text = localStorage.key(i);
            let amt = localStorage.getItem(localStorage.key(i));
            if (amt.includes("-")) {
                expenseCount += Math.abs(parseFloat(amt));
            } else {
                incomeCount += parseFloat(amt);
            }
            let list = _("list");
            let item = document.createElement("li");
            item.classList.add(`${amt.includes("-") ? `minus` : `plus`}`);
      let itext = document.createElement("p");
      itext.textContent = text;
      item.appendChild(itext);
      let iamt = document.createElement("p");
      iamt.textContent = `${amt.includes("-") ? `` : `+`}${amt}`;
      item.appendChild(iamt);
      list.appendChild(item);
    }
    _("money-plus").textContent = `+$${incomeCount.toFixed(2)}`;
    _("money-minus").textContent = `-$${expenseCount.toFixed(2)}`;
    _("balance").textContent = `$${(incomeCount - expenseCount).toFixed(2)}`;
    }
}

function _(id) {
    return document.getElementById(id);
  }
  
  window.onload = () => {
    history();
  };

function del() {
    let text = document.getElementById("text").value;
    localStorage.removeItem(text);
}