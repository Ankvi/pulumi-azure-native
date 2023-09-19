import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The shipping address of the customer.
     */
    export interface AddressResponse {
        /**
         * The address line1.
         */
        addressLine1?: string;
        /**
         * The address line2.
         */
        addressLine2?: string;
        /**
         * The address line3.
         */
        addressLine3?: string;
        /**
         * The city name.
         */
        city?: string;
        /**
         * The country name.
         */
        country: string;
        /**
         * The postal code.
         */
        postalCode?: string;
        /**
         * The state name.
         */
        state?: string;
    }

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
     * This contains the compute information
     */
    export interface ComputeVersionInformationResponse {
        /**
         * Azure Arc Version
         */
        azureArcVersion?: string;
        /**
         * IOTEdge Version
         */
        iotEdgeVersion?: string;
        /**
         * Kubernetes Version
         */
        kubernetesVersion?: string;
    }

    /**
     * Contains all the contact details of the customer.
     */
    export interface ContactDetailsResponse {
        /**
         * The name of the company.
         */
        companyName: string;
        /**
         * The contact person name.
         */
        contactPerson: string;
        /**
         * The email list.
         */
        emailList: string[];
        /**
         * The phone number.
         */
        phone: string;
    }

    /**
     * Wraps data-residency related information for edge-resource and this should be used with ARM layer.
     */
    export interface DataResidencyResponse {
        /**
         * DataResidencyType enum
         */
        type?: string;
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
     * Represents a single status change.
     */
    export interface OrderStatusResponse {
        /**
         * Dictionary to hold generic information which is not stored
         * by the already existing properties
         */
        additionalOrderDetails: {[key: string]: string};
        /**
         * Comments related to this status change.
         */
        comments?: string;
        /**
         * Status of the order as per the allowed status types.
         */
        status: string;
        /**
         * Tracking information related to the state in the ordering flow
         */
        trackingInformation: TrackingInfoResponse;
        /**
         * Time of status update.
         */
        updateDateTime: string;
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
         * The timestamp of resource last modification (UTC)
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

    /**
     * Tracking courier information.
     */
    export interface TrackingInfoResponse {
        /**
         * Name of the carrier used in the delivery.
         */
        carrierName?: string;
        /**
         * Serial number of the device being tracked.
         */
        serialNumber?: string;
        /**
         * Tracking ID of the shipment.
         */
        trackingId?: string;
        /**
         * Tracking URL of the shipment.
         */
        trackingUrl?: string;
    }
