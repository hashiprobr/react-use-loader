react-use-loader
================

[PROJECT DISCONTINUED]

**A React Hook for simplifying basic usage of [Three.js](https://threejs.org/)
model loaders**

This hook returns an object with two properties:

* a boolean state `loading`, that indicates whether it is waiting for a resource
  to load;

* an asynchronous method `load`, that receives one of the [Three.js model loader
  classes](https://github.com/mrdoob/three.js/tree/dev/examples/jsm/loaders) and
  an URI, and returns the corresponding model.


Peer dependencies
-----------------

``` json
{
    "react": "17.0.2",
    "three": "0.142.0"
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


Example
-------

``` js
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

import React from 'react';

import { View, Text, Button } from 'react-native';

import useLoader from '@hashiprobr/react-use-loader';

export default function MyComponent() {
    const loader = useLoader();

    async function onPress() {
        let model;
        try {
            model = await loader.load(OBJLoader, 'uri/to/a/model');
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
