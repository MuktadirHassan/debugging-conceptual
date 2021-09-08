const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("search-btn");
const countryContainer = document.getElementById("country-container");
const countryDetails = document.getElementById("country-details");
const errorDiv = document.getElementById("error");
const spinner = document.getElementById("spinner");

searchBtn.addEventListener("click", function () {
  const search = searchInput.value;
  if (search === "") {
    errorDiv.innerText = "Search field cannot be empty.";
    return;
  }
  //   Clear
  countryContainer.innerHTML = "";
  countryDetails.innerHTML = "";
  const url = `https://restcountries.eu/rest/v2/name/${search}`;
  spinner.classList.remove("d-none");
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      spinner.classList.add("d-none");
      showData(data);
    })
    .finally(() => {
      searchInput.value = "";
    });
});

function showData(countryArray) {
  // Error Handing
  if (countryArray.message === "Not Found") {
    errorDiv.innerText = "NO Result Found";
  } else {
    errorDiv.innerText = "";
  }

  countryArray.forEach((item) => {
    //   ফর লুপ যেহেতু, যত গুলা এলিমেন্ট, ততবার রিপিট হবে
    console.log(item.flag);
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.innerHTML = `
      <!-- Image -->
      <div class="rounded overflow-hidden border p-2">
        <img
          src="${item.flag}"
          class="w-100"
          alt=""
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
        <h1>${item.name}</h1>
        <button onclick="showDetails('${item.alpha3Code}')" class="btn btn-dark">Learn More</button>
      </div>
      `;
    countryContainer.appendChild(div);
  });
}
function showDetails(alpha3Code) {
  fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
    .then((res) => res.json())
    .then((data) => {
      // data -> OBJECT
      // data.currencies -> Array
      // data.currencies[0] -> Object
      // data.currencies[0].name
      console.log(data.currencies[0].name);
      countryDetails.innerHTML = `
        <div class="col-md-12">
            <h1>${data.name}</h1>
            <p>Capital: ${data.capital}</p>
            <p>Currency Name: ${data.currencies[0].name}</p>
            <p>Currency Symbol: ${data.currencies[0].symbol}</p>
        </div>
      `;
    });
}
