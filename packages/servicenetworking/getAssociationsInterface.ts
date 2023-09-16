import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Association
 * Azure REST API version: 2023-05-01-preview.
 */
export function getAssociationsInterface(args: GetAssociationsInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetAssociationsInterfaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicenetworking:getAssociationsInterface", {
        "associationName": args.associationName,
        "resourceGroupName": args.resourceGroupName,
        "trafficControllerName": args.trafficControllerName,
    }, opts);
}

export interface GetAssociationsInterfaceArgs {
    /**
     * Name of Association
     */
    associationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * traffic controller name for path
     */
    trafficControllerName: string;
}

/**
 * Association Subresource of Traffic Controller
 */
export interface GetAssociationsInterfaceResult {
    /**
     * Association Type
     */
    readonly associationType: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * Provisioning State of Traffic Controller Association Resource
     */
    readonly provisioningState: string;
    /**
     * Association Subnet
     */
    readonly subnet?: types.outputs.servicenetworking.AssociationSubnetResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.servicenetworking.SystemDataResponse;
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
 * Get a Association
 * Azure REST API version: 2023-05-01-preview.
 */
export function getAssociationsInterfaceOutput(args: GetAssociationsInterfaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAssociationsInterfaceResult> {
    return pulumi.output(args).apply((a: any) => getAssociationsInterface(a, opts))
}

export interface GetAssociationsInterfaceOutputArgs {
    /**
     * Name of Association
     */
    associationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * traffic controller name for path
     */
    trafficControllerName: pulumi.Input<string>;
}
