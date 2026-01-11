
    ---
title: ""
---

<p style="text-align: center;" class="top-links">
  <a href="/about/">About Us</a> ·
  <a href="/Group Classes Schedule/">Group Classes Schedule</a> ·
  <a href="/pricing/">Pricing</a>
</p>

<h1 class="hero-title">Build strength. Stay active.</h1>

<audio id="typing-sound" preload="auto">
  <source src="/sounds/typing.mp3" type="audio/mpeg">
</audio>

<p style="text-align:center;margin-top:12px;font-size:20px;opacity:2">
  <span id="typing-text"></span>
</p>

<script>
  (function () {
    var el = document.getElementById("typing-text");
    var sound = document.getElementById("typing-sound");
    if (!el || !sound) return;

    var text = "Coming soon - Near Saket Square, Indore";
    var i = 0;
    var started = false;

    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        sound.currentTime = 0;
        sound.volume = 0.15;
        sound.play().catch(() => {});
        i++;
        setTimeout(type, 80);
      }
    }

    // MUST be triggered by user action
    function startTyping() {
      if (started) return;
      started = true;
      document.removeEventListener("click", startTyping);
      type();
    }

    document.addEventListener("click", startTyping);
  })();
</script>



<div class="contact-bottom">
  <div class="contact-left">
    <h4>Connect</h4>
    <p>📞 +91 7899254254</p>
    <p>📧 hello@onebase.fit</p>
    <p>
      <a href="https://instagram.com/onebasefitness" target="_blank" rel="noopener">
        📸 Instagram
      </a>
    </p>
  </div>



  <div class="contact-right">
    <h4>Timing</h4>
    <p>Mon–Sun</p>
    <p>7 AM – 9 PM</p>
  </div>

  <div class="contact-right">
    <h4>Terms</h4>
    <p><a href="/faq/">FAQ</a></p>
  </div>
</div>


