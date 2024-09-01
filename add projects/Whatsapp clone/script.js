var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-links");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    // tabname.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    // addlink(tabname);
}

document.addEventListener("DOMContentLoaded", function () {
    function insertHtmlIntoElement(elementId, html) {
        const targetElement = document.getElementById(elementId);

        if (targetElement) {
            targetElement.insertAdjacentHTML('beforeend', html);
        } else {
            console.error(`Element with ID "${elementId}" not found.`);
        }
    }
    const htmlToInsert = `<div class="chat1">
    <div class="box1">
        <img src="./profile.png" alt="">
    </div>
    <div class="box2">
        <h3>Sultan</h3>
        <h4> <i class="fa fa-check color color" aria-hidden="true"></i>
            <i class="fa fa-check color color" aria-hidden="true"></i>
            Jai shri radhe
        </h4>
    </div>
    <div class="box3"> 20/03/2003 </div>
</div>`;
    const htmlToInsert2 = `<div class="chat1">
<div class="box1">
    <img src="./profile.png" alt="">
</div>
<div class="box2">
    <h3>Samrat</h3>
    <h4>Today 4:00am</h4>
</div>
<div class="box3"><i class="fa fa-video-camera" aria-hidden="true"></i></div>
</div>`;
    const st = `<div class="element">
<div class="pic">
    <img src="./profile.png" alt="">
</div>
<h4>Sultan</h4>
</div>`;
    for (let i = 0; i < 20; i++) {

        insertHtmlIntoElement('ch', htmlToInsert);
        insertHtmlIntoElement('call', htmlToInsert2);
        insertHtmlIntoElement('scrollright', st);
    }
});

