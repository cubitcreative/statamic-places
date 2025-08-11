<?php

namespace CuBitCreative\StatamicPlaces;

use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
	protected $config = false;
    protected $externalScripts = [];
    protected $fieldtypes = [ 
    	PlacesSearch::class, 
    ];
    protected $scripts = [
        __DIR__.'/../dist/js/statamic-places.js',
    ];

    public function bootAddon()
    {
        $this->publishes([
            __DIR__.'/../config/statamic-places.php' => config_path('statamic/places.php'),
        ], 'statamic-places-config');

        $this->externalScripts[] = 'https://maps.googleapis.com/maps/api/js?key='.config('statamic_places.api_key').'&libraries=places';
    }

    public function register()
    {
        parent::register();

        $this->mergeConfigFrom(__DIR__.'/../config/statamic-places.php', 'statamic.places');
    }
}
