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
     * Authentication mechanism for IoT devices.
     */
    export interface AuthenticationResponse {
        /**
         * Symmetric key for authentication.
         */
        symmetricKey?: SymmetricKeyResponse;
    }

    /**
     * Azure container mapping of the endpoint.
     */
    export interface AzureContainerInfoResponse {
        /**
         * Container name (Based on the data format specified, this represents the name of Azure Files/Page blob/Block blob).
         */
        containerName: string;
        /**
         * Storage format used for the file represented by the share.
         */
        dataFormat: string;
        /**
         * ID of the storage account credential used to access storage.
         */
        storageAccountCredentialId: string;
    }

    /**
     * The mapping between a particular client IP and the type of access client has on the NFS share.
     */
    export interface ClientAccessRightResponse {
        /**
         * Type of access to be allowed for the client.
         */
        accessPermission: string;
        /**
         * IP of the client.
         */
        client: string;
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
     * Metadata of IoT device/IoT Edge device to be configured.
     */
    export interface IoTDeviceInfoResponse {
        /**
         * Encrypted IoT device/IoT edge device connection string.
         */
        authentication?: AuthenticationResponse;
        /**
         * ID of the IoT device/edge device.
         */
        deviceId: string;
        /**
         * Host name for the IoT hub associated to the device.
         */
        ioTHostHub: string;
        /**
         * Id for the IoT hub associated to the device.
         */
        ioTHostHubId?: string;
    }

    /**
     * Metric configuration.
     */
    export interface MetricConfigurationResponse {
        /**
         * Host name for the IoT hub associated to the device.
         */
        counterSets: MetricCounterSetResponse[];
        /**
         * The MDM account to which the counters should be pushed.
         */
        mdmAccount?: string;
        /**
         * The MDM namespace to which the counters should be pushed. This is required if MDMAccount is specified
         */
        metricNameSpace?: string;
        /**
         * The Resource ID on which the metrics should be pushed.
         */
        resourceId: string;
    }

    /**
     * The metric counter
     */
    export interface MetricCounterResponse {
        /**
         * The additional dimensions to be added to metric.
         */
        additionalDimensions?: MetricDimensionResponse[];
        /**
         * The dimension filter.
         */
        dimensionFilter?: MetricDimensionResponse[];
        /**
         * The instance from which counter should be collected.
         */
        instance?: string;
        /**
         * The counter name.
         */
        name: string;
    }

    /**
     * The metric counter set
     */
    export interface MetricCounterSetResponse {
        /**
         * The counters that should be collected in this set.
         */
        counters: MetricCounterResponse[];
    }

    /**
     * The metric dimension
     */
    export interface MetricDimensionResponse {
        /**
         * The dimension value.
         */
        sourceName: string;
        /**
         * The dimension type.
         */
        sourceType: string;
    }

    /**
     * The share mount point.
     */
    export interface MountPointMapResponse {
        /**
         * Mount point for the share.
         */
        mountPoint: string;
        /**
         * Mounting type.
         */
        mountType: string;
        /**
         * ID of the role to which share is mounted.
         */
        roleId: string;
        /**
         * Role type.
         */
        roleType: string;
        /**
         * ID of the share mounted to the role VM.
         */
        shareId: string;
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
     * Fields for tracking refresh job on the share or container.
     */
    export interface RefreshDetailsResponse {
        /**
         * Indicates the relative path of the error xml for the last refresh job on this particular share or container, if any. This could be a failed job or a successful job.
         */
        errorManifestFile?: string;
        /**
         * If a refresh job is currently in progress on this share or container, this field indicates the ARM resource ID of that job. The field is empty if no job is in progress.
         */
        inProgressRefreshJobId?: string;
        /**
         * Indicates the completed time for the last refresh job on this particular share or container, if any.This could be a failed job or a successful job.
         */
        lastCompletedRefreshJobTimeInUTC?: string;
        /**
         * Indicates the id of the last refresh job on this particular share or container,if any. This could be a failed job or a successful job.
         */
        lastJob?: string;
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
     * Symmetric key for authentication.
     */
    export interface SymmetricKeyResponse {
        /**
         * Connection string based on the symmetric key.
         */
        connectionString?: AsymmetricEncryptedSecretResponse;
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

    /**
     * The mapping between a particular user and the access type on the SMB share.
     */
    export interface UserAccessRightResponse {
        /**
         * Type of access to be allowed for the user.
         */
        accessType: string;
        /**
         * User ID (already existing in the device).
         */
        userId: string;
    }
