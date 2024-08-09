const fake_img = document.getElementById("fake");
const real_img = document.getElementById("real");
const streak_element = document.getElementById("streak");
let streak = 0;

function game() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  const fake_link = "https://thispersondoesnotexist.com";
  const real_link = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;

  const random_number = Math.floor(Math.random() * 10);
  if (random_number <= 5) {
    real_img.src = real_link;
    real_img.onclick = real_alert;
    fake_img.src = fake_link;
    fake_img.onclick = fake_alert;
  } else {
    real_img.src = fake_link;
    real_img.onclick = fake_alert;
    fake_img.src = real_link;
    fake_img.onclick = real_alert;
  }
}

function real_alert() {
  alert("correct");
  streak++;
  streak_element.innerText = "your sreak is:" + streak;
  game();
}
function fake_alert() {
  alert("incorrect");
  streak = 0;
  streak_element.innerText = "your sreak is:" + streak;
  game();
}
game();
