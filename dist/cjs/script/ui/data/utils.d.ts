/**
 * Get match groups from string representation of charge. It returns RegExpExecArray for charges with values +-[0..15]
 * overwise returns null
 *
 * @example
 * matchCharge("16") === null
 * matchCharge("0") === []
 * matchCharge("-1") === ["-1", "-", "1", ""]
 * matchCharge("15+") === ["15+", "", "15", "+"]
 */
export declare function matchCharge(charge: string): RegExpExecArray | null;
