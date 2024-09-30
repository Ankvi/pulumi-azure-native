import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Instance of StaticCidr resource.
 * Azure REST API version: 2024-01-01-preview.
 */
export function getStaticCidr(args: GetStaticCidrArgs, opts?: pulumi.InvokeOptions): Promise<GetStaticCidrResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getStaticCidr", {
        "networkManagerName": args.networkManagerName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "staticCidrName": args.staticCidrName,
    }, opts);
}

export interface GetStaticCidrArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * Pool resource name.
     */
    poolName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * StaticCidr resource name to retrieve.
     */
    staticCidrName: string;
}

/**
 * Instance of StaticCidr resource.
 */
export interface GetStaticCidrResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of static CIDR resource.
     */
    readonly properties: types.outputs.StaticCidrPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Instance of StaticCidr resource.
 * Azure REST API version: 2024-01-01-preview.
 */
export function getStaticCidrOutput(args: GetStaticCidrOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStaticCidrResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getStaticCidr", {
        "networkManagerName": args.networkManagerName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "staticCidrName": args.staticCidrName,
    }, opts);
}

export interface GetStaticCidrOutputArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * Pool resource name.
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * StaticCidr resource name to retrieve.
     */
    staticCidrName: pulumi.Input<string>;
}