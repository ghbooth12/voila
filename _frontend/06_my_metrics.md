---
layout: modal
modal-id: my_metrics
title: Metrics
thumbnail-path: "assets/img/frontend/my_metrics.png"
labels: [D3.js (visualization library)]
short-description: Metrics is an analytics tracker for the music player app that can track metrics such as song play count, a list of songs played, number of visits to each page, etc.
---

{:.center}
![]({{ site.baseurl }}/assets/img/frontend/my_metrics.png)

{:.center}
[View Full Site](https://my-metrics-ghbooth12.herokuapp.com/metrics){:target="\_blank"}


Metrics is an analytics tracker for the music player app that can track metrics such as song play count, a list of songs played, number of visits to each page, etc.

Metrics focuses on these important components:

* A client-side event handler that executes a callback when an arbitrary metric is recorded
* An Angular model to captures displayable events
* A new state accessible from the navigation that handles all of the operations on the analytics service
