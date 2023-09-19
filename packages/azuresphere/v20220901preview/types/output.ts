import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * An deployment resource belonging to a device group resource.
     */
    export interface DeploymentResponse {
        /**
         * Images deployed
         */
        deployedImages?: ImageResponse[];
        /**
         * Deployment date UTC
         */
        deploymentDateUtc: string;
        /**
         * Deployment ID
         */
        deploymentId?: string;
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * The status of the last operation.
         */
        provisioningState: string;
        /**
         * Azure Resource Manager metadata containing createdBy and modifiedBy information.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * An device group resource belonging to a product resource.
     */
    export interface DeviceGroupResponse {
        /**
         * Flag to define if the user allows for crash dump collection.
         */
        allowCrashDumpsCollection?: string;
        /**
         * Description of the device group.
         */
        description?: string;
        /**
         * Deployment status for the device group.
         */
        hasDeployment: boolean;
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * Operating system feed type of the device group.
         */
        osFeedType?: string;
        /**
         * The status of the last operation.
         */
        provisioningState: string;
        /**
         * Regional data boundary for the device group.
         */
        regionalDataBoundary?: string;
        /**
         * Azure Resource Manager metadata containing createdBy and modifiedBy information.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
        /**
         * Update policy of the device group.
         */
        updatePolicy?: string;
    }

    /**
     * Device insight report.
     */
    export interface DeviceInsightResponse {
        /**
         * Event description
         */
        description: string;
        /**
         * Device ID
         */
        deviceId: string;
        /**
         * Event end timestamp
         */
        endTimestampUtc: string;
        /**
         * Event category
         */
        eventCategory: string;
        /**
         * Event class
         */
        eventClass: string;
        /**
         * Event count
         */
        eventCount: number;
        /**
         * Event type
         */
        eventType: string;
        /**
         * Event start timestamp
         */
        startTimestampUtc: string;
    }

    /**
     * An device resource belonging to a device group resource.
     */
    export interface DeviceResponse {
        /**
         * SKU of the chip
         */
        chipSku: string;
        /**
         * Device ID
         */
        deviceId?: string;
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * OS version available for installation when update requested
         */
        lastAvailableOsVersion: string;
        /**
         * OS version running on device when update requested
         */
        lastInstalledOsVersion: string;
        /**
         * Time when update requested and new OS version available
         */
        lastOsUpdateUtc: string;
        /**
         * Time when update was last requested
         */
        lastUpdateRequestUtc: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * The status of the last operation.
         */
        provisioningState: string;
        /**
         * Azure Resource Manager metadata containing createdBy and modifiedBy information.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * An image resource belonging to a catalog resource.
     */
    export interface ImageResponse {
        /**
         * The image component id.
         */
        componentId: string;
        /**
         * The image description.
         */
        description: string;
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * Image as a UTF-8 encoded base 64 string on image create. This field contains the image URI on image reads.
         */
        image?: string;
        /**
         * Image ID
         */
        imageId?: string;
        /**
         * Image name
         */
        imageName: string;
        /**
         * The image type.
         */
        imageType: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * The status of the last operation.
         */
        provisioningState: string;
        /**
         * Regional data boundary for an image
         */
        regionalDataBoundary?: string;
        /**
         * Azure Resource Manager metadata containing createdBy and modifiedBy information.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
        /**
         * Location the image
         */
        uri: string;
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
