<script setup lang="ts" name="ui-confetti">
import confetti from "canvas-confetti";
type ConfettiModel =
  | "basic"
  | "random"
  | "realistic"
  | "fireworks"
  | "snow"
  | "spray"
  | "custom";
const props = defineProps<{
  model: ConfettiModel;
  colors: string[];
}>();
const colors = props.colors || ["#bb0000", "#ffffff"];

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
const Basic = () =>
  confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

const Random = () =>
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 },
  });
const Realistic = () => {
  function fire(particleRatio, opts) {
    var count = 200;
    var defaults = {
      origin: { y: 0.7 },
    };
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

const Fireworks = () => {
  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};
const Snow = () => {
  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var skew = 1;
  (function frame() {
    var timeLeft = animationEnd - Date.now();
    var ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);

    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2,
      },
      colors: colors,
      shapes: ["circle"],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  })();
};
const Spray = () => {
  var end = Date.now() + 15 * 1000;

  // go Buckeyes!

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
const Custom = (option) => {
  confetti(option);
};
const canvasMap = {
  basic: Basic,
  random: Random,
  realistic: Realistic,
  fireworks: Fireworks,
  snow: Snow,
  spray: Spray,
  custom: Custom,
};

defineExpose({ start: canvasMap[props.model ? props.model : "basic"] });
</script>
