# telusko-js

started learning js from chai aur code

## project 5 solution code

```javascript
let timeOutRef;

const generateRandomColor = function () {
  let color = "#";
  const hexValues = "123456789ABCDEF";
  for (let i = 0; i < 6; i++)
    color += hexValues[Math.floor(Math.random() * 16)];
  return color;
};

document.querySelector("#start").addEventListener("click", function (e) {
  if (!timeOutRef) {
    timeOutRef = setInterval(function () {
      document.querySelector("body").style.backgroundColor =
        generateRandomColor();
    }, 1000);
  }
});

document.querySelector("#stop").addEventListener("click", function (e) {
  clearTimeout(timeOutRef);
  timeOutRef = null;
});
```

## project 6 solution code

```javascript
document.addEventListener("keydown", function (e) {
  document.querySelector("#key-clicked").innerHTML = `<div>
            <p>${e.key === " " ? "space" : e.key}</p>
            <p>${e.keyCode}</p>
            <p>${e.code}</p>
        </div>`;
});
```
