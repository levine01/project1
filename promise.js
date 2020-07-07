const posts = [
  { title: "Home", body: "hey this is home" },
  { title: "house", body: "that is a sofa" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: something seems wrong");
      }
    }, 2000);
  });
}

//createPost({ title: "school", body: ///"i love learning" })
//  .then(getPosts)
//  .catch((err) => console.log(err));

//async / wait
async function init () {
    await createPost({title: 'Hello Levine', body: 'i guess you look good.....i miss you'});

    getPosts();
}

init();

/*promise.all
const Promise1 = Promise.resolve("Hello Levine");
const Promise2 = 20;
const Promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "I Love You")
);

Promise.all([Promise1, Promise2, Promise3]).then((values) =>
  console.log(values)
);*/

//async /await /fetch/ 
async function fecthData() {
    const res = await fetch
    ('hhtps://json.placeholder.typicode.com/users');

    const data = await res.json();

    console.log(data)
}

fecthData();