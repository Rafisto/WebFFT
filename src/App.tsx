import React from 'react'
import AudioInput from './AudioInput'
import { FFTGraph } from './FFTGraph'

const App = () => {
    const [file, setFile] = React.useState<File | null>(null);

    return (
        <div>
            <div>
                <h1 className="textcenter">Web FFT Project</h1>
                <hr />
            </div>
            <div className="gridparent">
                <div className="left wrapper">
                    <AudioInput file={file} setFile={setFile} />
                </div>
                <div className="right wrapper">
                    <FFTGraph file={file} />
                </div>
            </div>
        </div>
    )
}

export default App