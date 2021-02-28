<?php

namespace CuBitCreative\StatamicPlaces;

use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $fieldtypes = [
    	PlacesSearch::class,
    ];

    protected $scripts = [
        __DIR__.'/../dist/js/statamic-places.js',
    ];

    protected $externalScripts = [
    	'https://maps.googleapis.com/maps/api/js?key=AIzaSyDlrHK6AD80wB5myV6s5C_xw4O71h6g6Us&libraries=places'
    ];
}
