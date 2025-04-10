/**
 * @param {number} angle angle (in radians) from the X axis
 * @returns {number} normalized angle (in radians) from the X axis
 * @example
 * normalizeAngleRelativeToXAxis(PI / 2) === PI / 2
 * normalizeAngleRelativeToXAxis(PI) === PI
 * normalizeAngleRelativeToXAxis(3/2 * PI) === -PI / 2
 * normalizeAngleRelativeToXAxis(2 * PI) === 0
 * normalizeAngleRelativeToXAxis(3 * PI) === PI
 */
export declare function normalizeAngle(angle: any): number;
