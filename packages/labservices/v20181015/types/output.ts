import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * This represents the details about a User's environment and its state.
     */
    export interface EnvironmentDetailsResponse {
        /**
         * Description of the Environment
         */
        description: string;
        /**
         * Publishing state of the environment setting Possible values are Creating, Created, Failed
         */
        environmentState: string;
        /**
         * Resource Id of the environment
         */
        id: string;
        /**
         * The details of the latest operation. ex: status, error
         */
        latestOperationResult: LatestOperationResultResponse;
        /**
         * Name of the Environment
         */
        name: string;
        /**
         * When the password was last reset on the environment.
         */
        passwordLastReset: string;
        /**
         * The provisioning state of the environment. This also includes LabIsFull and NotYetProvisioned status.
         */
        provisioningState: string;
        /**
         * How long the environment has been used by a lab user
         */
        totalUsage: string;
        /**
         * Details of backing DTL virtual machine with compute and network details.
         */
        virtualMachineDetails: VirtualMachineDetailsResponse;
    }

    /**
     * Represents a size category supported by this Lab Account (small, medium or large)
     */
    export interface EnvironmentSizeResponse {
        /**
         * The pay-as-you-go dollar price per hour this size will cost. It does not include discounts and may not reflect the actual price the size will cost. This is the maximum price of all prices within this tier.
         */
        maxPrice: number;
        /**
         * The amount of memory available (in GB). This is the minimum amount of memory within this tier.
         */
        minMemory: number;
        /**
         * The number of cores a VM of this size has. This is the minimum number of cores within this tier.
         */
        minNumberOfCores: number;
        /**
         * The size category
         */
        name?: string;
        /**
         * Represents a set of compute sizes that can serve this given size type
         */
        vmSizes?: SizeInfoResponse[];
    }

    /**
     * The reference information for an Azure Marketplace image.
     */
    export interface GalleryImageReferenceResponse {
        /**
         * The offer of the gallery image.
         */
        offer?: string;
        /**
         * The OS type of the gallery image.
         */
        osType?: string;
        /**
         * The publisher of the gallery image.
         */
        publisher?: string;
        /**
         * The SKU of the gallery image.
         */
        sku?: string;
        /**
         * The version of the gallery image.
         */
        version?: string;
    }

    /**
     * This represents the details about a lab that the User is in, and its state.
     */
    export interface LabDetailsResponse {
        /**
         * The Id of the lab.
         */
        id?: string;
        /**
         * Name of the lab
         */
        name?: string;
        /**
         * The provisioning state of the lab.
         */
        provisioningState?: string;
        /**
         * The maximum duration a user can use a VM in this lab.
         */
        usageQuota: string;
    }

    /**
     * Details of the status of an operation.
     */
    export interface LatestOperationResultResponse {
        /**
         * Error code on failure.
         */
        errorCode: string;
        /**
         * The error message.
         */
        errorMessage: string;
        /**
         * The HttpMethod - PUT/POST/DELETE for the operation.
         */
        httpMethod: string;
        /**
         * The URL to use to check long-running operation status
         */
        operationUrl: string;
        /**
         * Request URI of the operation.
         */
        requestUri: string;
        /**
         * The current status of the operation.
         */
        status: string;
    }

    /**
     * Network details of the environment
     */
    export interface NetworkInterfaceResponse {
        /**
         * PrivateIp address of the Compute VM
         */
        privateIpAddress: string;
        /**
         * Connection information for Windows
         */
        rdpAuthority: string;
        /**
         * Connection information for Linux
         */
        sshAuthority: string;
        /**
         * Username of the VM
         */
        username: string;
    }

    /**
     * Represents the status of an operation that used the batch API.
     */
    export interface OperationBatchStatusResponseItemResponse {
        /**
         * status of the long running operation for an environment
         */
        operationUrl: string;
        /**
         * status of the long running operation for an environment
         */
        status: string;
    }

    /**
     * Details of a Reference Vm
     */
    export interface ReferenceVmResponse {
        /**
         * The password of the virtual machine. This will be set to null in GET resource API
         */
        password?: string;
        /**
         * The username of the virtual machine
         */
        userName: string;
        /**
         * VM resource Id for the environment
         */
        vmResourceId: string;
        /**
         * The state details for the reference virtual machine.
         */
        vmStateDetails: VmStateDetailsResponse;
    }

    /**
     * The availability information of sizes across regions
     */
    export interface RegionalAvailabilityResponse {
        /**
         * Corresponding region
         */
        region?: string;
        /**
         * List of all the size information for the region
         */
        sizeAvailabilities?: SizeAvailabilityResponse[];
    }

    /**
     * Represents a VM and the setting Id it was created for.
     */
    export interface ResourceSetResponse {
        /**
         * resourceSettingId for the environment
         */
        resourceSettingId?: string;
        /**
         * VM resource Id for the environment
         */
        vmResourceId?: string;
    }

    /**
     * Represents resource specific settings
     */
    export interface ResourceSettingsResponse {
        /**
         * The translated compute cores of the virtual machine
         */
        cores: number;
        /**
         * The resource id of the gallery image used for creating the virtual machine
         */
        galleryImageResourceId?: string;
        /**
         * The unique id of the resource setting
         */
        id: string;
        /**
         * The name of the image used to created the environment setting
         */
        imageName: string;
        /**
         * Details specific to Reference Vm
         */
        referenceVm: ReferenceVmResponse;
        /**
         * The size of the virtual machine
         */
        size?: string;
    }

    /**
     * Represents the size information
     */
    export interface SizeAvailabilityResponse {
        /**
         * Whether or not this size category is available
         */
        isAvailable?: boolean;
        /**
         * The category of the size (Basic, Standard, Performance).
         */
        sizeCategory?: string;
    }

    /**
     * Represents the size configuration under the lab account
     */
    export interface SizeConfigurationPropertiesResponse {
        /**
         * Represents a list of size categories supported by this Lab Account (Small, Medium, Large)
         */
        environmentSizes?: EnvironmentSizeResponse[];
    }

    /**
     * Contains detailed information about a size
     */
    export interface SizeInfoResponse {
        /**
         * Represents the actual compute size, e.g. Standard_A2_v2.
         */
        computeSize?: string;
        /**
         * The amount of memory available (in GB).
         */
        memory?: number;
        /**
         * The number of cores a VM of this size has.
         */
        numberOfCores?: number;
        /**
         * The pay-as-you-go price per hour this size will cost. It does not include discounts and may not reflect the actual price the size will cost.
         */
        price?: number;
    }

    /**
     * Details of the backing virtual machine.
     */
    export interface VirtualMachineDetailsResponse {
        /**
         * Last known compute power state captured in DTL
         */
        lastKnownPowerState: string;
        /**
         * PrivateIp address of the compute VM
         */
        privateIpAddress: string;
        /**
         * Provisioning state of the Dtl VM
         */
        provisioningState: string;
        /**
         * Connection information for Windows
         */
        rdpAuthority: string;
        /**
         * Connection information for Linux
         */
        sshAuthority: string;
        /**
         * Compute VM login user name
         */
        userName: string;
    }

    /**
     * Details about the state of the reference virtual machine.
     */
    export interface VmStateDetailsResponse {
        /**
         * Last known compute power state captured in DTL
         */
        lastKnownPowerState: string;
        /**
         * The power state of the reference virtual machine.
         */
        powerState: string;
        /**
         * The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol).
         */
        rdpAuthority: string;
        /**
         * The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH.
         */
        sshAuthority: string;
    }
