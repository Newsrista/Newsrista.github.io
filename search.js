document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('searchInput');
  const postsDiv = document.querySelector('.posts');

  searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();

    fetch('/search_data.json')
      .then(response => response.json())
      .then(posts => {
        postsDiv.innerHTML = ''; // Clear current posts
        posts.filter(post => post.title.toLowerCase().includes(searchTerm) || post.excerpt.toLowerCase().includes(searchTerm))
             .forEach(post => {
               const postElement = `<article class="post">
                 <h1><a href="${post.url}">${post.title}</a></h1>
                 <div class="entry">${post.excerpt}</div>
                 <a href="${post.url}" class="read-more">Read More</a>
               </article>`;
               postsDiv.insertAdjacentHTML('beforeend', postElement);
                      
               <script src="{{ site.baseurl }}/assets/js/search.js"></script>
                      

             });
      });
  });
});

