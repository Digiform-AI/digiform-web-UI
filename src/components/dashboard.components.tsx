import React, { useState } from "react";
// import { FileUploader } from "react-drag-drop-files";

/**
 * Drag and Drop component for uploading files. Also supports just clicking anywhere in the area.
 */
export const FileDragNDrop = () => {
    const fileUploadTypes = ["PDF"];
    const [file, setFile] = useState<File | null>(null);
    // this function can be changed to actually upload the file to the DB as needed
    const onFileUpload = (file: File | null) => { setFile(file) };

    return (
        <div className = "DragNDrop">
            {/* <FileUploader
                multiple = {false}
                handleChange = {onFileUpload}
                types = {fileUploadTypes}
            /> */}
            
            {/*Test line to make sure the file uploads correctly*/}
            <p>{file ? `File Name: ${file.name} | File Size: ${file.size}` : "No File Uploaded Yet"}</p>
        </div>
    );
}