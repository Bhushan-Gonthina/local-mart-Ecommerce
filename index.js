const screens = ["screen1", "screen2", "screen3", "screen4", "buyerLogin", "sellerLogin"];
    let current = 0;
    const historyStack = [];

    function nextScreen() {
      if (current < 3) {
        historyStack.push(current);
        document.getElementById(screens[current]).classList.add('hidden');
        current++;
        document.getElementById(screens[current]).classList.remove('hidden');
      }
    }

    function toggleLogin(type) {
      historyStack.push(3);
      document.getElementById("buyToggle").classList.remove("active-toggle");
      document.getElementById("sellToggle").classList.remove("active-toggle");

      if (type === "buyer") {
        document.getElementById("buyToggle").classList.add("active-toggle");
        document.getElementById("screen4").classList.add('hidden');
        document.getElementById("buyerLogin").classList.remove('hidden');
        current = 4;
      } else {
        document.getElementById("sellToggle").classList.add("active-toggle");
        document.getElementById("screen4").classList.add('hidden');
        document.getElementById("sellerLogin").classList.remove('hidden');
        current = 5;
      }
    }

    function goBack() {
      if (historyStack.length > 0) {
        const prev = historyStack.pop();
        document.getElementById(screens[current]).classList.add("hidden");
        current = prev;
        document.getElementById(screens[current]).classList.remove("hidden");
      }
    }

    setTimeout(() => nextScreen(), 1000);
    setTimeout(() => nextScreen(), 2000);
    setTimeout(() => nextScreen(), 3000);