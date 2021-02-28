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

    public function boot()
    {
    	parent::boot();

    	$this->publishes([
    		__DIR__.'/../config/statamic-places.php' => config_path('statamic_places.php')
    	], 'config');

    	$this->externalScripts[] = 'https://maps.googleapis.com/maps/api/js?key='.config('statamic_places.api_key').'&libraries=places';
    }

    public function register()
    {
		$this->mergeConfigFrom(__DIR__.'/../config/statamic-places.php', 'statamic.statamic_places');
    }
}
