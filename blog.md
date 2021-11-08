Here goes the blog...

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="/NASA/{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
