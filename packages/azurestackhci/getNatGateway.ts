import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation to get a natGateway.
 *
 * Uses Azure REST API version 2025-09-01-preview.
 */
export function getNatGateway(args: GetNatGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetNatGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getNatGateway", {
        "natGatewayName": args.natGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNatGatewayArgs {
    /**
     * Name of the nat gateway
     */
    natGatewayName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The NatGateway resource definition.
 */
export interface GetNatGatewayResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
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
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.NatGatewayPropertiesResponse;
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
 * The operation to get a natGateway.
 *
 * Uses Azure REST API version 2025-09-01-preview.
 */
export function getNatGatewayOutput(args: GetNatGatewayOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNatGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestackhci:getNatGateway", {
        "natGatewayName": args.natGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNatGatewayOutputArgs {
    /**
     * Name of the nat gateway
     */
    natGatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}