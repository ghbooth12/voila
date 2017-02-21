---
layout: modal
modal-id: faker
title: Faker
thumbnail-path: "assets/img/open_source/faker.png"
labels: [Open-Source, Ruby, Gem]
short-description: Faker is a library for generating fake data such as names, addresses, and phone numbers. I made changes in Educator class and created a new class called Money which is similar to RubyMoney.
---

{:.center}
![]({{ site.baseurl }}/assets/img/open_source/faker.png)

{:.center}
[View Faker](https://github.com/stympy/faker){:target="\_blank"}

Faker is a library for generating fake data such as names, addresses, and phone numbers. I made changes in Educator class and created a new class called Money which is similar to RubyMoney. I also added more specific test code. 

1. [Modify course method in Educator class](https://github.com/stympy/faker/pull/803){:target="\_blank"}<br>
 The `course` method returns the degree name. I modified this to return the course name and created the degree method to return the degree name.

2. [Fix integer to float in Commerce.price method](https://github.com/stympy/faker/pull/807){:target="\_blank"}<br>
 The `price` method should return a float in string but it returns an integer in string. I made a pull-request to fix this.

3. [Create Money class](https://github.com/stympy/faker/pull/809){:target="\_blank"}<br>
 I created `Money` class with methods that can be flexible on language settings. For example, if locale is set to Germany, `Money.money_with_symbol` returns "€58.20".
