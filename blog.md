<h1>Welcome to the NASSA blog!</h1><br>
Visit here often to stay up-to-date on the latest contributions to the modelling library, <br>
interesting publications, announcements and all things NASSA. <br><br>

<table style="border: none; width: 100%;">
  <colgroup>
    <col span="1" style="width: 10%;">
    <col span="1" style="width: 90%;">
  </colgroup>
  {% for post in site.posts %}
    <tr>
      <td style="border-right: 5px solid; border-left: none;border-top: none; border-bottom: none; border-color: #03989E; text-align: right;">
      <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
      </td>
      <td style="border: none;">
        <h2><a href="/NASSA-hub/{{ post.url }}">{{ post.title }}</a></h2>
        {{ post.description }}<br>
        {% if post.image_src %}
          <img src="{{site.baseurl}}/assets/{{post.image_src}}">
        {% endif %}
      </td>
    </tr>
  {% endfor %}
</table>
