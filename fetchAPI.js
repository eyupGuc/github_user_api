let userData;

fetch("https://api.github.com/users")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => updateDOM(data))
  .catch((hata) => console.log(hata));

const updateDOM = (data) => {
  console.log(data);
};

const userDiv = document.querySelector(".users");
