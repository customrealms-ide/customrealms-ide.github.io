async function main() {
  const header = await fetch("/header.html").then(res => res.text());
  document.body.innerHTML = `${header}${document.body.innerHTML}`;
}

main();
