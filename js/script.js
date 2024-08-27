document.addEventListener("DOMContentLoaded", function () {
  // Replace Full Name
  const userFullName = "Harry Ortega";
  document.getElementById("replace_name").textContent = userFullName;

  // Change Name via Button
  document
    .querySelector(".btn.btn-primary.btn-pill")
    .addEventListener("click", function () {
      let newName = "";
      while (!newName.trim()) {
        newName = prompt("Please enter a new full name:", userFullName);
        if (!newName.trim()) {
          alert("Name cannot be empty. Please enter a valid name.");
        }
      }
      document.getElementById("replace_name").textContent = newName;
    });

  // Replace current date
  const currentDate = new Date().toLocaleDateString();
  document.getElementById("replaceDate").textContent = currentDate;

  // Replace email
  const email = "harry.ortega6148@mycanctb.ca";
  document.getElementById("replaceEmail").textContent = email;

  // Update protocols section
  const protocols = [
    { protocol: "HTTP", port: 80 },
    { protocol: "HTTPS", port: 443 },
    { protocol: "SSH", port: 22 },
    { protocol: "DNS", port: 53 },
  ];
  protocols.forEach((item, index) => {
    document
      .querySelectorAll(".col-6.col-md-3")
      [index].querySelector("p").textContent = `${item.port} port / Layer 7`;
  });

  // Dynamic list of items
  document
    .querySelector(".btn.btn-primary.btn-soft")
    .addEventListener("click", function () {
      let itemCount = 0;
      while (itemCount <= 0 || itemCount > 10) {
        itemCount = parseInt(
          prompt("How many items would you like in the list?"),
          10
        );
        if (itemCount <= 0 || itemCount > 10 || isNaN(itemCount)) {
          alert("Please enter a number between 1 and 10.");
        }
      }

      const listContainer = document.getElementById("listItems");
      listContainer.innerHTML = `<h2 class="fw-bold mb-5">List of <span class="text-primary fw-medium">Items</span></h2>`;
      for (let i = 1; i <= itemCount; i++) {
        listContainer.innerHTML += `
            <div class="d-flex mb-4">
                <div class="text-primary">
                    <img width="40" height="20" src="demo.files/svg/various/line-chart.svg" alt="...">
                </div>
                <div class="mx-2">
                    <h3 class="h5 fw-bold mb-1">Item #${i}</h3>
                    <p>This is item #${i}.</p>
                </div>
            </div>
            `;
      }
      listContainer.innerHTML += `
            <div class="text-align-end">
							<a href="#" class="btn btn-primary btn-soft">How many items would you like in
								the list?</a>
						</div>`;
    });
});
