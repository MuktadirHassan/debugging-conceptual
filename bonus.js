// document.addEventListener('DOMContentLoaded',()=> {

// })

const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("result-count");
const bookContainer = document.getElementById("book-container");
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", function () {
  const search = searchInput.value;
  if (search === "") {
    return;
  }

  const url = `https://openlibrary.org/search.json?q=${search}`;
  bookContainer.innerHTML = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showData(data);
    })
    .finally(() => {
      searchInput.value === "";
    });
});
function showData(data) {
  resultCount.innerText = data.numFound;
  data.docs.forEach((item) => {
    //   ফর লুপ যেহেতু, যত গুলা এলিমেন্ট, ততবার রিপিট হবে
    console.log(item);
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    // if(item.cover_i === undefined){

    // }
    div.innerHTML = `
          <!-- Image -->
          <div class="rounded overflow-hidden border p-2">
            <img
              src="https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg"
              class="w-100"
              alt="${item.title_suggest}"
            />
          </div>
          <!-- Body -->
          <div
            class="
              py-2
              d-flex
              justify-content-between
              align-items-center
              d-md-block
              text-md-center
            "
          >
            <h1>${item.title}</h1>
            <p>First Published: ${item.first_publish_year}</p>
            <p>Author:  ${item.author_name?.[0]}</p>
          </div>
          `;

    bookContainer.appendChild(div);
  });
}
