(function () {
  const toast = document.getElementById("social-toast");
  const nameEl = document.getElementById("social-toast-name");
  const planEl = document.getElementById("social-toast-plan");
  if (!toast || !nameEl || !planEl) return;

  const NAMES = [
    "王小姐",
    "林先生",
    "陳小姐",
    "張先生",
    "李小姐",
    "黃先生",
    "吳小姐",
    "蔡先生",
    "許小姐",
    "鄭先生",
    "周小姐",
    "楊先生",
  ];

  const PLANS = ["10日體驗組", "消化道基礎調整組", "別再讓底子垮掉組"];

  const INTERVAL_MS = 12000;
  const FADE_MS = 450;

  let prevName = "";
  let prevPlan = "";
  let timerId = null;

  function pickRandom(list, exclude) {
    if (list.length === 1) return list[0];
    let item;
    do {
      item = list[Math.floor(Math.random() * list.length)];
    } while (item === exclude);
    return item;
  }

  function wait(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  function setMessage() {
    const name = pickRandom(NAMES, prevName);
    const plan = pickRandom(PLANS, prevPlan);
    prevName = name;
    prevPlan = plan;
    nameEl.textContent = name;
    planEl.textContent = plan;
  }

  function show() {
    toast.hidden = false;
    toast.classList.add("is-visible");
  }

  function hide() {
    toast.classList.remove("is-visible");
  }

  async function cycle() {
    hide();
    await wait(FADE_MS);
    setMessage();
    show();
  }

  function start() {
    setMessage();
    show();
    timerId = window.setInterval(cycle, INTERVAL_MS);
  }

  function stop() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      stop();
    } else if (!timerId) {
      start();
    }
  });

  window.setTimeout(start, 2500);
})();
