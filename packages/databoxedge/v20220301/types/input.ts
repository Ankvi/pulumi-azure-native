import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The shipping address of the customer.
     */
    export interface AddressArgs {
        /**
         * The address line1.
         */
        addressLine1?: pulumi.Input<string>;
        /**
         * The address line2.
         */
        addressLine2?: pulumi.Input<string>;
        /**
         * The address line3.
         */
        addressLine3?: pulumi.Input<string>;
        /**
         * The city name.
         */
        city?: pulumi.Input<string>;
        /**
         * The country name.
         */
        country: pulumi.Input<string>;
        /**
         * The postal code.
         */
        postalCode?: pulumi.Input<string>;
        /**
         * The state name.
         */
        state?: pulumi.Input<string>;
    }

    /**
     * Represent the secrets intended for encryption with asymmetric key pair.
     */
    export interface AsymmetricEncryptedSecretArgs {
        /**
         * The algorithm used to encrypt "Value".
         */
        encryptionAlgorithm: pulumi.Input<string | enums.EncryptionAlgorithm>;
        /**
         * Thumbprint certificate used to encrypt \"Value\". If the value is unencrypted, it will be null.
         */
        encryptionCertThumbprint?: pulumi.Input<string>;
        /**
         * The value of the secret.
         */
        value: pulumi.Input<string>;
    }

    /**
     * Authentication mechanism for IoT devices.
     */
    export interface AuthenticationArgs {
        /**
         * Symmetric key for authentication.
         */
        symmetricKey?: pulumi.Input<SymmetricKeyArgs>;
    }

    /**
     * Azure container mapping of the endpoint.
     */
    export interface AzureContainerInfoArgs {
        /**
         * Container name (Based on the data format specified, this represents the name of Azure Files/Page blob/Block blob).
         */
        containerName: pulumi.Input<string>;
        /**
         * Storage format used for the file represented by the share.
         */
        dataFormat: pulumi.Input<string | enums.AzureContainerDataFormat>;
        /**
         * ID of the storage account credential used to access storage.
         */
        storageAccountCredentialId: pulumi.Input<string>;
    }

    /**
     * The mapping between a particular client IP and the type of access client has on the NFS share.
     */
    export interface ClientAccessRightArgs {
        /**
         * Type of access to be allowed for the client.
         */
        accessPermission: pulumi.Input<string | enums.ClientPermissionType>;
        /**
         * IP of the client.
         */
        client: pulumi.Input<string>;
    }

    /**
     * Contains all the contact details of the customer.
     */
    export interface ContactDetailsArgs {
        /**
         * The name of the company.
         */
        companyName: pulumi.Input<string>;
        /**
         * The contact person name.
         */
        contactPerson: pulumi.Input<string>;
        /**
         * The email list.
         */
        emailList: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The phone number.
         */
        phone: pulumi.Input<string>;
    }

    /**
     * Wraps data-residency related information for edge-resource and this should be used with ARM layer.
     */
    export interface DataResidencyArgs {
        /**
         * DataResidencyType enum
         */
        type?: pulumi.Input<string | enums.DataResidencyType>;
    }

    /**
     * Metadata of IoT device/IoT Edge device to be configured.
     */
    export interface IoTDeviceInfoArgs {
        /**
         * Encrypted IoT device/IoT edge device connection string.
         */
        authentication?: pulumi.Input<AuthenticationArgs>;
        /**
         * ID of the IoT device/edge device.
         */
        deviceId: pulumi.Input<string>;
        /**
         * Host name for the IoT hub associated to the device.
         */
        ioTHostHub: pulumi.Input<string>;
        /**
         * Id for the IoT hub associated to the device.
         */
        ioTHostHubId?: pulumi.Input<string>;
    }

    /**
     * Metric configuration.
     */
    export interface MetricConfigurationArgs {
        /**
         * Host name for the IoT hub associated to the device.
         */
        counterSets: pulumi.Input<pulumi.Input<MetricCounterSetArgs>[]>;
        /**
         * The MDM account to which the counters should be pushed.
         */
        mdmAccount?: pulumi.Input<string>;
        /**
         * The MDM namespace to which the counters should be pushed. This is required if MDMAccount is specified
         */
        metricNameSpace?: pulumi.Input<string>;
        /**
         * The Resource ID on which the metrics should be pushed.
         */
        resourceId: pulumi.Input<string>;
    }

    /**
     * The metric counter
     */
    export interface MetricCounterArgs {
        /**
         * The additional dimensions to be added to metric.
         */
        additionalDimensions?: pulumi.Input<pulumi.Input<MetricDimensionArgs>[]>;
        /**
         * The dimension filter.
         */
        dimensionFilter?: pulumi.Input<pulumi.Input<MetricDimensionArgs>[]>;
        /**
         * The instance from which counter should be collected.
         */
        instance?: pulumi.Input<string>;
        /**
         * The counter name.
         */
        name: pulumi.Input<string>;
    }

    /**
     * The metric counter set
     */
    export interface MetricCounterSetArgs {
        /**
         * The counters that should be collected in this set.
         */
        counters: pulumi.Input<pulumi.Input<MetricCounterArgs>[]>;
    }

    /**
     * The metric dimension
     */
    export interface MetricDimensionArgs {
        /**
         * The dimension value.
         */
        sourceName: pulumi.Input<string>;
        /**
         * The dimension type.
         */
        sourceType: pulumi.Input<string>;
    }

    /**
     * Fields for tracking refresh job on the share or container.
     */
    export interface RefreshDetailsArgs {
        /**
         * Indicates the relative path of the error xml for the last refresh job on this particular share or container, if any. This could be a failed job or a successful job.
         */
        errorManifestFile?: pulumi.Input<string>;
        /**
         * If a refresh job is currently in progress on this share or container, this field indicates the ARM resource ID of that job. The field is empty if no job is in progress.
         */
        inProgressRefreshJobId?: pulumi.Input<string>;
        /**
         * Indicates the completed time for the last refresh job on this particular share or container, if any.This could be a failed job or a successful job.
         */
        lastCompletedRefreshJobTimeInUTC?: pulumi.Input<string>;
        /**
         * Indicates the id of the last refresh job on this particular share or container,if any. This could be a failed job or a successful job.
         */
        lastJob?: pulumi.Input<string>;
    }

    /**
     * Msi identity details of the resource
     */
    export interface ResourceIdentityArgs {
        /**
         * Identity type
         */
        type?: pulumi.Input<string | enums.MsiIdentityType>;
    }

    /**
     * The SKU type.
     */
    export interface SkuArgs {
        /**
         * SKU name.
         */
        name?: pulumi.Input<string | enums.SkuName>;
        /**
         * The SKU tier. This is based on the SKU name.
         */
        tier?: pulumi.Input<string | enums.SkuTier>;
    }

    /**
     * Symmetric key for authentication.
     */
    export interface SymmetricKeyArgs {
        /**
         * Connection string based on the symmetric key.
         */
        connectionString?: pulumi.Input<AsymmetricEncryptedSecretArgs>;
    }

    /**
     * The mapping between a particular user and the access type on the SMB share.
     */
    export interface UserAccessRightArgs {
        /**
         * Type of access to be allowed for the user.
         */
        accessType: pulumi.Input<string | enums.ShareAccessType>;
        /**
         * User ID (already existing in the device).
         */
        userId: pulumi.Input<string>;
    }
