import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the provisioned cluster instance
 */
export function getProvisionedClusterInstance(args: GetProvisionedClusterInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetProvisionedClusterInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcontainerservice/v20240101:getProvisionedClusterInstance", {
        "connectedClusterResourceUri": args.connectedClusterResourceUri,
    }, opts);
}

export interface GetProvisionedClusterInstanceArgs {
    /**
     * The fully qualified Azure Resource Manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: string;
}

/**
 * The provisioned cluster resource definition.
 */
export interface GetProvisionedClusterInstanceResult {
    /**
     * Extended location pointing to the underlying infrastructure
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of the provisioned cluster.
     */
    readonly properties: types.outputs.ProvisionedClusterPropertiesResponse;
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
 * Gets the provisioned cluster instance
 */
export function getProvisionedClusterInstanceOutput(args: GetProvisionedClusterInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProvisionedClusterInstanceResult> {
    return pulumi.output(args).apply((a: any) => getProvisionedClusterInstance(a, opts))
}

export interface GetProvisionedClusterInstanceOutputArgs {
    /**
     * The fully qualified Azure Resource Manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: pulumi.Input<string>;
}