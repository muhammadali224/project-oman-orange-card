var itemList = [
    { title: "الاتحادات العربية", url: "#" },
    { title: "شروط العضوية", url: "#" },
    {
        title: "اصدار البطاقة",
        url: "#",
        subItems: [
            { title: "خطوات اصدار البطاقة ", url: "#" },
            { title: "التزامات المكتب العماني", url: "#" },
            { title: "المرفقات والوثائق", url: "#" }
        ]
    },
    { title: "الرئيسية", url: "#" }
];



var listUs = [
    { title: "الرؤية", description: "التميز في العمل التنسيقي التأميني محليا وعربيا", readmore: false, link: "" },
    {
        title: "الرسالة", description: `تفعيل عمل التامين العربي المشترك فيما يخص سير المركبات عبر الدول العربية.
    تقديم الخدمات والمنتجات اللازمة لتمكين شركات التامين عبر الدول العربية من القيام بمهامها وفق نهج تشاركي تنسيقي وصولا إلى تحقيق رضى الزبائن ووفق أفضل الممارسات الدولية في هذا المجال.` ,
        readmore: true,
        link: "#",
    },
    {
        title: "الأهداف", description: "المساهمة في تحسين هيكلية قطاع التامين من خلال إصدار البطاقة البرتقالية وبيعها إلى شركات التامين المحلية والمنضمة إلى عضوية المكتب العماني الموحد.",
        readmore: true,
        link: "#",
    },
];

var imageArray = [
    "001.png",
    "002.png",
    "003.png",
    "004.png",
    "005.png",
    "006.png",
    "007.png",
    "008.png",
    "009.png",
];

function addMenuItems() {
    var menuList = document.getElementById("menu-list");
    for (var i = 0; i < itemList.length; i++) {
        var menuItem = document.createElement("li");
        menuItem.className = "menu-item";
        menuItem.innerHTML = '<a href="' + itemList[i].url + '">' + itemList[i].title + '</a>';
        if (itemList[i].subItems) {
            var subMenu = document.createElement("ul");
            subMenu.className = "sub-menu";

            for (var j = 0; j < itemList[i].subItems.length; j++) {
                var subMenuItem = document.createElement("li");
                subMenuItem.className = "sub-menu-item"
                subMenuItem.innerHTML = '<a href="' + itemList[i].subItems[j].url + '">' + itemList[i].subItems[j].title + '</a>';
                subMenu.appendChild(subMenuItem);
            }

            menuItem.appendChild(subMenu);
        }

        menuList.appendChild(menuItem);
    }
}

addMenuItems();

function fixMenuOnScroll() {
    var menu = document.querySelector('.menu');
    var offset = menu.offsetTop;

    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= offset) {
            menu.classList.add('fixed');
        } else {
            menu.classList.remove('fixed');
        }


    });


}

fixMenuOnScroll();



var cardContainer = document.getElementById("card-container");


function createCard(title, description, readMore, link) {
    var card = document.createElement("div");
    card.className = "card";

    var cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    cardTitle.textContent = title;

    var cardDescription = document.createElement("p");
    cardDescription.className = "card-description";
    cardDescription.textContent = description;

    card.appendChild(cardTitle);
    card.appendChild(cardDescription);

    if (readMore) {
        var readMoreLink = document.createElement("a");
        readMoreLink.className = "read-more";
        readMoreLink.textContent = "إقرا المزيد";
        readMoreLink.href = link;

        card.appendChild(readMoreLink);
    }
    return card;
}



listUs.forEach(element => {
    var card = createCard(element.title, element.description, element.readmore, element.link);
    cardContainer.appendChild(card);
});



var slideTrack = document.getElementById("slide-track");

for (var i = 0; i < imageArray.length; i++) {
    var slideDiv = document.createElement("div");
    slideDiv.className = "slide";

    const img = document.createElement("img");
    img.src = '../images/partner/' + imageArray[i] + '';
    img.alt = "Partner Logo";

    slideDiv.appendChild(img);

    slideTrack.appendChild(slideDiv);



}

window.addEventListener("scroll", function () {
    var floatSocial = document.querySelector(".float-social");
    var footer = document.querySelector("footer");
    var footerOffset = footer.offsetTop;
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition + window.innerHeight >= footerOffset) {
        floatSocial.style.display = "none";
    } else {
        floatSocial.style.display = "block";
    }
});












