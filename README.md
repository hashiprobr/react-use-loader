react-use-loader
================

**A React Hook for simplifying basic usage of [Three.js](https://threejs.org/)
loaders**

This hook returns an object with three properties:

* a boolean state `loading`, that indicates whether it is waiting for a resource
  to load;

* an asynchronous method `loadTexture`, that receives an URI and returns the
  corresponding texture;

* an asynchronous method `loadModel`, that receives one of the [Three.js model
  loader
  classes](https://github.com/mrdoob/three.js/tree/dev/examples/jsm/loaders) and
  an URI, and returns the corresponding model;


Peer dependencies
-----------------

``` json
{
    "react": "^17.0.1",
    "three": ">=0.136.0"
}
```


Install
-------

With npm:

```
npm install @hashiprobr/react-use-loader
```

With yarn:

```
yarn add @hashiprobr/react-use-loader
```


Example with texture
--------------------

``` js
import React from 'react';

import { View, Text, Button } from 'react-native';

import useLoader from '@hashiprobr/react-use-loader';

export default function MyComponent() {
    const loader = useLoader();

    async function onPress() {
        let texture;
        try {
            texture = await loader.loadTexture('uri/to/an/image');
        } catch (error) {
            console.error(error);
        }
        if (texture) {
            console.log(texture);
        }
    }

    return (
        <View
            style={{
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {loader.loading ? (
                <Text>loading...</Text>
            ) : (
                <Button title="load" onPress={onPress} />
            )}
        </View>
    );
}
```


Example with model
------------------

``` js
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import React from 'react';

import { View, Text, Button } from 'react-native';

import useLoader from '@hashiprobr/react-use-loader';

export default function MyComponent() {
    const loader = useLoader();

    async function onPress() {
        let model;
        try {
            model = await loader.loadModel(OBJLoader, 'https://people.sc.fsu.edu/~jburkardt/data/obj/cube.obj');
        } catch (error) {
            console.error(error);
        }
        if (model) {
            console.log(model);
        }
    }

    return (
        <View
            style={{
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {loader.loading ? (
                <Text>loading...</Text>
            ) : (
                <Button title="load" onPress={onPress} />
            )}
        </View>
    );
}
```
