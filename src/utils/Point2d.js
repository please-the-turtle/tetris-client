/**
 * Defines point in two dimentional space.
 * @param {number} x Point x coordinate.
 * @param {number} y Point y coordinate.
 * @returns New Point2d object.
 */
export default function Point2d(x, y) {
    return {
        x: x,
        y: y
    }
}

/**
 * Calculates distanse between two Point2ds.
 * @param {Point2D} firstPoint 
 * @param {Point2D} secondPoint 
 * @returns Distanse between two Point2ds.
 */
export function getDistanseBetweenPoints(firstPoint, secondPoint) {
    return Math.sqrt((secondPoint.x - firstPoint.x)**2 + (secondPoint.y - firstPoint.y)**2);
}