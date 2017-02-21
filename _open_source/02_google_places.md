---
layout: modal
modal-id: google_places
title: Google Places
thumbnail-path: "assets/img/open_source/google_places.png"
labels: [Open-Source, Ruby, Gem]
short-description: Google Places provides a Ruby wrapper around the Google Places API, using HTTParty. I contributed to this gem by making the `spots` method return spots with its full information including the address, url and more.
---

{:.center}
![]({{ site.baseurl }}/assets/img/open_source/google_places.png)

{:.center}
[View Google Places](https://github.com/qpowell/google_places){:target="\_blank"}


Google Places provides a Ruby wrapper around the Google Places API, using HTTParty. This gem's previous `spots` method returned information of the Google Place that user sent. But some of information require an extra API call for the Google Place.

I changed the `spots` method to return Google Places with its full information including the address, url and more. I also added more specific test code. Since my [pull-request](https://github.com/qpowell/google_places/pull/88){:target="\_blank"} has been merged, it can provide full information of Google Places.