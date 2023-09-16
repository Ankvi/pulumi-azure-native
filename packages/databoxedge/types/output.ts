import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace databoxedge {
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
     * Cni configuration
     */
    export interface CniConfigResponse {
        /**
         * Pod Subnet
         */
        podSubnet: string;
        /**
         * Service subnet
         */
        serviceSubnet: string;
        /**
         * Cni type
         */
        type: string;
        /**
         * Cni version
         */
        version: string;
    }

    /**
     * Compute infrastructure Resource
     */
    export interface ComputeResourceResponse {
        /**
         * Memory in GB
         */
        memoryInGB: number;
        /**
         * Processor count
         */
        processorCount: number;
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
     * Etcd configuration
     */
    export interface EtcdInfoResponse {
        /**
         * Etcd type
         */
        type: string;
        /**
         * Etcd version
         */
        version: string;
    }

    /**
     * File source details.
     */
    export interface FileSourceInfoResponse {
        /**
         * File share ID.
         */
        shareId: string;
    }

    /**
     * Image repository credential.
     */
    export interface ImageRepositoryCredentialResponse {
        /**
         * Image repository url (e.g.: mcr.microsoft.com).
         */
        imageRepositoryUrl: string;
        /**
         * Repository user password.
         */
        password?: AsymmetricEncryptedSecretResponse;
        /**
         * Repository user name.
         */
        userName: string;
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
     * IoT edge agent details is optional, this will be used for download system Agent module while bootstrapping IoT Role if specified.
     */
    export interface IoTEdgeAgentInfoResponse {
        /**
         * Name of the IoT edge agent image.
         */
        imageName: string;
        /**
         * Image repository details.
         */
        imageRepository?: ImageRepositoryCredentialResponse;
        /**
         * Image Tag.
         */
        tag: string;
    }

    /**
     * Kubernetes cluster configuration
     */
    export interface KubernetesClusterInfoResponse {
        /**
         * Etcd configuration
         */
        etcdInfo: EtcdInfoResponse;
        /**
         * Kubernetes cluster nodes
         */
        nodes: NodeInfoResponse[];
        /**
         * Kubernetes cluster version
         */
        version: string;
    }

    /**
     * Kubernetes node IP configuration
     */
    export interface KubernetesIPConfigurationResponse {
        /**
         * IP address of the Kubernetes node.
         */
        ipAddress?: string;
        /**
         * Port of the Kubernetes node.
         */
        port: string;
    }

    /**
     * Kubernetes role compute resource
     */
    export interface KubernetesRoleComputeResponse {
        /**
         * Memory in bytes
         */
        memoryInBytes: number;
        /**
         * Processor count
         */
        processorCount: number;
        /**
         * VM profile
         */
        vmProfile: string;
    }

    /**
     * Kubernetes role network resource
     */
    export interface KubernetesRoleNetworkResponse {
        /**
         * Cni configuration
         */
        cniConfig: CniConfigResponse;
        /**
         * Load balancer configuration
         */
        loadBalancerConfig: LoadBalancerConfigResponse;
    }

    /**
     * Kubernetes role resources
     */
    export interface KubernetesRoleResourcesResponse {
        /**
         * Kubernetes role compute resource
         */
        compute: KubernetesRoleComputeResponse;
        /**
         * Kubernetes role network resource
         */
        network: KubernetesRoleNetworkResponse;
        /**
         * Kubernetes role storage resource
         */
        storage?: KubernetesRoleStorageResponse;
    }

    /**
     * Kubernetes storage class info.
     */
    export interface KubernetesRoleStorageClassInfoResponse {
        /**
         * Storage class name.
         */
        name: string;
        /**
         * If provisioned storage is posix compliant.
         */
        posixCompliant: string;
        /**
         * Storage class type.
         */
        type: string;
    }

    /**
     * Kubernetes role storage resource
     */
    export interface KubernetesRoleStorageResponse {
        /**
         * Mount points of shares in role(s).
         */
        endpoints?: MountPointMapResponse[];
        /**
         * Kubernetes storage class info.
         */
        storageClasses: KubernetesRoleStorageClassInfoResponse[];
    }

    /**
     * Load balancer configuration
     */
    export interface LoadBalancerConfigResponse {
        /**
         * Load balancer type
         */
        type: string;
        /**
         * Load balancer version
         */
        version: string;
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
     * Kubernetes node info
     */
    export interface NodeInfoResponse {
        /**
         * IP Configuration of the Kubernetes node.
         */
        ipConfiguration?: KubernetesIPConfigurationResponse[];
        /**
         * Node name.
         */
        name: string;
        /**
         * Node type - Master/Worker
         */
        type: string;
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
     * Periodic timer event source.
     */
    export interface PeriodicTimerSourceInfoResponse {
        /**
         * Periodic frequency at which timer event needs to be raised. Supports daily, hourly, minutes, and seconds.
         */
        schedule: string;
        /**
         * The time of the day that results in a valid trigger. Schedule is computed with reference to the time specified upto seconds. If timezone is not specified the time will considered to be in device timezone. The value will always be returned as UTC time.
         */
        startTime: string;
        /**
         * Topic where periodic events are published to IoT device.
         */
        topic?: string;
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
     * Compute role against which events will be raised.
     */
    export interface RoleSinkInfoResponse {
        /**
         * Compute role ID.
         */
        roleId: string;
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

    export namespace v20210201 {
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
            subscription?: v20210201.EdgeProfileSubscriptionResponse;
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
            registeredFeatures?: v20210201.SubscriptionRegisteredFeaturesResponse[];
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
            encryptedSecret?: v20210201.AsymmetricEncryptedSecretResponse;
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

    }

    export namespace v20210201preview {
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
            subscription?: v20210201preview.EdgeProfileSubscriptionResponse;
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
            registeredFeatures?: v20210201preview.SubscriptionRegisteredFeaturesResponse[];
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
            encryptedSecret?: v20210201preview.AsymmetricEncryptedSecretResponse;
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

    }

    export namespace v20220301 {
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
            symmetricKey?: v20220301.SymmetricKeyResponse;
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
            subscription?: v20220301.EdgeProfileSubscriptionResponse;
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
            registeredFeatures?: v20220301.SubscriptionRegisteredFeaturesResponse[];
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
            authentication?: v20220301.AuthenticationResponse;
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
            counterSets: v20220301.MetricCounterSetResponse[];
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
            additionalDimensions?: v20220301.MetricDimensionResponse[];
            /**
             * The dimension filter.
             */
            dimensionFilter?: v20220301.MetricDimensionResponse[];
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
            counters: v20220301.MetricCounterResponse[];
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
            trackingInformation: v20220301.TrackingInfoResponse;
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
            encryptedSecret?: v20220301.AsymmetricEncryptedSecretResponse;
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
            connectionString?: v20220301.AsymmetricEncryptedSecretResponse;
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

    }

    export namespace v20220401preview {
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
            subscription?: v20220401preview.EdgeProfileSubscriptionResponse;
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
            registeredFeatures?: v20220401preview.SubscriptionRegisteredFeaturesResponse[];
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
            trackingInformation: v20220401preview.TrackingInfoResponse;
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
            encryptedSecret?: v20220401preview.AsymmetricEncryptedSecretResponse;
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

    }

    export namespace v20230101preview {
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
            symmetricKey?: v20230101preview.SymmetricKeyResponse;
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
         * Cni configuration
         */
        export interface CniConfigResponse {
            /**
             * ComponentType of the Kubernetes node.
             */
            componentType: string;
            /**
             * Pod Subnet
             */
            podSubnet: string;
            /**
             * Service subnet
             */
            serviceSubnet: string;
            /**
             * Cni type
             */
            type: string;
            /**
             * Cni version
             */
            version: string;
        }

        /**
         * Compute infrastructure Resource
         */
        export interface ComputeResourceResponse {
            /**
             * Memory in GB
             */
            memoryInGB: number;
            /**
             * Processor count
             */
            processorCount: number;
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
            subscription?: v20230101preview.EdgeProfileSubscriptionResponse;
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
            registeredFeatures?: v20230101preview.SubscriptionRegisteredFeaturesResponse[];
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
         * Etcd configuration
         */
        export interface EtcdInfoResponse {
            /**
             * ComponentType of the Kubernetes node.
             */
            componentType: string;
            /**
             * Etcd type
             */
            type: string;
            /**
             * Etcd version
             */
            version: string;
        }

        /**
         * File source details.
         */
        export interface FileSourceInfoResponse {
            /**
             * File share ID.
             */
            shareId: string;
        }

        /**
         * Image repository credential.
         */
        export interface ImageRepositoryCredentialResponse {
            /**
             * Image repository url (e.g.: mcr.microsoft.com).
             */
            imageRepositoryUrl: string;
            /**
             * Repository user password.
             */
            password?: v20230101preview.AsymmetricEncryptedSecretResponse;
            /**
             * Repository user name.
             */
            userName: string;
        }

        /**
         * Metadata of IoT device/IoT Edge device to be configured.
         */
        export interface IoTDeviceInfoResponse {
            /**
             * Encrypted IoT device/IoT edge device connection string.
             */
            authentication?: v20230101preview.AuthenticationResponse;
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
         * IoT edge agent details is optional, this will be used for download system Agent module while bootstrapping IoT Role if specified.
         */
        export interface IoTEdgeAgentInfoResponse {
            /**
             * Name of the IoT edge agent image.
             */
            imageName: string;
            /**
             * Image repository details.
             */
            imageRepository?: v20230101preview.ImageRepositoryCredentialResponse;
            /**
             * Image Tag.
             */
            tag: string;
        }

        /**
         * Kubernetes cluster configuration
         */
        export interface KubernetesClusterInfoResponse {
            /**
             * ComponentType of the Kubernetes node.
             */
            componentType: string;
            /**
             * Etcd configuration
             */
            etcdInfo: v20230101preview.EtcdInfoResponse;
            /**
             * Kubernetes cluster nodes
             */
            nodes: v20230101preview.NodeInfoResponse[];
            /**
             * Kubernetes cluster version
             */
            version: string;
        }

        /**
         * Kubernetes node IP configuration
         */
        export interface KubernetesIPConfigurationResponse {
            /**
             * IP address of the Kubernetes node.
             */
            ipAddress?: string;
            /**
             * Port of the Kubernetes node.
             */
            port: string;
        }

        /**
         * Kubernetes role compute resource
         */
        export interface KubernetesRoleComputeResponse {
            /**
             * Count of huge pages
             */
            hugePage1G: number;
            /**
             * Count of huge pages
             */
            hugePage2M: number;
            /**
             * Memory in bytes
             */
            memoryInBytes: number;
            /**
             * Processor count
             */
            processorCount: number;
            /**
             * VM profile
             */
            vmProfile: string;
        }

        /**
         * Kubernetes role network resource
         */
        export interface KubernetesRoleNetworkResponse {
            /**
             * Cni configuration
             */
            cniConfig: v20230101preview.CniConfigResponse;
            /**
             * Load balancer configuration
             */
            loadBalancerConfig: v20230101preview.LoadBalancerConfigResponse;
        }

        /**
         * Kubernetes role resources
         */
        export interface KubernetesRoleResourcesResponse {
            /**
             * Kubernetes role compute resource
             */
            compute: v20230101preview.KubernetesRoleComputeResponse;
            /**
             * Kubernetes role network resource
             */
            network: v20230101preview.KubernetesRoleNetworkResponse;
            /**
             * Kubernetes role storage resource
             */
            storage?: v20230101preview.KubernetesRoleStorageResponse;
        }

        /**
         * Kubernetes storage class info.
         */
        export interface KubernetesRoleStorageClassInfoResponse {
            /**
             * Storage class name.
             */
            name: string;
            /**
             * If provisioned storage is posix compliant.
             */
            posixCompliant: string;
            /**
             * Storage class type.
             */
            type: string;
        }

        /**
         * Kubernetes role storage resource
         */
        export interface KubernetesRoleStorageResponse {
            /**
             * Mount points of shares in role(s).
             */
            endpoints?: v20230101preview.MountPointMapResponse[];
            /**
             * Kubernetes storage class info.
             */
            storageClasses: v20230101preview.KubernetesRoleStorageClassInfoResponse[];
        }

        /**
         * Load balancer configuration
         */
        export interface LoadBalancerConfigResponse {
            /**
             * ComponentType of the Kubernetes node.
             */
            componentType: string;
            /**
             * Load balancer type
             */
            type: string;
            /**
             * Load balancer version
             */
            version: string;
        }

        /**
         * Metric configuration.
         */
        export interface MetricConfigurationResponse {
            /**
             * Host name for the IoT hub associated to the device.
             */
            counterSets: v20230101preview.MetricCounterSetResponse[];
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
            additionalDimensions?: v20230101preview.MetricDimensionResponse[];
            /**
             * The dimension filter.
             */
            dimensionFilter?: v20230101preview.MetricDimensionResponse[];
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
            counters: v20230101preview.MetricCounterResponse[];
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
         * Kubernetes node info
         */
        export interface NodeInfoResponse {
            /**
             * ComponentType of the Kubernetes node.
             */
            componentType: string;
            /**
             * IP Configuration of the Kubernetes node.
             */
            ipConfiguration?: v20230101preview.KubernetesIPConfigurationResponse[];
            /**
             * Node name.
             */
            name: string;
            /**
             * Node type - Master/Worker
             */
            type: string;
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
            trackingInformation: v20230101preview.TrackingInfoResponse;
            /**
             * Time of status update.
             */
            updateDateTime: string;
        }

        /**
         * Periodic timer event source.
         */
        export interface PeriodicTimerSourceInfoResponse {
            /**
             * Periodic frequency at which timer event needs to be raised. Supports daily, hourly, minutes, and seconds.
             */
            schedule: string;
            /**
             * The time of the day that results in a valid trigger. Schedule is computed with reference to the time specified upto seconds. If timezone is not specified the time will considered to be in device timezone. The value will always be returned as UTC time.
             */
            startTime: string;
            /**
             * Topic where periodic events are published to IoT device.
             */
            topic?: string;
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
         * Compute role against which events will be raised.
         */
        export interface RoleSinkInfoResponse {
            /**
             * Compute role ID.
             */
            roleId: string;
        }

        /**
         * Holds device secret either as a KeyVault reference or as an encrypted value.
         */
        export interface SecretResponse {
            /**
             * Encrypted (using device public key) secret value.
             */
            encryptedSecret?: v20230101preview.AsymmetricEncryptedSecretResponse;
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
            connectionString?: v20230101preview.AsymmetricEncryptedSecretResponse;
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

    }

    export namespace v20230701 {
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
            symmetricKey?: v20230701.SymmetricKeyResponse;
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
         * Cni configuration
         */
        export interface CniConfigResponse {
            /**
             * Pod Subnet
             */
            podSubnet: string;
            /**
             * Service subnet
             */
            serviceSubnet: string;
            /**
             * Cni type
             */
            type: string;
            /**
             * Cni version
             */
            version: string;
        }

        /**
         * Compute infrastructure Resource
         */
        export interface ComputeResourceResponse {
            /**
             * Memory in GB
             */
            memoryInGB: number;
            /**
             * Processor count
             */
            processorCount: number;
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
            subscription?: v20230701.EdgeProfileSubscriptionResponse;
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
            registeredFeatures?: v20230701.SubscriptionRegisteredFeaturesResponse[];
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
         * Etcd configuration
         */
        export interface EtcdInfoResponse {
            /**
             * Etcd type
             */
            type: string;
            /**
             * Etcd version
             */
            version: string;
        }

        /**
         * File source details.
         */
        export interface FileSourceInfoResponse {
            /**
             * File share ID.
             */
            shareId: string;
        }

        /**
         * Image repository credential.
         */
        export interface ImageRepositoryCredentialResponse {
            /**
             * Image repository url (e.g.: mcr.microsoft.com).
             */
            imageRepositoryUrl: string;
            /**
             * Repository user password.
             */
            password?: v20230701.AsymmetricEncryptedSecretResponse;
            /**
             * Repository user name.
             */
            userName: string;
        }

        /**
         * Metadata of IoT device/IoT Edge device to be configured.
         */
        export interface IoTDeviceInfoResponse {
            /**
             * Encrypted IoT device/IoT edge device connection string.
             */
            authentication?: v20230701.AuthenticationResponse;
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
         * IoT edge agent details is optional, this will be used for download system Agent module while bootstrapping IoT Role if specified.
         */
        export interface IoTEdgeAgentInfoResponse {
            /**
             * Name of the IoT edge agent image.
             */
            imageName: string;
            /**
             * Image repository details.
             */
            imageRepository?: v20230701.ImageRepositoryCredentialResponse;
            /**
             * Image Tag.
             */
            tag: string;
        }

        /**
         * Kubernetes cluster configuration
         */
        export interface KubernetesClusterInfoResponse {
            /**
             * Etcd configuration
             */
            etcdInfo: v20230701.EtcdInfoResponse;
            /**
             * Kubernetes cluster nodes
             */
            nodes: v20230701.NodeInfoResponse[];
            /**
             * Kubernetes cluster version
             */
            version: string;
        }

        /**
         * Kubernetes node IP configuration
         */
        export interface KubernetesIPConfigurationResponse {
            /**
             * IP address of the Kubernetes node.
             */
            ipAddress?: string;
            /**
             * Port of the Kubernetes node.
             */
            port: string;
        }

        /**
         * Kubernetes role compute resource
         */
        export interface KubernetesRoleComputeResponse {
            /**
             * Memory in bytes
             */
            memoryInBytes: number;
            /**
             * Processor count
             */
            processorCount: number;
            /**
             * VM profile
             */
            vmProfile: string;
        }

        /**
         * Kubernetes role network resource
         */
        export interface KubernetesRoleNetworkResponse {
            /**
             * Cni configuration
             */
            cniConfig: v20230701.CniConfigResponse;
            /**
             * Load balancer configuration
             */
            loadBalancerConfig: v20230701.LoadBalancerConfigResponse;
        }

        /**
         * Kubernetes role resources
         */
        export interface KubernetesRoleResourcesResponse {
            /**
             * Kubernetes role compute resource
             */
            compute: v20230701.KubernetesRoleComputeResponse;
            /**
             * Kubernetes role network resource
             */
            network: v20230701.KubernetesRoleNetworkResponse;
            /**
             * Kubernetes role storage resource
             */
            storage?: v20230701.KubernetesRoleStorageResponse;
        }

        /**
         * Kubernetes storage class info.
         */
        export interface KubernetesRoleStorageClassInfoResponse {
            /**
             * Storage class name.
             */
            name: string;
            /**
             * If provisioned storage is posix compliant.
             */
            posixCompliant: string;
            /**
             * Storage class type.
             */
            type: string;
        }

        /**
         * Kubernetes role storage resource
         */
        export interface KubernetesRoleStorageResponse {
            /**
             * Mount points of shares in role(s).
             */
            endpoints?: v20230701.MountPointMapResponse[];
            /**
             * Kubernetes storage class info.
             */
            storageClasses: v20230701.KubernetesRoleStorageClassInfoResponse[];
        }

        /**
         * Load balancer configuration
         */
        export interface LoadBalancerConfigResponse {
            /**
             * Load balancer type
             */
            type: string;
            /**
             * Load balancer version
             */
            version: string;
        }

        /**
         * Metric configuration.
         */
        export interface MetricConfigurationResponse {
            /**
             * Host name for the IoT hub associated to the device.
             */
            counterSets: v20230701.MetricCounterSetResponse[];
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
            additionalDimensions?: v20230701.MetricDimensionResponse[];
            /**
             * The dimension filter.
             */
            dimensionFilter?: v20230701.MetricDimensionResponse[];
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
            counters: v20230701.MetricCounterResponse[];
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
         * Kubernetes node info
         */
        export interface NodeInfoResponse {
            /**
             * IP Configuration of the Kubernetes node.
             */
            ipConfiguration?: v20230701.KubernetesIPConfigurationResponse[];
            /**
             * Node name.
             */
            name: string;
            /**
             * Node type - Master/Worker
             */
            type: string;
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
            trackingInformation: v20230701.TrackingInfoResponse;
            /**
             * Time of status update.
             */
            updateDateTime: string;
        }

        /**
         * Periodic timer event source.
         */
        export interface PeriodicTimerSourceInfoResponse {
            /**
             * Periodic frequency at which timer event needs to be raised. Supports daily, hourly, minutes, and seconds.
             */
            schedule: string;
            /**
             * The time of the day that results in a valid trigger. Schedule is computed with reference to the time specified upto seconds. If timezone is not specified the time will considered to be in device timezone. The value will always be returned as UTC time.
             */
            startTime: string;
            /**
             * Topic where periodic events are published to IoT device.
             */
            topic?: string;
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
         * Compute role against which events will be raised.
         */
        export interface RoleSinkInfoResponse {
            /**
             * Compute role ID.
             */
            roleId: string;
        }

        /**
         * Holds device secret either as a KeyVault reference or as an encrypted value.
         */
        export interface SecretResponse {
            /**
             * Encrypted (using device public key) secret value.
             */
            encryptedSecret?: v20230701.AsymmetricEncryptedSecretResponse;
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
            connectionString?: v20230701.AsymmetricEncryptedSecretResponse;
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

    }
}
