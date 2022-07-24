import { useState } from 'react';

export default function useLoader() {
    const [loading, setLoading] = useState(false);

    async function load(Loader, uri, onProgress) {
        let model;
        setLoading(true);
        const promise = new Promise((resolve, reject) => {
            const loader = new Loader();
            loader.loadModel(uri, resolve, onProgress, reject);
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
        load,
    };
}
