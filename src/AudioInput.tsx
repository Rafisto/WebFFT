import React from 'react'

interface AudioInputProps {
    file: File | null;
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const AudioInput = ({ file, setFile }: AudioInputProps) => {
    const [dragActive, setDragActive] = React.useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }

    const clearFiles = () => {
        setFile(null)
    }

    const allowedFiletypes = ["audio/mpeg", "audio/wav"];

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files) {
            if (allowedFiletypes.includes(e.dataTransfer.files[0].type)) {
                setFile(e.dataTransfer.files[0])
            }
        }
    }

    return (
        <div>
            <h1 className="textcenter">Select audio file</h1>
            <hr />
            <div style={{ marginBottom: "20px" }}>
                {
                    (file) &&
                    (
                        <div>
                            <h3>Selected file:</h3>
                            <h3>{file.name} ({file.size} bytes)</h3>
                            <button className="btn bigbtn" onClick={clearFiles}>Clear</button>
                        </div>
                    )
                }
            </div>
            <div onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
                {(dragActive) ?
                    (
                        <div className="inputwrapper">
                            <h1>Drop files here</h1>
                        </div>
                    ) :
                    (
                        <div className="inputwrapper">
                            {(!file)
                                ?
                                <h1>No file selected</h1>
                                :
                                <h1>File has been selected</h1>
                            }
                        </div>
                    )}
            </div>
        </div>
    )
}

export default AudioInput