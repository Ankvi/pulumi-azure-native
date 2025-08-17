import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a private link resource. Returns the configuration and status of private endpoint connectivity for Microsoft Defender for Cloud services in the specified region.
 *
 * Uses Azure REST API version 2025-09-01-preview.
 */
export function getPrivateLink(args: GetPrivateLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getPrivateLink", {
        "privateLinkName": args.privateLinkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateLinkArgs {
    /**
     * The name of the private link resource. Must be unique within the resource group and follow Azure naming conventions.
     */
    privateLinkName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A private link resource that enables secure, private connectivity to Microsoft Defender for Cloud services. This resource manages the lifecycle of private endpoint connections and provides the necessary infrastructure for private connectivity.
 */
export interface GetPrivateLinkResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of private endpoint connections associated with this private link. Each connection represents a private endpoint from a customer's virtual network.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * List of private link resources available for connection. For Defender services, this typically includes the 'containers' group with 'api' and regional data endpoints.
     */
    readonly privateLinkResources: types.outputs.PrivateLinkResourceResponse[];
    /**
     * The current provisioning state of the private link resource. Indicates whether the resource is being created, updated, deleted, or has completed successfully.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a private link resource. Returns the configuration and status of private endpoint connectivity for Microsoft Defender for Cloud services in the specified region.
 *
 * Uses Azure REST API version 2025-09-01-preview.
 */
export function getPrivateLinkOutput(args: GetPrivateLinkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getPrivateLink", {
        "privateLinkName": args.privateLinkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateLinkOutputArgs {
    /**
     * The name of the private link resource. Must be unique within the resource group and follow Azure naming conventions.
     */
    privateLinkName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}