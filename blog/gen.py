from datetime import datetime
from markdown import markdown

title = input("Title: ")
description = input("Description: ")
header = f"""<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{title}</title>
    <link href="../assets/style.css" rel="stylesheet">
    <link rel="icon" href="../assets/Desync.png" />

    <meta content="{title}" property="og:title" />
    <meta content="{description}" property="og:description" />
    <meta content="https://desyncd.xyz/blog/{title.lower().replace(' ', '-')}.html" property="og:url" />
    <meta content="https://desyncd.xyz/assets/Desync.png" property="og:image" />
    
    <!-- Mastodon!! -->
    <meta name="fediverse:creator" content="@desync@social.desyncd.xyz">
  </head>
  <body>
  <div style="text-align: center; margin: auto;" class="dynamicsize dynamicmdsize">
    <h1>{title}</h1>
    <h3 style="color: gray;">{datetime.today().strftime('%Y/%m/%d')}</h3>
    <hr>"""

end = f"""      <br><br><a style="background-color: #00bbff; border-radius: 0px; padding: 10px; border-width: 2px; border-style: outset; color: white; text-decoration-line: none;" href="blog.html">Return Back</a>
  </div>
  </body>
</html>"""

with open('input.md', 'r') as f:
    content = f.read()
    # Convert to HTML
    content = markdown(content)
    content = content.replace('\n', '<br>')
    html = header + content + end

with open(f'{title.lower().replace(" ", "-")}.html', 'w') as f:
    f.write(html)

# Add blog to blog.html portal
# Implementation notes: Rebuild website every time 
# Inconvient, but easy to implement 
blogstart = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../assets/Desync.png">
    <title>desync.d</title>
    <link href="../assets/style.css" rel="stylesheet">
    <meta name="description" content="Desync's Blog.">
    <meta name="keywords" content="desync, programming, desyncfy, desync.d, linux, coding, code, foss, open source, oss, floss">
  </head>
  <body>
    <h1 id="title">
      <span style="color: lightblue;">sudo</span> 
      <span style="color: skyblue;">systemctl</span>
      <span style="color: orange;">enable</span> 
      --now 
      <span style="color: palevioletred;">blog.service</span>

    </h1>

    <!-- Posts -->
    <div id="portfolio">
      <div class="item item-top" style="color: white; font-weight: 900;">
        Posts
      </div>"""


blogend = """      <div class="item old-post">
        <a href="mstdnvbsky.html">Mastodon & Bluesky (LEGACY)</a>
        <br>
        I use Mastodon, but recently Bluesky has been gaining popularity.
      </div>
      <div class="item old-post">
        <a href="evoting.html">E-Voting is Stupid (LEGACY)</a>
        <br>
        Online voting is super stupid.
      </div>
      <div class="item old-post">
        <a href="microblog.html">Microblog (LEGACY)</a>
        <br>
        Small Posts.
      </div>
    </div>
    <!-- Contact Information -->
    <div id="contact">
      <a href="https://desyncd.xyz"> Home</a>
      <a target="_blank" href="https://github.com/desyncfy"> Github</a>
      <a target="_blank" rel="me" href="https://social.desyncd.xyz/@desync"> Mastodon</a>
      <a target="_blank" href="mailto:desync@desyncd.xyz">󰛮 E-Mail</a>
    </div>
  </body>
</html>"""
