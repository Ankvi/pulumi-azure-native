export const ExtendedLocationType = {
    /**
     * Azure Edge Zones location type
     */
    EdgeZone: "EdgeZone",
    /**
     * Azure Custom Locations type
     */
    CustomLocation: "CustomLocation",
} as const;

/**
 * The type of the extended location.
 */
export type ExtendedLocationType = (typeof ExtendedLocationType)[keyof typeof ExtendedLocationType];

export const KubernetesSecretType = {
    /**
     * Opaque is the default secret type.
     */
    Opaque: "Opaque",
    /**
     * The kubernetes.io/tls secret type is for storing a certificate and its associated key that are typically used for TLS.
     */
    Tls: "kubernetes.io/tls",
} as const;

/**
 * Type specifies the type of the Kubernetes secret object, e.g. "Opaque" or"kubernetes.io/tls". The controller must have permission to create secrets of the specified type.
 */
export type KubernetesSecretType = (typeof KubernetesSecretType)[keyof typeof KubernetesSecretType];