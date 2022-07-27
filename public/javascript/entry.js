async function entryFormHandler(event) {
  event.preventDefault();

  const entry_text = document
    .querySelector('textarea[name="entry-text"]')
    .value.trim();

  const entry_title = document
    .querySelector('textarea[name="entry-title"]')
    .value.trim();

  if (entry_text) {
    console.log("post fired");
    const response = await fetch("/api/entry", {
      method: "post",
      body: JSON.stringify({
        entry_title,
        entry_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
      console.log("page reloaded");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".entry-form")
  .addEventListener("submit", entryFormHandler);
