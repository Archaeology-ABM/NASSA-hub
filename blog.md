<h1>Welcome to the NAS²A blog!</h1><br><br>
Visit here often to stay up-to-date on the latest contributions to the modelling library, <br>
interesting publications, announcements and all things NASSA. <br><br>

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="/NASA/{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.description }}
    </li>
  {% endfor %}
</ul>
