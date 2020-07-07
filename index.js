// callbacks

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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

getPosts();

createPost(
  {
    title: "course",
    body: "i take mathematics and computer Science",
  },
  getPosts
);
