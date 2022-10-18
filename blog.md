<h1>Welcome to the NASSA blog!</h1><br>
Visit here often to stay up-to-date on the latest contributions to the modelling library, <br>
interesting publications, announcements and all things NASSA. <br><br>

<table style="border-collapse: collapse; width: 100%;">
  <colgroup>
    <col span="1" style="width: 20%;">
    <col span="1" style="width: 70%;">
  </colgroup>
  {% for post in site.posts %}
    <tr>
      <td style="border-right: 5px solid; border-left: none;border-top: none; border-bottom: none; border-color: #03989E; text-align: right;">{{ page.date | date_to_string }}</td>
      <td><h2><a href="/NASSA-hub/{{ post.url }}">{{ post.title }}</a></h2>{{ post.description }}</td>
    </tr>
  {% endfor %}
</table>
