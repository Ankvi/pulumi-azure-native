export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const PublicNetworkAccessType = {
    /**
     * Enables public network connectivity to the Attestation Provider REST APIs.
     */
    Enabled: "Enabled",
    /**
     * Disables public network connectivity to the Attestation Provider REST APIs.
     */
    Disabled: "Disabled",
} as const;

/**
 * Controls whether traffic from the public network is allowed to access the Attestation Provider APIs.
 */
export type PublicNetworkAccessType = (typeof PublicNetworkAccessType)[keyof typeof PublicNetworkAccessType];

export const TpmAttestationAuthenticationType = {
    /**
     * Enables the requirement of authentication for TPM Attestation REST APIs.
     */
    Enabled: "Enabled",
    /**
     * Disables the requirement of authentication for TPM Attestation REST APIs.
     */
    Disabled: "Disabled",
} as const;

/**
 * The setting that controls whether authentication is enabled or disabled for TPM Attestation REST APIs.
 */
export type TpmAttestationAuthenticationType = (typeof TpmAttestationAuthenticationType)[keyof typeof TpmAttestationAuthenticationType];
