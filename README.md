# Places for Statamic
This package provides a fieldtype for searching and selecting a location from the Google Places API.

### Generate a Key
To use this addon, you'll need an API key from the APIs & Services product in the Google Cloud console. If you don't already have that on hand, you can [generate a new one here](https://console.developers.google.com/apis/credentials).

### Publishing the Config
By default, the addon will check your `.env` for a `STATAMIC_PLACES_KEY` property. If you have your key stored in a different property, publish the config and update that value accordingly:

```shell
php artisan vendor:publish --tag=statamic-places-config
```

### Questions?
Drop us a line or [open an issue](https://github.com/cubitcreative/statamic-places/issues)!