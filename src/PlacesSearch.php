<?php

namespace CuBitCreative\StatamicPlaces;

use Statamic\Fields\Fieldtype;

class PlacesSearch extends Fieldtype
{
	protected $icon = 'earth';

	protected function configFieldItems(): array
    {
        return [
            'expand_on_select' => [
                'type' => 'toggle',
                'instructions' => 'Show editable fields, once a Place is selected.',
                'width' => '50',
            ],
        ];
    }

    public function augment($location)
    {
        $url = $location['google_url'] ??
            'https://google.com/maps/place/' . urlencode($location['line_1'].', '.$location['city'].', '.$location['state'].' '.$location['zipcode']);
        
        $location['map_url'] = $url;

        return $location;
    }

    public function preProcessIndex($value)
	{
        $prefix = $value['title'] ? $value['title'] . ', ' : '';
		$address = $value['line_1'] . ', ' . $value['city'] . ', ' . $value['state'];
	    return $prefix . ($value['line_1'] ? $address : '');
	}
}