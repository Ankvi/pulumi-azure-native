import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the properties of a Managed CCF app.
 */
export function getManagedCCF(args: GetManagedCCFArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedCCFResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confidentialledger/v20230126preview:getManagedCCF", {
        "appName": args.appName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedCCFArgs {
    /**
     * Name of the Managed CCF
     */
    appName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Managed CCF. Contains the properties of Managed CCF Resource.
 */
export interface GetManagedCCFResult {
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
     * Properties of Managed CCF Resource.
     */
    readonly properties: types.outputs.ManagedCCFPropertiesResponse;
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
 * Retrieves the properties of a Managed CCF app.
 */
export function getManagedCCFOutput(args: GetManagedCCFOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedCCFResult> {
    return pulumi.output(args).apply((a: any) => getManagedCCF(a, opts))
}

export interface GetManagedCCFOutputArgs {
    /**
     * Name of the Managed CCF
     */
    appName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}