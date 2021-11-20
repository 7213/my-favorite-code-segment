import React, {useEffect, useRef} from 'react';
import * as PIXI from 'pixi.js'
import useIsBrowser from '@docusaurus/useIsBrowser';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

function genStarBG(isBrowser: boolean, siteConfig) {
    if (!isBrowser) return;
    const app = new PIXI.Application({
        view: document.getElementById('bg') as HTMLCanvasElement
    });
    // Get the texture for rope.
    const starTexture = PIXI.Texture.from(`${siteConfig.baseUrl}img/star.png`);

    const starAmount = 1000;
    let cameraZ = -100;
    const fov = 20;
    const baseSpeed = 0.025;
    let speed = 0;
    const starStretch = 5;
    const starBaseSize = 0.05;


    function randomizeStar(star, initial?) {
        star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;

        // Calculate star positions with radial random coordinate so no star hits the camera.
        const deg = Math.random() * Math.PI * 2;
        const distance = Math.random() * 50 + 1;
        star.x = Math.cos(deg) * distance;
        star.y = Math.sin(deg) * distance;
    }

    const stars = [];
    for (let i = 0; i < starAmount; i++) {
        const star = {
            sprite: new PIXI.Sprite(starTexture),
            z: 0,
            x: 0,
            y: 0,
        };
        star.sprite.anchor.x = 0.5;
        star.sprite.anchor.y = Math.random() > 0.5 ? 50 : -50;
        randomizeStar(star, true);
        app.stage.addChild(star.sprite);
        stars.push(star);
    }

    app.ticker.add((delta) => {
        cameraZ += delta * 10 * (speed + baseSpeed);
        for (let i = 0; i < starAmount; i++) {
            const star = stars[i];
            if (star.z < cameraZ) randomizeStar(star);

            // Map star 3d position to 2d with really simple projection
            const z = star.z - cameraZ;
            star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 16;
            star.sprite.y = star.y * (fov / z) * 30 + app.renderer.screen.height / 2;

            // Calculate star scale & rotation.
            const dxCenter = star.sprite.x - app.renderer.screen.width / 2;
            const dyCenter = star.sprite.y - app.renderer.screen.height / 2;
            const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
            const distanceScale = Math.max(0, (2000 - z) / 2000);
            star.sprite.scale.x = distanceScale * starBaseSize;
            // Star is looking towards center so that y axis is towards center.
            // Scale the star depending on how fast we are moving, what the stretchfactor is and depending on how far away it is from the center.
            star.sprite.scale.y = distanceScale * starBaseSize + distanceScale * speed * starStretch * distanceCenter / app.renderer.screen.width;
            // star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
        }
    });
}

export function StarBG(): JSX.Element {
    const isBrowser = useIsBrowser();
    const {siteConfig} = useDocusaurusContext();

    useEffect(()=>{
        genStarBG(isBrowser, siteConfig);
    }, []);

    return isBrowser ?
        <Link to="/blog">
            <canvas id="bg" style={{width: "100%", height: "100%", position: 'absolute', top: "0px"}} />
        </Link> :
        null
}
