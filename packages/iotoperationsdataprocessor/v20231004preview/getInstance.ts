import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Instance
 */
export function getInstance(args: GetInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperationsdataprocessor/v20231004preview:getInstance", {
        "instanceName": args.instanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInstanceArgs {
    /**
     * Name of instance.
     */
    instanceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A Instance resource is a logical container for a set of child resources.
 */
export interface GetInstanceResult {
    /**
     * Detailed description of the Instance.
     */
    readonly description?: string;
    /**
     * Edge location of the resource.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
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
     * The status of the last operation.
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
 * Get a Instance
 */
export function getInstanceOutput(args: GetInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInstanceResult> {
    return pulumi.output(args).apply((a: any) => getInstance(a, opts))
}

export interface GetInstanceOutputArgs {
    /**
     * Name of instance.
     */
    instanceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}