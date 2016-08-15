"C:\Program Files\GDAL\ogr2ogr.exe" -f geojson oslo-buildings.json .\data\shapes\Oslo-shp\shape\buildings.shp

"C:\Program Files\GDAL\ogr2ogr.exe" -f geojson data\norway-south-provinces.json data\shapes\ne_10m_admin_1_states_provinces\ne_10m_admin_1_states_provinces.shp -where "adm0_a3='NOR' AND latitude>0 and latitude<60"