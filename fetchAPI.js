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

const updateDOM = (users) => {
  console.log(users);
  //   userDiv.innerHTML = `<img width="200px" src="${users[0].avatar_url} "> <h1> ${users[0].login}
  //   `;
  users.forEach((user) => {
    const { login, avatar_url: avatar, html_url, site_admin } = user;
    userDiv.innerHTML += `<div><img src="${avatar}" width="300px" /> <h2> name:${login}</h2>  <a href="${html_url} ">${html_url} </a> </div> `;
  });
};

const userDiv = document.querySelector(".users");
