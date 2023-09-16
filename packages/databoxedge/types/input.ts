import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace databoxedge {
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
     * Compute infrastructure Resource
     */
    export interface ComputeResourceArgs {
        /**
         * Memory in GB
         */
        memoryInGB: pulumi.Input<number>;
        /**
         * Processor count
         */
        processorCount: pulumi.Input<number>;
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
     * File source details.
     */
    export interface FileSourceInfoArgs {
        /**
         * File share ID.
         */
        shareId: pulumi.Input<string>;
    }

    /**
     * Image repository credential.
     */
    export interface ImageRepositoryCredentialArgs {
        /**
         * Image repository url (e.g.: mcr.microsoft.com).
         */
        imageRepositoryUrl: pulumi.Input<string>;
        /**
         * Repository user password.
         */
        password?: pulumi.Input<AsymmetricEncryptedSecretArgs>;
        /**
         * Repository user name.
         */
        userName: pulumi.Input<string>;
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
     * IoT edge agent details is optional, this will be used for download system Agent module while bootstrapping IoT Role if specified.
     */
    export interface IoTEdgeAgentInfoArgs {
        /**
         * Name of the IoT edge agent image.
         */
        imageName: pulumi.Input<string>;
        /**
         * Image repository details.
         */
        imageRepository?: pulumi.Input<ImageRepositoryCredentialArgs>;
        /**
         * Image Tag.
         */
        tag: pulumi.Input<string>;
    }

    /**
     * Kubernetes cluster configuration
     */
    export interface KubernetesClusterInfoArgs {
        /**
         * Kubernetes cluster version
         */
        version: pulumi.Input<string>;
    }

    /**
     * Kubernetes role compute resource
     */
    export interface KubernetesRoleComputeArgs {
        /**
         * VM profile
         */
        vmProfile: pulumi.Input<string>;
    }

    /**
     * Kubernetes role resources
     */
    export interface KubernetesRoleResourcesArgs {
        /**
         * Kubernetes role compute resource
         */
        compute: pulumi.Input<KubernetesRoleComputeArgs>;
        /**
         * Kubernetes role storage resource
         */
        storage?: pulumi.Input<KubernetesRoleStorageArgs>;
    }

    /**
     * Kubernetes role storage resource
     */
    export interface KubernetesRoleStorageArgs {
        /**
         * Mount points of shares in role(s).
         */
        endpoints?: pulumi.Input<pulumi.Input<MountPointMapArgs>[]>;
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
     * The share mount point.
     */
    export interface MountPointMapArgs {
        /**
         * ID of the share mounted to the role VM.
         */
        shareId: pulumi.Input<string>;
    }

    /**
     * Periodic timer event source.
     */
    export interface PeriodicTimerSourceInfoArgs {
        /**
         * Periodic frequency at which timer event needs to be raised. Supports daily, hourly, minutes, and seconds.
         */
        schedule: pulumi.Input<string>;
        /**
         * The time of the day that results in a valid trigger. Schedule is computed with reference to the time specified upto seconds. If timezone is not specified the time will considered to be in device timezone. The value will always be returned as UTC time.
         */
        startTime: pulumi.Input<string>;
        /**
         * Topic where periodic events are published to IoT device.
         */
        topic?: pulumi.Input<string>;
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
     * Compute role against which events will be raised.
     */
    export interface RoleSinkInfoArgs {
        /**
         * Compute role ID.
         */
        roleId: pulumi.Input<string>;
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

    export namespace v20210201 {
        /**
         * Wraps data-residency related information for edge-resource and this should be used with ARM layer.
         */
        export interface DataResidencyArgs {
            /**
             * DataResidencyType enum
             */
            type?: pulumi.Input<string | enums.v20210201.DataResidencyType>;
        }

        /**
         * Msi identity details of the resource
         */
        export interface ResourceIdentityArgs {
            /**
             * Identity type
             */
            type?: pulumi.Input<string | enums.v20210201.MsiIdentityType>;
        }

        /**
         * The SKU type.
         */
        export interface SkuArgs {
            /**
             * SKU name.
             */
            name?: pulumi.Input<string | enums.v20210201.SkuName>;
            /**
             * The SKU tier. This is based on the SKU name.
             */
            tier?: pulumi.Input<string | enums.v20210201.SkuTier>;
        }

    }

    export namespace v20210201preview {
        /**
         * Represent the secrets intended for encryption with asymmetric key pair.
         */
        export interface AsymmetricEncryptedSecretArgs {
            /**
             * The algorithm used to encrypt "Value".
             */
            encryptionAlgorithm: pulumi.Input<string | enums.v20210201preview.EncryptionAlgorithm>;
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
         * Msi identity details of the resource
         */
        export interface ResourceIdentityArgs {
            /**
             * Identity type
             */
            type?: pulumi.Input<string | enums.v20210201preview.MsiIdentityType>;
        }

        /**
         * The SKU type.
         */
        export interface SkuArgs {
            /**
             * SKU name.
             */
            name?: pulumi.Input<string | enums.v20210201preview.SkuName>;
            /**
             * The SKU tier. This is based on the SKU name.
             */
            tier?: pulumi.Input<string | enums.v20210201preview.SkuTier>;
        }

    }

    export namespace v20220301 {
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
            encryptionAlgorithm: pulumi.Input<string | enums.v20220301.EncryptionAlgorithm>;
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
            symmetricKey?: pulumi.Input<v20220301.SymmetricKeyArgs>;
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
            dataFormat: pulumi.Input<string | enums.v20220301.AzureContainerDataFormat>;
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
            accessPermission: pulumi.Input<string | enums.v20220301.ClientPermissionType>;
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
            type?: pulumi.Input<string | enums.v20220301.DataResidencyType>;
        }

        /**
         * Metadata of IoT device/IoT Edge device to be configured.
         */
        export interface IoTDeviceInfoArgs {
            /**
             * Encrypted IoT device/IoT edge device connection string.
             */
            authentication?: pulumi.Input<v20220301.AuthenticationArgs>;
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
            counterSets: pulumi.Input<pulumi.Input<v20220301.MetricCounterSetArgs>[]>;
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
            additionalDimensions?: pulumi.Input<pulumi.Input<v20220301.MetricDimensionArgs>[]>;
            /**
             * The dimension filter.
             */
            dimensionFilter?: pulumi.Input<pulumi.Input<v20220301.MetricDimensionArgs>[]>;
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
            counters: pulumi.Input<pulumi.Input<v20220301.MetricCounterArgs>[]>;
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
            type?: pulumi.Input<string | enums.v20220301.MsiIdentityType>;
        }

        /**
         * The SKU type.
         */
        export interface SkuArgs {
            /**
             * SKU name.
             */
            name?: pulumi.Input<string | enums.v20220301.SkuName>;
            /**
             * The SKU tier. This is based on the SKU name.
             */
            tier?: pulumi.Input<string | enums.v20220301.SkuTier>;
        }

        /**
         * Symmetric key for authentication.
         */
        export interface SymmetricKeyArgs {
            /**
             * Connection string based on the symmetric key.
             */
            connectionString?: pulumi.Input<v20220301.AsymmetricEncryptedSecretArgs>;
        }

        /**
         * The mapping between a particular user and the access type on the SMB share.
         */
        export interface UserAccessRightArgs {
            /**
             * Type of access to be allowed for the user.
             */
            accessType: pulumi.Input<string | enums.v20220301.ShareAccessType>;
            /**
             * User ID (already existing in the device).
             */
            userId: pulumi.Input<string>;
        }

    }

    export namespace v20220401preview {
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
            type?: pulumi.Input<string | enums.v20220401preview.DataResidencyType>;
        }

        /**
         * The SKU type.
         */
        export interface SkuArgs {
            /**
             * SKU name.
             */
            name?: pulumi.Input<string | enums.v20220401preview.SkuName>;
            /**
             * The SKU tier. This is based on the SKU name.
             */
            tier?: pulumi.Input<string | enums.v20220401preview.SkuTier>;
        }

    }

    export namespace v20230101preview {
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
            encryptionAlgorithm: pulumi.Input<string | enums.v20230101preview.EncryptionAlgorithm>;
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
            symmetricKey?: pulumi.Input<v20230101preview.SymmetricKeyArgs>;
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
            dataFormat: pulumi.Input<string | enums.v20230101preview.AzureContainerDataFormat>;
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
            accessPermission: pulumi.Input<string | enums.v20230101preview.ClientPermissionType>;
            /**
             * IP of the client.
             */
            client: pulumi.Input<string>;
        }

        /**
         * Compute infrastructure Resource
         */
        export interface ComputeResourceArgs {
            /**
             * Memory in GB
             */
            memoryInGB: pulumi.Input<number>;
            /**
             * Processor count
             */
            processorCount: pulumi.Input<number>;
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
            type?: pulumi.Input<string | enums.v20230101preview.DataResidencyType>;
        }

        /**
         * File source details.
         */
        export interface FileSourceInfoArgs {
            /**
             * File share ID.
             */
            shareId: pulumi.Input<string>;
        }

        /**
         * Image repository credential.
         */
        export interface ImageRepositoryCredentialArgs {
            /**
             * Image repository url (e.g.: mcr.microsoft.com).
             */
            imageRepositoryUrl: pulumi.Input<string>;
            /**
             * Repository user password.
             */
            password?: pulumi.Input<v20230101preview.AsymmetricEncryptedSecretArgs>;
            /**
             * Repository user name.
             */
            userName: pulumi.Input<string>;
        }

        /**
         * Metadata of IoT device/IoT Edge device to be configured.
         */
        export interface IoTDeviceInfoArgs {
            /**
             * Encrypted IoT device/IoT edge device connection string.
             */
            authentication?: pulumi.Input<v20230101preview.AuthenticationArgs>;
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
         * IoT edge agent details is optional, this will be used for download system Agent module while bootstrapping IoT Role if specified.
         */
        export interface IoTEdgeAgentInfoArgs {
            /**
             * Name of the IoT edge agent image.
             */
            imageName: pulumi.Input<string>;
            /**
             * Image repository details.
             */
            imageRepository?: pulumi.Input<v20230101preview.ImageRepositoryCredentialArgs>;
            /**
             * Image Tag.
             */
            tag: pulumi.Input<string>;
        }

        /**
         * Kubernetes cluster configuration
         */
        export interface KubernetesClusterInfoArgs {
            /**
             * Kubernetes cluster version
             */
            version: pulumi.Input<string>;
        }

        /**
         * Kubernetes role compute resource
         */
        export interface KubernetesRoleComputeArgs {
            /**
             * VM profile
             */
            vmProfile: pulumi.Input<string>;
        }

        /**
         * Kubernetes role resources
         */
        export interface KubernetesRoleResourcesArgs {
            /**
             * Kubernetes role compute resource
             */
            compute: pulumi.Input<v20230101preview.KubernetesRoleComputeArgs>;
            /**
             * Kubernetes role storage resource
             */
            storage?: pulumi.Input<v20230101preview.KubernetesRoleStorageArgs>;
        }

        /**
         * Kubernetes role storage resource
         */
        export interface KubernetesRoleStorageArgs {
            /**
             * Mount points of shares in role(s).
             */
            endpoints?: pulumi.Input<pulumi.Input<v20230101preview.MountPointMapArgs>[]>;
        }

        /**
         * Metric configuration.
         */
        export interface MetricConfigurationArgs {
            /**
             * Host name for the IoT hub associated to the device.
             */
            counterSets: pulumi.Input<pulumi.Input<v20230101preview.MetricCounterSetArgs>[]>;
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
            additionalDimensions?: pulumi.Input<pulumi.Input<v20230101preview.MetricDimensionArgs>[]>;
            /**
             * The dimension filter.
             */
            dimensionFilter?: pulumi.Input<pulumi.Input<v20230101preview.MetricDimensionArgs>[]>;
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
            counters: pulumi.Input<pulumi.Input<v20230101preview.MetricCounterArgs>[]>;
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
         * The share mount point.
         */
        export interface MountPointMapArgs {
            /**
             * ID of the share mounted to the role VM.
             */
            shareId: pulumi.Input<string>;
        }

        /**
         * Periodic timer event source.
         */
        export interface PeriodicTimerSourceInfoArgs {
            /**
             * Periodic frequency at which timer event needs to be raised. Supports daily, hourly, minutes, and seconds.
             */
            schedule: pulumi.Input<string>;
            /**
             * The time of the day that results in a valid trigger. Schedule is computed with reference to the time specified upto seconds. If timezone is not specified the time will considered to be in device timezone. The value will always be returned as UTC time.
             */
            startTime: pulumi.Input<string>;
            /**
             * Topic where periodic events are published to IoT device.
             */
            topic?: pulumi.Input<string>;
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
            type?: pulumi.Input<string | enums.v20230101preview.MsiIdentityType>;
        }

        /**
         * Compute role against which events will be raised.
         */
        export interface RoleSinkInfoArgs {
            /**
             * Compute role ID.
             */
            roleId: pulumi.Input<string>;
        }

        /**
         * The SKU type.
         */
        export interface SkuArgs {
            /**
             * SKU name.
             */
            name?: pulumi.Input<string | enums.v20230101preview.SkuName>;
            /**
             * The SKU tier. This is based on the SKU name.
             */
            tier?: pulumi.Input<string | enums.v20230101preview.SkuTier>;
        }

        /**
         * Symmetric key for authentication.
         */
        export interface SymmetricKeyArgs {
            /**
             * Connection string based on the symmetric key.
             */
            connectionString?: pulumi.Input<v20230101preview.AsymmetricEncryptedSecretArgs>;
        }

        /**
         * The mapping between a particular user and the access type on the SMB share.
         */
        export interface UserAccessRightArgs {
            /**
             * Type of access to be allowed for the user.
             */
            accessType: pulumi.Input<string | enums.v20230101preview.ShareAccessType>;
            /**
             * User ID (already existing in the device).
             */
            userId: pulumi.Input<string>;
        }

    }

    export namespace v20230701 {
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
            encryptionAlgorithm: pulumi.Input<string | enums.v20230701.EncryptionAlgorithm>;
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
            symmetricKey?: pulumi.Input<v20230701.SymmetricKeyArgs>;
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
            dataFormat: pulumi.Input<string | enums.v20230701.AzureContainerDataFormat>;
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
            accessPermission: pulumi.Input<string | enums.v20230701.ClientPermissionType>;
            /**
             * IP of the client.
             */
            client: pulumi.Input<string>;
        }

        /**
         * Compute infrastructure Resource
         */
        export interface ComputeResourceArgs {
            /**
             * Memory in GB
             */
            memoryInGB: pulumi.Input<number>;
            /**
             * Processor count
             */
            processorCount: pulumi.Input<number>;
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
            type?: pulumi.Input<string | enums.v20230701.DataResidencyType>;
        }

        /**
         * File source details.
         */
        export interface FileSourceInfoArgs {
            /**
             * File share ID.
             */
            shareId: pulumi.Input<string>;
        }

        /**
         * Image repository credential.
         */
        export interface ImageRepositoryCredentialArgs {
            /**
             * Image repository url (e.g.: mcr.microsoft.com).
             */
            imageRepositoryUrl: pulumi.Input<string>;
            /**
             * Repository user password.
             */
            password?: pulumi.Input<v20230701.AsymmetricEncryptedSecretArgs>;
            /**
             * Repository user name.
             */
            userName: pulumi.Input<string>;
        }

        /**
         * Metadata of IoT device/IoT Edge device to be configured.
         */
        export interface IoTDeviceInfoArgs {
            /**
             * Encrypted IoT device/IoT edge device connection string.
             */
            authentication?: pulumi.Input<v20230701.AuthenticationArgs>;
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
         * IoT edge agent details is optional, this will be used for download system Agent module while bootstrapping IoT Role if specified.
         */
        export interface IoTEdgeAgentInfoArgs {
            /**
             * Name of the IoT edge agent image.
             */
            imageName: pulumi.Input<string>;
            /**
             * Image repository details.
             */
            imageRepository?: pulumi.Input<v20230701.ImageRepositoryCredentialArgs>;
            /**
             * Image Tag.
             */
            tag: pulumi.Input<string>;
        }

        /**
         * Kubernetes cluster configuration
         */
        export interface KubernetesClusterInfoArgs {
            /**
             * Kubernetes cluster version
             */
            version: pulumi.Input<string>;
        }

        /**
         * Kubernetes role compute resource
         */
        export interface KubernetesRoleComputeArgs {
            /**
             * VM profile
             */
            vmProfile: pulumi.Input<string>;
        }

        /**
         * Kubernetes role resources
         */
        export interface KubernetesRoleResourcesArgs {
            /**
             * Kubernetes role compute resource
             */
            compute: pulumi.Input<v20230701.KubernetesRoleComputeArgs>;
            /**
             * Kubernetes role storage resource
             */
            storage?: pulumi.Input<v20230701.KubernetesRoleStorageArgs>;
        }

        /**
         * Kubernetes role storage resource
         */
        export interface KubernetesRoleStorageArgs {
            /**
             * Mount points of shares in role(s).
             */
            endpoints?: pulumi.Input<pulumi.Input<v20230701.MountPointMapArgs>[]>;
        }

        /**
         * Metric configuration.
         */
        export interface MetricConfigurationArgs {
            /**
             * Host name for the IoT hub associated to the device.
             */
            counterSets: pulumi.Input<pulumi.Input<v20230701.MetricCounterSetArgs>[]>;
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
            additionalDimensions?: pulumi.Input<pulumi.Input<v20230701.MetricDimensionArgs>[]>;
            /**
             * The dimension filter.
             */
            dimensionFilter?: pulumi.Input<pulumi.Input<v20230701.MetricDimensionArgs>[]>;
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
            counters: pulumi.Input<pulumi.Input<v20230701.MetricCounterArgs>[]>;
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
         * The share mount point.
         */
        export interface MountPointMapArgs {
            /**
             * ID of the share mounted to the role VM.
             */
            shareId: pulumi.Input<string>;
        }

        /**
         * Periodic timer event source.
         */
        export interface PeriodicTimerSourceInfoArgs {
            /**
             * Periodic frequency at which timer event needs to be raised. Supports daily, hourly, minutes, and seconds.
             */
            schedule: pulumi.Input<string>;
            /**
             * The time of the day that results in a valid trigger. Schedule is computed with reference to the time specified upto seconds. If timezone is not specified the time will considered to be in device timezone. The value will always be returned as UTC time.
             */
            startTime: pulumi.Input<string>;
            /**
             * Topic where periodic events are published to IoT device.
             */
            topic?: pulumi.Input<string>;
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
            type?: pulumi.Input<string | enums.v20230701.MsiIdentityType>;
        }

        /**
         * Compute role against which events will be raised.
         */
        export interface RoleSinkInfoArgs {
            /**
             * Compute role ID.
             */
            roleId: pulumi.Input<string>;
        }

        /**
         * The SKU type.
         */
        export interface SkuArgs {
            /**
             * SKU name.
             */
            name?: pulumi.Input<string | enums.v20230701.SkuName>;
            /**
             * The SKU tier. This is based on the SKU name.
             */
            tier?: pulumi.Input<string | enums.v20230701.SkuTier>;
        }

        /**
         * Symmetric key for authentication.
         */
        export interface SymmetricKeyArgs {
            /**
             * Connection string based on the symmetric key.
             */
            connectionString?: pulumi.Input<v20230701.AsymmetricEncryptedSecretArgs>;
        }

        /**
         * The mapping between a particular user and the access type on the SMB share.
         */
        export interface UserAccessRightArgs {
            /**
             * Type of access to be allowed for the user.
             */
            accessType: pulumi.Input<string | enums.v20230701.ShareAccessType>;
            /**
             * User ID (already existing in the device).
             */
            userId: pulumi.Input<string>;
        }

    }
}
