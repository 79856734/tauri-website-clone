function change(lang) {
  switch (lang) {
    case "Bash":
      document.getElementById("codeblock").innerHTML =
        '<table><tr><td><pre style="margin: 0; line-height: 125%;"></pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #789ce8">sh </span><(<span style="color: #789ce8">curl </span><span style="color: #c7a67a">https://create.tauri.app/sh</span>)</pre></td></tr></table>';

      document.getElementById("Bash").classList.add("highlight");
      document.getElementById("Powershell").classList.remove("highlight");
      document.getElementById("npm").classList.remove("highlight");
      document.getElementById("Cargo").classList.remove("highlight");
      break;

    case "Powershell":
      document.getElementById("codeblock").innerHTML =
        '<table><tr><td><pre style="margin: 0; line-height: 125%;"></pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #789ce8">irm</span><span style="color: #c7a67a"> https://create.tauri.app/ps </span>| <span style="color: #789ce8">iex</span></pre></td></tr></table>';

      document.getElementById("Bash").classList.remove("highlight");
      document.getElementById("Powershell").classList.add("highlight");
      document.getElementById("npm").classList.remove("highlight");
      document.getElementById("Cargo").classList.remove("highlight");
      break;

    case "npm":
      document.getElementById("codeblock").innerHTML =
        '<table><tr><td><pre style="margin: 0; line-height: 125%;"></pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #789ce8">npm </span><span style="color: #c7a67a">create tauri-app@latest</span></pre></td></tr></table>';

      document.getElementById("Bash").classList.remove("highlight");
      document.getElementById("Powershell").classList.remove("highlight");
      document.getElementById("npm").classList.add("highlight");
      document.getElementById("Cargo").classList.remove("highlight");
      break;

    case "Cargo":
      document.getElementById("codeblock").innerHTML =
        '<table><tr><td><pre style="margin: 0; line-height: 125%;"></pre></td><td><pre style="margin: 0; line-height: 125%"><span style="color: #789ce8">cargo </span><span style="color: #c7a67a">install create-tauri-app </span><span style="color: #789ce8">--locked</span><br/><span style="color: #789ce8">cargo </span><span style="color: #c7a67a">create-tauri-app</span></pre></td></tr></table>';

      document.getElementById("Bash").classList.remove("highlight");
      document.getElementById("Powershell").classList.remove("highlight");
      document.getElementById("npm").classList.remove("highlight");
      document.getElementById("Cargo").classList.add("highlight");
      break;
  }
}

function swapImages() {
  const isLight =
    window.matchMedia("(prefers-color-scheme: light)").matches ||
    document.documentElement.getAttribute("data-theme") === "light";

  document.querySelectorAll("#lightdarkimage").forEach((img) => {
    img.src = isLight
      ? img.src.replace("image.png", "image-light.png")
      : img.src.replace("image-light.png", "image.png");
  });
}

swapImages();

window
  .matchMedia("(prefers-color-scheme: light)")
  .addEventListener("change", swapImages);
new MutationObserver(swapImages).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["data-theme"],
});
