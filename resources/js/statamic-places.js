import PlacesSearch from "./PlacesSearch.vue";

Statamic.booting(() => {
	Statamic.$components.register("places_search-fieldtype", PlacesSearch);
});