import { useState } from 'react';

import { TextureLoader } from 'three';

export default function useLoader() {
    const [loading, setLoading] = useState(false);

    async function loadTexture(uri, onProgress) {
        let texture;
        setLoading(true);
        const promise = new Promise((resolve, reject) => {
            const loader = new TextureLoader();
            loader.load(uri, resolve, onProgress, reject);
        });
        try {
            texture = await promise;
        } finally {
            setLoading(false);
        }
        return texture;
    }

    async function loadModel(Loader, uri, onProgress) {
        let model;
        setLoading(true);
        const promise = new Promise((resolve, reject) => {
            const loader = new Loader();
            loader.load(uri, resolve, onProgress, reject);
        });
        try {
            model = await promise;
        } finally {
            setLoading(false);
        }
        return model;
    }

    return {
        loading,
        loadTexture,
        loadModel,
    };
}
