import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the metadata of a service instance.
 *
 * Uses Azure REST API version 2023-02-28.
 *
 * Other available API versions: 2023-09-06, 2023-11-01, 2023-12-01, 2024-03-01, 2024-03-31, 2025-03-01-preview.
 */
export function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:healthcareapis:getService", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetServiceArgs {
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: string;
    /**
     * The name of the service instance.
     */
    resourceName: string;
}

/**
 * The description of the service.
 */
export interface GetServiceResult {
    /**
     * An etag associated with the resource, used for optimistic concurrency when editing it.
     */
    readonly etag?: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    readonly identity?: types.outputs.ServicesResourceResponseIdentity;
    /**
     * The kind of the service.
     */
    readonly kind: string;
    /**
     * The resource location.
     */
    readonly location: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The common properties of a service.
     */
    readonly properties: types.outputs.ServicesPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Get the metadata of a service instance.
 *
 * Uses Azure REST API version 2023-02-28.
 *
 * Other available API versions: 2023-09-06, 2023-11-01, 2023-12-01, 2024-03-01, 2024-03-31, 2025-03-01-preview.
 */
export function getServiceOutput(args: GetServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:healthcareapis:getService", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetServiceOutputArgs {
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service instance.
     */
    resourceName: pulumi.Input<string>;
}