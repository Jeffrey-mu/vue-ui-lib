import confetti from "canvas-confetti";
type ConfettiModel =
  | "basic"
  | "random"
  | "realistic"
  | "fireworks"
  | "snow"
  | "spray"
  | "custom";
interface Origin {
  x: number; //(default : 0.5): 页面上的x位置，0为左边缘，1为右边缘。
  y: number; //(default: 0.5): 页面上的y位置，0为上边缘，1为下边缘。
}
interface Options {
  particleCount: number; //default: 50 要发射的五彩纸屑的数量。更多总是有趣的…但要冷静，这涉及到很多数学问题。
  angle: number //(default : 90): 发射五彩纸屑的角度，以度为单位。90是直线上升的。
  spread: number//(default : 45): 五彩纸屑可以偏离中心多远，以度为单位。45表示五彩纸屑将以规定的角度正负22.5度发射。
  startVelocity: number//(default: 45): 五彩纸屑开始移动的速度，以像素为单位。
  decay: number//(default: 0.9): 五彩纸屑会多快失去速度。将此数字保持在0和1之间，否则五彩纸屑将获得速度。更好的是，永远不要改变它。
  gravity: number//(default: 1): 粒子被拉下的速度。1表示全重力，0.5表示半重力，等等，但没有限制。如果你愿意，你甚至可以让粒子上升。
  drift: number//(default: 0): 五彩纸屑会漂到哪一边。默认值为0，意味着它们将直线下降。左侧使用负数，右侧使用正数。
  ticks: number//(default: 200): 五彩纸屑会移动多少次。这是抽象的…但如果五彩纸屑对你来说消失得太快，就玩玩吧。
  origin: object//: 五彩纸屑会移动多少次。这是抽象的…但如果五彩纸屑对你来说消失得太快，就玩玩吧。
  colors: string[] //颜色字符串数组，十六进制格式…你知道，像#bada55。
  shapes: number//五彩纸屑的形状数组。可能的值是正方形和圆形。默认情况下，在均匀混合中使用两种形状。您甚至可以通过提供一个值来更改混合，例如[‘圆’、‘圆’，‘正方形’]，以使用三分之二的圆和三分之一的正方形。
  scalar: number//(default: 1): 每个五彩纸屑粒子的比例因子。使用小数使五彩纸屑变小。继续，试试小小的五彩纸屑，它们很可爱！
  zIndex: number//(default: 100): 毕竟，五彩纸屑应该在上面。但如果你有一个疯狂的高页面，你可以设置得更高。
  disableForReducedMotion: boolean//(default: false): 对于喜欢减少运动的用户，完全禁用五彩纸屑。在这种情况下，五彩纸屑（）承诺将立即解决。
}
interface Props {
  model: ConfettiModel;
  colors?: string[];
  options?: Options;
};

function randomInRange(min: number, max: number) {
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
  function fire(particleRatio: number, opts: object) {
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

  var interval: any = setInterval(function () {
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
const Snow = (props: Props) => {
  const colors = props.colors || ["#bb0000", "#ffffff"];

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
const Spray = (props: Props) => {
  const colors = props.colors || ["#bb0000", "#ffffff"];
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
const Custom = (props: Props) => {
  confetti(props.options);
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
export const confettiFunction = (props: Props,) => {
  return function start() {
    canvasMap[props ? props.model : "basic"](props)
  }
}
