import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Represent the secrets intended for encryption with asymmetric key pair.
     */
    export interface AsymmetricEncryptedSecretResponse {
        /**
         * The algorithm used to encrypt "Value".
         */
        encryptionAlgorithm: string;
        /**
         * Thumbprint certificate used to encrypt \"Value\". If the value is unencrypted, it will be null.
         */
        encryptionCertThumbprint?: string;
        /**
         * The value of the secret.
         */
        value: string;
    }

    /**
     * Details about Edge Profile for the resource
     */
    export interface EdgeProfileResponse {
        /**
         * Edge Profile Subscription
         */
        subscription?: EdgeProfileSubscriptionResponse;
    }

    /**
     * Subscription details for the Edge Profile
     */
    export interface EdgeProfileSubscriptionResponse {
        /**
         * ARM ID of the subscription
         */
        id?: string;
        locationPlacementId?: string;
        quotaId?: string;
        registeredFeatures?: SubscriptionRegisteredFeaturesResponse[];
        registrationDate?: string;
        /**
         * Edge Subscription Registration ID
         */
        registrationId?: string;
        serializedDetails?: string;
        state?: string;
        subscriptionId?: string;
        tenantId?: string;
    }

    /**
     * Msi identity details of the resource
     */
    export interface ResourceIdentityResponse {
        /**
         * Service Principal Id backing the Msi
         */
        principalId: string;
        /**
         * Home Tenant Id
         */
        tenantId: string;
        /**
         * Identity type
         */
        type?: string;
    }

    /**
     * Fields for tracking resource move
     */
    export interface ResourceMoveDetailsResponse {
        /**
         * Denotes whether move operation is in progress
         */
        operationInProgress?: string;
        /**
         * Denotes the timeout of the operation to finish
         */
        operationInProgressLockTimeoutInUTC?: string;
    }

    /**
     * Holds device secret either as a KeyVault reference or as an encrypted value.
     */
    export interface SecretResponse {
        /**
         * Encrypted (using device public key) secret value.
         */
        encryptedSecret?: AsymmetricEncryptedSecretResponse;
        /**
         * Id of the Key-Vault where secret is stored (ex: secrets/AuthClientSecret/82ef4346187a4033a10d629cde07d740).
         */
        keyVaultId?: string;
    }

    /**
     * Specifies the mapping between this particular user and the type of access he has on shares on this device.
     */
    export interface ShareAccessRightResponse {
        /**
         * Type of access to be allowed on the share for this user.
         */
        accessType: string;
        /**
         * The share ID.
         */
        shareId: string;
    }

    /**
     * The SKU type.
     */
    export interface SkuResponse {
        /**
         * SKU name.
         */
        name?: string;
        /**
         * The SKU tier. This is based on the SKU name.
         */
        tier?: string;
    }

    export interface SubscriptionRegisteredFeaturesResponse {
        name?: string;
        state?: string;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }
