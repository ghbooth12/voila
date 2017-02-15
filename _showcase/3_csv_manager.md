---
layout: modal
modal-id: csvManager
title: CSV Manager
thumbnail-path: "assets/img/showcase/mac_csv_manager.png"
category: open-source
labels: [Open-Source, Ruby, Rails]
short-description: A gem that imports and exports a CSV file in a very easy and simple way. Curabitur venenatis felis non ipsum fringilla pharetra. Nam at dolor in velit pellentesque pulvinar.
more-projects: ["Faker", "FriendlyId", "GeoPlaces", "GeoCoder"]
---

{:.center}
![]({{ site.baseurl }}/assets/img/showcase/mac_csv_manager.png)

{:.center}
[View Full Site](https://github.com/ghbooth12/csv_manager){:target="\_blank"}


There are a lot of applications that use CSV files to import/export data. `csv_manager` is a gem that helps import/export a CSV file in a very easy and simple way.

```ruby
# Import a CSV file and parse the file
import = CSVManager::Import.new
import.parse('tmp/default.csv')
import.create(Product)

# Export a CSV file and download it
export = CSVManager::Export.new
export.download(products_controller, Product.all, "my_file.csv")
```


* Specify the csv file path or choose it by searching locally.
* Customize headers when importing.
* Populate database with imported CSV file.
* Download a CSV file with customized file name.