import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing peering service with the specified name under the given subscription and resource group.
 * Azure REST API version: 2022-10-01.
 */
export function getPeeringService(args: GetPeeringServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetPeeringServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:peering:getPeeringService", {
        "peeringServiceName": args.peeringServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPeeringServiceArgs {
    /**
     * The name of the peering.
     */
    peeringServiceName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Peering Service
 */
export interface GetPeeringServiceResult {
    /**
     * The ID of the resource.
     */
    readonly id: string;
    /**
     * The location of the resource.
     */
    readonly location: string;
    /**
     * The Log Analytics Workspace Properties
     */
    readonly logAnalyticsWorkspaceProperties?: types.outputs.LogAnalyticsWorkspacePropertiesResponse;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The location (state/province) of the customer.
     */
    readonly peeringServiceLocation?: string;
    /**
     * The name of the service provider.
     */
    readonly peeringServiceProvider?: string;
    /**
     * The backup peering (Microsoft/service provider) location to be used for customer traffic.
     */
    readonly providerBackupPeeringLocation?: string;
    /**
     * The primary peering (Microsoft/service provider) location to be used for customer traffic.
     */
    readonly providerPrimaryPeeringLocation?: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The SKU that defines the type of the peering service.
     */
    readonly sku?: types.outputs.PeeringServiceSkuResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets an existing peering service with the specified name under the given subscription and resource group.
 * Azure REST API version: 2022-10-01.
 */
export function getPeeringServiceOutput(args: GetPeeringServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPeeringServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:peering:getPeeringService", {
        "peeringServiceName": args.peeringServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPeeringServiceOutputArgs {
    /**
     * The name of the peering.
     */
    peeringServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}