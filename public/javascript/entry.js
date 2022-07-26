async function entryFormHandler(event) {
  event.preventDefault();

  const entry_text = document
    .querySelector('textarea[name="entry-body"]')
    .value.trim();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (entry_text) {
    const response = await fetch("/api/entry", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        entry_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".entry-form")
  .addEventListener("submit", entryFormHandler);
