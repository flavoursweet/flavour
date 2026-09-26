(() => {
  "use strict";

  // 时钟
  const clock = document.getElementById("clock");
  const tick = () => {
    const now = new Date();
    const p = (n) => String(n).padStart(2, "0");
    if (clock) clock.textContent = `${p(now.getHours())}:${p(now.getMinutes())}:${p(now.getSeconds())}`;
  };
  tick();
  setInterval(tick, 1000);

  // 年份
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // 移动端菜单
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      burger.classList.remove("open");
      navLinks.classList.remove("open");
    })
  );

  // 滚动导航高亮
  const sections = document.querySelectorAll("section[id], main > section");
  const links = navLinks.querySelectorAll("a");
  const nav = document.getElementById("nav");
  const onScroll = () => {
    const y = window.scrollY + 100;
    sections.forEach((sec) => {
      const id = sec.id;
      const link = [...links].find((l) => l.getAttribute("href") === `#${id}`);
      if (!link) return;
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      if (y >= top && y < bottom) {
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  // 入场动画
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // 自定义光标
  const cursor = document.getElementById("cursor");
  const cursorDot = document.getElementById("cursorDot");
  if (cursor && cursorDot && window.matchMedia("(hover: hover)").matches) {
    let cx = 0, cy = 0, dx = 0, dy = 0;
    document.addEventListener("mousemove", (e) => {
      cx = e.clientX;
      cy = e.clientY;
      cursorDot.style.left = cx + "px";
      cursorDot.style.top = cy + "px";
    });
    const loop = () => {
      dx += (cx - dx) * 0.18;
      dy += (cy - dy) * 0.18;
      cursor.style.left = dx + "px";
      cursor.style.top = dy + "px";
      requestAnimationFrame(loop);
    };
    loop();
    document.querySelectorAll("a, button, .chip, .sticker, .hero__name").forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
    });
  }

  // 彩蛋：点击名字
  const heroName = document.getElementById("heroName");
  const emojis = ["💛", "💙", "✨", "🚀", "🌙", "🛌", "😴", "⭐", "🎬", "⚡"];
  const boom = (el) => {
    el.classList.remove("boom");
    void el.offsetWidth;
    el.classList.add("boom");
  };
  const spawnParticles = (x, y) => {
    for (let i = 0; i < 14; i++) {
      const s = document.createElement("span");
      s.className = "particle";
      s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      s.style.left = x + "px";
      s.style.top = y + "px";
      s.style.setProperty("--tx", (Math.random() - 0.5) * 300 + "px");
      s.style.setProperty("--ty", (Math.random() - 0.5) * 300 + "px");
      document.body.appendChild(s);
      s.addEventListener("animationend", () => s.remove());
    }
  };
  if (heroName) {
    heroName.addEventListener("click", (e) => {
      boom(heroName);
      spawnParticles(e.clientX, e.clientY);
    });
  }

  // 彩蛋：Konami 码（连按方向键）切换整站反色
  const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight"];
  let ki = 0;
  document.addEventListener("keydown", (e) => {
    if (e.key === konami[ki]) {
      ki++;
      if (ki === konami.length) {
        document.body.style.filter =
          document.body.style.filter === "invert(1) hue-rotate(180deg)" ? "" : "invert(1) hue-rotate(180deg)";
        ki = 0;
        spawnParticles(window.innerWidth / 2, window.innerHeight / 2);
      }
    } else {
      ki = 0;
    }
  });

  // 技术栈标签随机摆角
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.style.setProperty("--r", (Math.random() * 4 - 2).toFixed(1) + "deg");
    chip.addEventListener("click", function () {
      chip.style.transform = `translate(-3px,-3px) rotate(${(Math.random() * 10 - 5).toFixed(1)}deg)`;
      spawnParticles(0, 0);
      const r = chip.getBoundingClientRect();
      const p = document.querySelector(".particle:last-child");
      if (p) {
        p.style.left = r.left + r.width / 2 + "px";
        p.style.top = r.top + r.height / 2 + "px";
      }
    });
  });
})();
