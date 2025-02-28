// script.js

document.getElementById('spin-button').addEventListener('click', function () {
  const article = document.getElementById('article-input').value.trim();
  const keywords = document.getElementById('keywords-input').value.trim().split(',').map(k => k.trim());
  const intensity = document.getElementById('intensity').value;

  if (!article || !keywords || keywords.length === 0) {
    alert('Please provide both an article and SEO keywords.');
    return;
  }

  // Simulate spinning logic
  const spunArticle = spinArticle(article, keywords, intensity);

  // Display the result
  document.getElementById('output').innerHTML = `<p>${spunArticle}</p>`;
});

function spinArticle(article, keywords, intensity) {
  let words = article.split(' ');
  const keywordDensity = intensity === 'high' ? 0.3 : intensity === 'medium' ? 0.2 : 0.1;

  // Replace some words with synonyms or integrate keywords
  words = words.map((word, index) => {
    if (Math.random() < keywordDensity && keywords.length > 0) {
      return keywords[index % keywords.length]; // Replace with a keyword
    }
    return word;
  });

  // Join words back into a sentence
  return words.join(' ');
}
