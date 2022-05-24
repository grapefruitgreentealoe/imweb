const modal = document.getElementById("myModal");
const modal_content = document.querySelector(".modal-content");
const content = document.querySelector(".modal-content .post-content");

for (i = 1; i < 21; i++) {
  let div = document.createElement("DIV");
  let t = document.createElement("H1");
  let c = document.createElement("DIV");
  let t_inner;
  let c_inner;
  if (i % 3 == 0) {
    t_inner = "Long Title Long Title Long Title Long Title";
    c_inner = "long content ".repeat(20);
  } else {
    t_inner = "title";
    c_inner = "content";
  }
  t.innerText = t_inner;
  c.innerText = c_inner;
  t.classList.add("title");
  c.classList.add("content");

  let postimg = document.createElement("IMG");
  postimg.classList.add("postimg");

  div.append(postimg, t, c);
  div.classList.add("postcard");

  div.onclick = function () {
    modal.style.display = "block";
    let content_text = document.createElement("DIV");
    content_text.style.display = "flex";
    content_text.style.flexDirection = "column";
    content_text.classList.add("text-content");

    let modal_postimg = postimg.cloneNode(true);
    let modal_t = t.cloneNode(true);
    let modal_c = c.cloneNode(true);
    modal_t.classList.remove("title");
    modal_c.classList.remove("content");

    content.append(modal_postimg);
    content.append(content_text);
    content_text.append(modal_t, modal_c);
  };
  document.querySelector(".postcards").appendChild(div);
}
