console.log("awesome notes");
//add new element

const neWParagraph = document.createElement("p");
neWParagraph.textContent = "i like reading";
document.querySelector("body").appendChild(neWParagraph);

const note=[
    {
        title:"my next step",
        body:"awesome spain it is",
    },
    {
        title:"attend book session",
        body:"london arts",
    },
    {
        title:"book i am reading",
        body:"safe habour",
    },
    {
        title:"java script conference",
        body:"amsterdam center,netherlands",
    },
    {
        title:"formulae1",
        body:"qatar rally",
    },
];
note.forEach(function (note) {
    const p =document.createElement("p");
    p.textContent = `${note.title}-- ${note.body}`;
    document.querySelector("body").appendChild(p);

    
});
document
.querySelector("#createNote")
.addEventListener("click",function (event) {
event.target.textContent = "the button was clicked";
});
document
.querySelector("#removeNotes")
.addEventListener("click",function (event) {
    document.querySelectorAll("p").forEach(function (item) {
        item.remove();
 });
    
});
