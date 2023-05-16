
import React from 'react'

const Uploadimage = () => {

    const uploadImageS3 = async (url, file) => {
        try {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('PUT', url);
                xhr.setRequestHeader('Content-Type', file.type);
                xhr.onload = () => {
                    console.log({ xhr });
                    if (xhr.status !== 200) {
                        reject(
                            new Error(
                                `Request failed. Status: ${xhr.status}. Content: ${xhr.responseText}`
                            )
                        );
                    }
                    resolve(xhr.responseText);
                };
                xhr.send(file);
            });
        } catch (error) { }
    };

    return {uploadImageS3}
}

export default Uploadimage