import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';

import { Container, Typography } from '@mui/material';
import gujaratData from '../data/gujarat.json';
import 'leaflet/dist/leaflet.css';

function StateMapPage() {
    console.log(gujaratData);
    return (
        <>
            <Container style={{ height: '100%' }}>
                <Typography variant="h4" sx={{ mb: 1 }}>
                    Gujarat Student Dropouts
                </Typography>
                <MapContainer
                    center={[22.4708, 71.5724]}
                    zoom={7}
                    style={{ width: '100%', height: '90%', backgroundColor: '#f9fafb' }}
                    zoomControl={false}
                    touchZoom={false}
                    scrollWheelZoom={false}
                    doubleClickZoom={false}
                    dragging={false}
                >
                    <GeoJSON
                        data={gujaratData}
                        style={{ fillColor: '#004754', color: 'white' }}
                        onEachFeature={(district, layer) => {
                            console.log(district.properties.NAME_2);
                            // console.log(layer);
                            layer.options.fillOpacity = 0.4;

                            layer.bindTooltip(district.properties.NAME_2);
                            layer.on('mouseover', (e) => {
                                e.target.setStyle({
                                    fillColor: 'green',
                                    fillOpacity: 0.7,
                                });
                            });
                            layer.on('mouseout', (e) => {
                                e.target.setStyle({
                                    fillColor: '#004754',
                                    fillOpacity: 0.4,
                                });
                            });
                            layer.on('click', (e) => {
                                alert(district.properties.NAME_2);
                            });
                        }}
                    />
                </MapContainer>
            </Container>
        </>
    );
}

export default StateMapPage;
