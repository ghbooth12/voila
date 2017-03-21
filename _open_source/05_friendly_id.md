---
layout: modal
modal-id: friendly_id
title: Friendly Id
thumbnail-path: "assets/img/open_source/friendly_id.png"
labels: [Open-Source, Ruby, Gem]
short-description: FriendlyId allows you to create pretty URL's and work with human-friendly strings as if they were numeric ids for ActiveRecord models. I made changes so that it can still find the match even when url is capitalized, also it can predict the data even when url gets stripped.
github_url: "https://github.com/norman/friendly_id"
---

{:.center}
![]({{ site.baseurl }}/assets/img/open_source/friendly_id.png)

{:.center}
[Gem Site](https://github.com/norman/friendly_id){:target="\_blank"}


FriendlyId allows you to create pretty URL's and work with human-friendly strings as if they were numeric ids for ActiveRecord models.

1. [Change it to case-insensitive url](https://github.com/norman/friendly_id/pull/787){:target="\_blank"}<br>
 When url is capitalized, FriendlyId couldn't find the match. I changed it case-insensitive so it can find the match in ActiveRecord and returns the expected response.

2. [Predict the data when not-found](https://github.com/norman/friendly_id/pull/788){:target="\_blank"}<br>
 If url gets stripped partially, it throws an error. But I made it predict what user meant so that it can print the error message with the possible data which is similar to the given url.