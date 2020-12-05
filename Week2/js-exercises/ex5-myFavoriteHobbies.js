const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

function createHTMLList(arr) {
  const app = document.querySelector("#app")
  app.innerHTML = "<ul>" + arr.map((hobby) => {
    return "<li>" + hobby + "</li>";
  }).join("") + "</ul>";
}
createHTMLList(myHobbies)

