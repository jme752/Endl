import { AfterViewInit, Component } from '@angular/core'
// import { LeafletMouseEvent, Map, Marker, circle, latLng, map, marker, polygon, tileLayer } from 'leaflet';
import * as L from 'leaflet'

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
})
export class MapComponent {
    private markers: L.Marker[] = [L.marker([48.3018, 9.97607])]
    private map: L.Map = {} as L.Map
    public cursor: string = 'pointer'

    public options = {
        layers: [
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
                attribution: '...',
            }),
        ],
        zoom: 18,
        center: L.latLng(48.3018, 9.97607),
    }

    onMapReady($event: L.Map) {
        this.map = $event
        this.markers.forEach((m) => {
            L.marker([m.getLatLng().lat, m.getLatLng().lng]).addTo(this.map)
        })
    }

    setMarker(event: L.LeafletMouseEvent) {
        L.marker([event.latlng.lat, event.latlng.lng]).addTo(this.map)
    }
}
