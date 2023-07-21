# WebFFT
ReactJS + Tone + Echarts = Fast Fourier Transform On Demand

# Showcase
![obraz](https://github.com/Rafisto/WebFFT/assets/88141065/5e72a495-37d5-49c9-a5ae-d81ee982c57c)

# Installation

1. Clone the repository using:

```bash
git clone https://github.com/Rafisto/WebFFT.git
```
2. Install all the required npm packages
```
npm install
```
3. Run vite on debug
```
npm run dev
```
4. (Optional) build and run the app using
```
npm run build
serve -s dist
```

# Usage
1. Select an audio file to import into the program
2. Play the audio and enjoy FFT happening on screen

# Known limitations
- Unfortunately ToneJS is not prepared to be specified a concrete timestamp during playthrough, thus unable to pause or skip parts of the audio file.
- Strongly recommended to run thie proof of concept on a powerful computer, because of the high memory and CPU usage. Weaker computers may not be able to calculate FFT in real-time.

# Alternatives
- An audio-dedicated spectral analyzer
- An oscillscope with Math -> FFT function enabled
- Pre-calculating FFT using backend languages, such as Java or Python.
