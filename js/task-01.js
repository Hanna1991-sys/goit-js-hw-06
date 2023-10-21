const totalCategories = document.querySelectorAll('.item');
console.log(totalCategories);
console.log(`Number of categories: ${totalCategories.length}`);

const titlesCategories = document.querySelectorAll('h2');
titlesCategories.forEach((title) => {
  console.log('Category:', title.textContent);
  console.log('Elements:', title.nextElementSibling.children.length);
});