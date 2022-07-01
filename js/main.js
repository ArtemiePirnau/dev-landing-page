window.addEventListener("DOMContentLoaded", function () {
  function a(e) {
    return 0 <= e && e < 10 ? "0" + e : e;
  }
  $(".team__slider").slick({
    slidesToShow: 4,
    arrows: !1,
    dots: !0,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 3 } },
      { breakpoint: 830, settings: { slidesToShow: 2 } },
      { breakpoint: 570, settings: { slidesToShow: 1 } },
    ],
  }),
    document
      .querySelector(".menu-toggle")
      .addEventListener("click", function () {
        document
          .querySelectorAll(".menu-toggle, .menu, .menu__list, body")
          .forEach(function (e) {
            e.classList.toggle("active");
          });
      }),
    (function (e, t) {
      document.querySelector(".countdown");
      var o = document.querySelector(".countdown__days"),
        n = document.querySelector(".hours"),
        s = document.querySelector(".minutes"),
        r = document.querySelector(".seconds"),
        u = setInterval(setTime, 1e3);
      function setTime() {
        var e,
          t = {
            total: (e = Date.parse("2023-12-31") - Date.parse(new Date())),
            days: Math.floor(e / 864e5),
            hours: Math.floor((e / 36e5) % 24),
            minutes: Math.floor((e / 1e3 / 60) % 60),
            seconds: Math.floor((e / 1e3) % 60),
          };
        (o.textContent = a(t.days)),
          (n.textContent = a(t.hours)),
          (s.textContent = a(t.minutes)),
          (r.textContent = a(t.seconds)),
          t.total <= 0 && clearInterval(u);
      }
      setTime();
    })();
});
