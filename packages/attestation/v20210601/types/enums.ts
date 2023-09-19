export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

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

export type TpmAttestationAuthenticationType = (typeof TpmAttestationAuthenticationType)[keyof typeof TpmAttestationAuthenticationType];
