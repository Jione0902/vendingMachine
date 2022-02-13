const mainName = document.querySelector(".name-input");
const resultBtn = document.querySelector(".result-btn");
const comment = document.querySelector(".comment");

const comments = [
  "너...정말 대단해.",
  "깜짝 놀랐어! 넌 천재야 ⎝⍢⎠",
  "있잖아, 널 사랑해~ ˚₊·—̳͟͞͞♡",
  "너.. 떤 것치고는 상당히 잘 했어 ⎝⍥⎠",
  "나의 깜찍토끼, 너무 고생했어. 눈물을 거둬요 ო̤̫",
  "오늘치 사랑을 듬뿍 담아 보내요 ꒰⍢꒱ ༘*",
  "오늘 하루를 살아낸 당신은 멋쟁이 ⟡",
  "널 향한 ☎ 사랑의 모닝콜 ^--^ ☎",
  "너 이걸 다 해낸거야? 감동의 눈물( ⸝⸝⸝ʚ̴̶̷̆ωʚ̴̶̷̆⸝⸝)",
  "행복해져라~ 뾰로롱ଘ(੭ˊᵕˋ)੭* ੈ✩‧₊˚",
  "쭉 같이 살아가자! 그게 젤 멋진일인걸!",
  "네가 옆에 있어서 얼마나 기쁜지 넌 모를걸?₍ᐢ.ˬ.ᐢ₎❤️",
  "어디까지 멋져질셈이지?!",
  "넌 언제나 나의 말랑모찌깜찍콩떡인걸",
  "너무 소중해. 볼따구를 와앙 깨물고 싶어◜◡◝",
  "나의 천사, 요즘 날개는 집에 두고 다니는구나?",
  "넌 우리의 사랑둥이✦ ̮ ✦",
  "넌 충분히 최선을 다했어! 자책금지!🚫",
  "너...말랑물만두지... 그게 아니라면 어떻게 이렇게 귀엽고 말랑하고 깜찍한거야?",
  "나 너 MBTI 알아! 그건 바로..LOVE..💖",
  "우리 힘들어도 오래오래 같이 살아남자( ੭ ̇ᗜ ̇ )੭",
  "너무 흔한말인가? 그래도 사랑해!!",
];

function getRandom() {
  const result = Math.floor(Math.random() * comments.length);
  return result;
}

function printResult() {
  comment.classList.remove("hidden");
  comment.textContent = `${mainName.value}, ${comments[getRandom()]}`;
}
resultBtn.addEventListener("click", printResult);
mainName.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    printResult();
  }
});
