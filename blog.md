<h1>Welcome to the NASSA blog!</h1><br>
Visit here often to stay up-to-date on the latest contributions to the modelling library, <br>
interesting publications, announcements and all things NASSA. <br><br>

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="/NASSA-hub/{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.description }}
    </li>
  {% endfor %}
</ul>
