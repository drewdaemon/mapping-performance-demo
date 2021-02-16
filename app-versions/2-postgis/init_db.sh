#! /bin/sh

shp2pgsql /datasets/Utah_Trailheads-shp/Trailheads.shp | psql
shp2pgsql /datasets/Utah_Major_Streams__Statewide_-shp/UtahMajor_Streams.shp | psql