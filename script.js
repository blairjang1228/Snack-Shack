const menuItems = [
  {
    name: "Cheetos",
    price: "$1.50",
    image: "https://www.pngkit.com/png/detail/859-8591257_cheetos-crunchy-cheetos-bag.png"
  },
  {
    name: "Reese's Cups",
    price: "$1.75",
    image: "https://s7d2.scene7.com/is/image/hersheysassets/0_34000_00440_9_701_44000_136_Item_Front?fmt=png-alpha&hei=908"
  },
  {
    name: "Haribos",
    price: "$1.50",
    image: "https://www.pngkey.com/png/detail/533-5331090_quick-view-haribo-confectionery-gold-bears-stand-up.png"
  },
  {
    name: "Trolli's Crawlers",
    price: "$1.50",
    image: "https://www.pngkit.com/png/detail/157-1572950_trolli-sour-brite-gummy-worms.png"
  },
  {
    name: "KitKat",
    price: "$1.75",
    image: "https://s7d1.scene7.com/is/image/hersheyprodcloud/0_34000_00246_7_701_24600_073_Item_Front?fmt=webp-alpha&hei=908&qlt=75"
  },
  {
    name: "Extra Gum",
    price: "$1.25",
    image: "https://toppng.com/uploads/preview/chewing-gum-food-transparent-11665309674fezwf3dnre.png"
  },
  {
    name: "Chocolate Chip Cookie",
    price: "$1.00",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chocolate_chip_cookie.jpg?width=640",
    alt: "Chocolate chip cookie"
  },
  {
    name: "Granola Bar",
    price: "$1.50",
    image: "https://www.kindpng.com/picc/m/281-2818068_granola-bar-png-nature-valley-granola-bars-transparent.png"
  },
  {
    name: "Pretzels",
    price: "$1.25",
    image: "https://www.snydersofhanover.com/wp-content/uploads/Traditional-Mini-Pretzels.png"
  },
  {
    name: "Cheez-Its",
    price: "$1.25",
    image: "https://www.pngkit.com/png/detail/328-3287542_cheez-it-cheez-its-bag.png"
  },
  {
    name: "Chex Mix",
    price: "$1.75",
    image: "https://www.chexmix.com/_next/image?q=75&url=https%3A%2F%2Fmojo.generalmills.com%2Fapi%2Fpublic%2Fcontent%2F-DKG4ltTQIipJNVFZe7hcQ_04c57eea-66a2-45cd-a3f2-ecd27146a451_04c57eea-66a2-45cd-a3f2-ecd27146a451.png%3Fv%3D8ddec089%26t%3D04c57eea66a245cda3f2ecd27146a451&w=1400"
  },
  {
    name: "Apple Juice Box",
    price: "$1.50",
    image: "https://www.pngkey.com/png/detail/831-8311914_minute-maid-apple-juice-box.png"
  }
];

function renderMenu() {
  const grid = document.querySelector("[data-menu-grid]");

  grid.innerHTML = menuItems.map((item) => `
    <article class="menu-card">
      <div class="image-frame">
        <img class="food-picture" src="${item.image}" alt="${item.alt || `${item.name} packaging`}" loading="lazy">
      </div>
      <div class="card-body">
        <h3 class="item-name">${item.name}</h3>
        <p class="item-price">${item.price}</p>
      </div>
    </article>
  `).join("");
}

renderMenu();
