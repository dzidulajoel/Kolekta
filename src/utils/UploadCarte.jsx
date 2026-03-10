import { Camera, ImageUp } from "lucide-react";
import React, { useState, useRef } from "react";

function UploadCarte({ label, name, onChange }) {
        const [preview, setPreview] = useState(null);
        const [useCamera, setUseCamera] = useState(false);
        const videoRef = useRef(null);
        const canvasRef = useRef(null);

        // lancer la caméra
        const startCamera = async () => {
                setUseCamera(true);
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) videoRef.current.srcObject = stream;
        };

        // prendre la photo
        const capturePhoto = () => {
                const video = videoRef.current;
                const canvas = canvasRef.current;
                const ctx = canvas.getContext("2d");
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const dataUrl = canvas.toDataURL("image/png");
                setPreview(dataUrl);
                onChange({ target: { name, value: dataUrl } });
                // arrêter la caméra
                video.srcObject.getTracks().forEach(track => track.stop());
                setUseCamera(false);
        };

        // upload classique
        const handleFileChange = (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onloadend = () => {
                        setPreview(reader.result);
                        onChange({ target: { name, value: reader.result } });
                };
                reader.readAsDataURL(file);
        };



        return (
                <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">{label} <span className="text-red-500">*</span></label>

                        {/* preview */}
                        {preview && <img src={preview} alt="preview" className="w-full border border-gray-200 h-48 rounded-sm object-cover border" />}

                        {/* choisir fichier */}
                        <div className="flex gap-2 w-full">
                                <input type="file" id={name} name={name} accept="image/*" onChange={handleFileChange} className="text-sm hidden" />

                                <label htmlFor={name} className="w-full bg-accent text-white text-sm p-2 rounded-sm mt-1 hover:opacity-90 flex items-center gap-1 justify-center cursor-pointer">
                                        <ImageUp size={16} color="currentColor" />
                                        Choisir un fichier
                                </label>

                                {/* bouton caméra */}
                                {!useCamera && (
                                        <button type="button" onClick={startCamera} className="w-full bg-accent text-white text-sm p-2 rounded-sm mt-1 hover:opacity-90  text-gray-500 flex items-center gap-1 justify-center">
                                                <Camera size={16} color="currentColor" />
                                                Prendre une photo
                                        </button>
                                )}
                        </div>

                        {/* caméra live */}
                        {useCamera && (
                                <div className="flex flex-col gap-2 w-full">
                                        <video ref={videoRef} autoPlay className="w-full h-48 border border-gray-200 rounded-sm" />
                                        <button
                                                type="button"
                                                onClick={capturePhoto}
                                                className="bg-green-500 text-white text-sm p-2 rounded-sm hover:opacity-90"
                                        >
                                                Capturer
                                        </button>
                                        <canvas ref={canvasRef} style={{ display: "none" }} />
                                </div>
                        )}
                </div>
        );
}

export default UploadCarte;