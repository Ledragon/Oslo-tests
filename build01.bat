del src\data\norway-south-provinces.json
"C:\Program Files\GDAL\ogr2ogr.exe" -f geojson src\data\norway-south-provinces.json src\data\shapes\ne_10m_admin_1_states_provinces\ne_10m_admin_1_states_provinces.shp -where "adm0_a3='NOR' AND latitude>=59 and latitude<=61.5" -clipsrc 10.3 59.75 11.2 60.04
./node_modules/.bin/topojson -o src/data/oslo.topojson src/data/norway-south-provinces.json -p