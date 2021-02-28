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

    public function preProcessIndex($value)
	{
		$address = $value['line_1'] . ', ' . $value['city'] . ', ' . $value['state'];
	    return $value['line_1'] ? $address : '';
	}
}