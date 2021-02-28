<template>
    <div>
        <div class="flex items-center w-full mb-4">
            <div class="flex-grow">
                <text-input :id="fieldId"
                    type="text" 
                    :placeholder="placeholder"
                    :value="selectedPlace.title" 
                />
            </div>
            <div @click="resetSelectedPlace" class="flex text-red ml-2 mr-1 opacity-50 hover:opacity-100 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19">
                    <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2" transform="translate(1 1.545)">
                        <path d="M16 0L.160533333 15.8389333M16 15.8389333L.160533333 0"/>
                    </g>
                </svg>
            </div>
        </div>

        <div v-if="selectedPlace.line_1 && config.expand_on_select" class="flex flex-wrap -mx-2">
            <div class="w-full px-2 mb-3">
                <label>Address Line 1</label>
                <text-input type="text" 
                    placeholder="123 Cherry Lane"
                    :value="selectedPlace.line_1" 
                    @input="update"
                />
            </div>

            <div class="w-1/2 md:w-1/4 px-2 mb-3">
                <label>City</label>
                <text-input type="text" 
                    placeholder="Kansas City"
                    :value="selectedPlace.city" 
                    @input="update"
                />
            </div>
            <div class="w-1/2 md:w-1/4 px-2 mb-3">
                <label>State</label>
                <text-input type="text" 
                    placeholder="MO"
                    :value="selectedPlace.state" 
                    @input="update"
                />
            </div>
            <div class="w-1/2 md:w-1/4 px-2 mb-3">
                <label>Zipcode</label>
                <text-input type="tel" 
                    placeholder="64102"
                    :value="selectedPlace.zipcode" 
                    @input="update"
                />
            </div>
            <div class="w-1/2 md:w-1/4 px-2 mb-3">
                <label>Country</label>
                <text-input type="text" 
                    placeholder="USA"
                    :value="selectedPlace.country" 
                    @input="update"
                />
            </div>

            <div class="w-1/2 px-2 mb-3">
                <label>Lat</label>
                <text-input type="tel" 
                    placeholder="39.0889824"
                    :value="selectedPlace.lat" 
                    @input="update"
                />
            </div>
            <div class="w-1/2 px-2 mb-3">
                <label>Lon</label>
                <text-input type="tel" 
                    placeholder="-94.6068529"
                    :value="selectedPlace.lon" 
                    @input="update"
                />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PlacesSearch',
    	mixins: [Fieldtype],

        props: {
            placeholder: {
                type: String,
                default: "Search..."
            },
            value: {
                type: Object,
                default(){ return {}; }
            },
        },
        data(){ 
            return {
                placesSearch: null,
                selectedPlace: {},
            }; 
        },

        mounted: function () {
            this.initSelectedPlace();
            this.initPlacesSearch();
            if(this.value.line_1){
                this.selectedPlace = this.value;
            }
        },
        computed: {
            fieldId(){
                return 'statamic-places-' + this._uid;
            },

            replicatorPreview(){
                let address = this.value.line_1 + ', ' + this.value.city + ', ' + this.value.state;
                return this.value.line_1 ? address : '';
            }
        },
        methods: {
            initPlacesSearch(){
                let options = {
                    fields: ["address_components", "geometry", "name"],
                };
                this.placesSearch = new google.maps.places.Autocomplete(document.getElementById(this.fieldId), options);
                this.placesSearch.addListener('place_changed', this.placeChanged);
            },

            initSelectedPlace(){
                this.selectedPlace = {
                    title: '',
                    line_1: '',
                    city: '',
                    state: '',
                    country: '',
                    zipcode: '',
                    lat: '',
                    lon: '',
                    google_place_id: '',
                };
            },

            placeChanged(){
                let place = this.placesSearch.getPlace();
                if (place.length == 0 || place.length > 1) { return; }

                this.parseSelectedPlace(place);
            },

            resetSelectedPlace(){
                this.initSelectedPlace();
                this.update(this.selectedPlace);
            },

            parseSelectedPlace(place){
                let addressComponents = place.address_components;
                _.each(addressComponents, (component) => {
                    _.each(component.types, (type) => {
                        switch (type){
                            case 'street_number':
                                this.selectedPlace.line_1 = component.long_name;
                                break;
                            case 'route':
                                this.selectedPlace.line_1 += (' ' + component.long_name);
                                break;
                            case 'locality':
                                this.selectedPlace.city = component.long_name;
                                break;
                            case 'administrative_area_level_1':
                                this.selectedPlace.state = component.short_name;
                                break;
                            case 'country':
                                this.selectedPlace.country = component.short_name;
                                break;
                            case 'postal_code':
                                this.selectedPlace.zipcode = component.long_name;
                                break;
                        }
                    });
                });
                this.selectedPlace.lat = place.geometry.location.lat();
                this.selectedPlace.lon = place.geometry.location.lng();
                this.selectedPlace.title = place.name;
                this.selectedPlace.google_place_id = place.place_id;

                this.update(this.selectedPlace);
            },
        }
    }
</script>