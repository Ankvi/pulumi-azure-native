export const ExtendedLocationTypes = {
    CustomLocation: "CustomLocation",
} as const;

/**
 * The extended location type. Allowed value: 'CustomLocation'
 */
export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];
