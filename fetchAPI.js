let userData;

fetch("https://api.github.com/users")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => updateDOM(data))
  .catch(err);

console.log(userData);
