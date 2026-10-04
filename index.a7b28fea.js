document.querySelectorAll("li").forEach(function(e){if(e.querySelector("ul")){var t=document.createElement("span");e.prepend(t),t.append(t.nextSibling)}}),document.querySelector(".tree").addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.parentElement.querySelector("ul");t&&(t.hidden=!t.hidden)}});
//# sourceMappingURL=index.a7b28fea.js.map
