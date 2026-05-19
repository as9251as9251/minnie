(function () {
  const VALID_CODE = "000054";
  const shop = document.getElementById("section-shop");
  const form = document.getElementById("coupon-form");
  const input = document.getElementById("coupon-input");
  const msg = document.getElementById("coupon-msg");

  if (!shop || !form || !input || !msg) return;

  function setDiscounted(on) {
    shop.classList.toggle("is-discounted", on);
    shop.querySelectorAll(".price-sale, .price-save").forEach((el) => {
      el.hidden = !on;
    });
  }

  function showMsg(text, type) {
    msg.textContent = text;
    msg.className = "coupon-msg" + (type ? " coupon-msg--" + type : "");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const code = input.value.trim();
    if (code === VALID_CODE) {
      setDiscounted(true);
      showMsg("折扣碼套用成功！已顯示優惠價", "ok");
    } else {
      setDiscounted(false);
      showMsg("折扣碼不正確，請再試一次", "err");
    }
  });
})();
