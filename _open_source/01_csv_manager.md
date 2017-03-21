---
layout: modal
modal-id: csv_manager
title: CSV Manager
thumbnail-path: "assets/img/open_source/csv_manager.png"
labels: [Open-Source, Ruby, Rails, Gem]
short-description: CSV Manager is a gem that I created. It imports and exports a CSV file in a simple way. It can also populate the database with data from the imported CSV file. Any database can be downloaded as a CSV file with the CSV Manager.
github_url: "https://github.com/ghbooth12/csv_manager"
---

{:.center}
![]({{ site.baseurl }}/assets/img/open_source/csv_manager.png)

{:.center}
[View CSV Manager](https://github.com/ghbooth12/csv_manager){:target="\_blank"}


There are a lot of applications that use CSV files to import/export data. `csv_manager` is a gem that helps import/export a CSV file in a very easy and simple way. It can also populate the database with data from the imported CSV file. Any database can be downloaded as a CSV file with `csv_manager`.

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
* Populate database with imported CSV file.
* Download a CSV file with customized file name.