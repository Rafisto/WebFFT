import React, { useEffect } from 'react'
import * as Tone from 'tone'
import FFTChart from './FFTChart';


interface FFTGraphProps {
    file: File | null;
}

const fftSize = 2048;

const FFTGraph = ({ file }: FFTGraphProps) => {
    const [player, setPlayer] = React.useState<Tone.Player | null>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [fft, setFFT] = React.useState<Tone.FFT | null>(null);
    const [fftData, setFFTData] = React.useState<Float32Array>(new Float32Array(fftSize));
    const reader = new FileReader();
    const audioContext = new AudioContext();

    useEffect(() => {
        if (file) {
            stop();
            console.log("File changed");
            reader.onload = (e) => {
                if (e.target && e.target.result) {
                    let audioBuffer = e.target.result as ArrayBuffer;
                    audioContext.decodeAudioData(audioBuffer, (buffer) => {
                        const player = new Tone.Player(buffer);
                        const fft = new Tone.FFT(fftSize);
                        fft.normalRange = true;
                        player.loop = true;
                        player.chain(fft, Tone.Destination);
                        setFFT(fft);
                        setPlayer(player);
                    });
                }
            }
            reader.readAsArrayBuffer(file);
        }
    }, [file]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPlaying) {
                setFFTData(fft!.getValue());
            }
        }, 1);
        return () => clearInterval(interval);
    }, [isPlaying]);

    const play = () => {
        setIsPlaying(true);
        player?.start();
    }

    const stop = () => {
        setIsPlaying(false);
        setFFTData(new Float32Array(fftSize));
        player?.stop();
    }

    return (
        <div>
            <h1>FFT</h1>
            <hr />
            <div>
                {
                    (file)
                        ?
                        (
                            <div>
                                <h5>{file.name}</h5>
                                <button className="btn" onClick={play}>Play</button>
                                <button className="btn" onClick={stop}>Stop</button>
                            </div>
                        )
                        :
                        (
                            <h5>Waiting for a file to be selected</h5>
                        )
                }
                <FFTChart data={fftData} />
            </div>
        </div>
    )
}

export { FFTGraph, fftSize };