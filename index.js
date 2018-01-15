const meta = require('@turf/meta');
const Turf = require('turf');
const Fs = require('fs');
//IN FILE
const features = JSON.parse(Fs.readFileSync('features.json'));
//CREATE NEW OUTFILE
Fs.writeFile('output-percision.json', '', (err) => {
    if (err) throw err;
});


meta.featureEach(features, (currentFeature, featureIndex) => {
  	meta.coordEach(currentFeature, (coords) => {
		
		let lon = coords[0].toFixed(6)
		let lat = coords[1].toFixed(6)
		currentFeature.geometry.coordinates = [lon,lat]
	});
	
	Fs.appendFile('output-percision.json', JSON.stringify(currentFeature) + ',' + '\n', () => {
		console.log('updated...');
	});

});

