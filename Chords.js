/*var osc = new Tone.OmniOscillator();
var env = new Tone.AmplitudeEnvelope();

//osc.set({"frequency" : 330, "detune" : 244, "type" : "triangle",});
osc.frequency.value = "C4";
osc.start().stop("+8n");
osc.connect(env);

env.toMaster();

*/
/*
var polySynth = new Tone.PolySynth(7, Tone.Synth);
var vol = new Tone.Volume(-12);

polySynth.set({
	"filter" : {
		"type" : "highpass"
	},
	"envelope" : {

		"attack" : 0.1,
		"decay" : 0.5,
		"sustain" : 0.4,
		"release" : 0.6
	}

});
polySynth.triggerAttackRelease(['C4', 'D4', 'Eb4', 'G4', 'Bb4', 'C3'], 1, 0.2, 0.8);
polySynth.triggerAttackRelease(['G3', 'D4', 'F4', 'G4', 'Bb4', 'D5', 'A5'], 1, 1.4, 1);

polySynth.chain(vol, Tone.Master);
*/


var freqArray = [100, 200, 300, 400, 500, 600, 700];
var freq = freqArray[0];
var polySynth = new Tone.PolySynth(7, Tone.Synth);
var vol = new Tone.Volume(-20);

polySynth.set({
	"filter" : {
		"type" : "highpass"
	},
	"envelope" : {

		"attack" : 1,
		"decay" : 0.5,
		"sustain" : 0.4,
		"release" : 4
	}
});

var loop = new Tone.Loop(function(time){   
	polySynth.triggerAttackRelease(['C4', 'D4', 'Eb4', 'G4', 'Bb4', 'C3'], 1, time, 0.8);
	// freq = freqArray[Math.floor(Math.random()*7)];
	// document.write(freq+"\n");
	
	// polySynth.frequency.value = freq;


}, 3);


Tone.Transport.start();
loop.start(0);
loop.stop(10);
polySynth.chain(vol, Tone.Master);