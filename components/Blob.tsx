import SimplexNoise from 'simplex-noise';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { spline } from '../scripts/spline';

function createPoints() {
    const points = [];
    // how many points do we need
    const numPoints = 6;
    // used to equally space each point around the circle
    const angleStep = (Math.PI * 2) / numPoints;
    // the radius of the circle
    const rad = 75;

    for (let i = 1; i <= numPoints; i++) {
        // x & y coordinates of the current point
        const theta = i * angleStep;

        const x = 100 + Math.cos(theta) * rad;
        const y = 100 + Math.sin(theta) * rad;

        // store the point
        points.push({
            x: x,
            y: y,
            /* we need to keep a reference to the point's original {x, y} coordinates 
      for when we modulate the values later */
            originX: x,
            originY: y,
            // more on this in a moment!
            noiseOffsetX: Math.random() * 1000,
            noiseOffsetY: Math.random() * 1000
        });
    }

    return points;
}

const useAnimationFrame = callback => {
    // Use useRef for mutable variables that we want to persist
    // without triggering a re-render on their change
    const requestRef = useRef(void 0);
    const previousTimeRef = useRef(void 0);
    const animate = time => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime);
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };
    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []); // Make sure the effect runs only once
};

function map(n, start1, end1, start2, end2) {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

const simplex = new SimplexNoise();
// how fast we progress through "time"
let noiseStep = 0.0005;
function noise(x, y) {
    // return a value at {x point in time} {y point in time}
    return simplex.noise2D(x, y);
}

export const AnimatedBlob = () => {
    const [pathPoints, setPathPoints] = useState('');
    const points = createPoints();
    useAnimationFrame(() => {
        for (let i = 0; i < points.length; i++) {
            const point = points[i];

            const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
            const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
            const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
            const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

            point.x = x;
            point.y = y;
            point.noiseOffsetX += noiseStep;
            point.noiseOffsetY += noiseStep;
        }

        setPathPoints(spline(points, 1, true));
    });
    return (
        <svg viewBox="0 0 200 200">
            <defs>
                {/* Our gradient fill #gradient */}
                <linearGradient id="gradient" x2="50%" y2="100%" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#48afc1" />
                    <stop offset="100%" stopColor="#b4c63b" />
                </linearGradient>
                {/* <linearGradient id="gradient" gradientTransform="rotate(90)"> */}
                {/* <stop id="gradientStop1" offset="0%" stop-color="var(--startColor)" /> */}
                {/* <stop id="gradientStop2 " offset="100%" stop-color="var(--stopColor)" /> */}
                {/* </linearGradient> */}
            </defs>
            <path d={pathPoints || ''} fill="url('#gradient')"></path>
        </svg>
    );
};

const SVG = styled.svg`
    width: 90vmin;
    height: 90vmin;
`;
