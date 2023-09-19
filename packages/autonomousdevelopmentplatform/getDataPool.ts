import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of a Data Pool
 * Azure REST API version: 2021-11-01-preview.
 */
export function getDataPool(args: GetDataPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetDataPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:autonomousdevelopmentplatform:getDataPool", {
        "accountName": args.accountName,
        "dataPoolName": args.dataPoolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataPoolArgs {
    /**
     * The name of the ADP account
     */
    accountName: string;
    /**
     * The name of the Data Pool
     */
    dataPoolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * ADP Data Pool
 */
export interface GetDataPoolResult {
    /**
     * The Data Pool's data-plane ID
     */
    readonly dataPoolId: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Gets or sets the collection of locations where Data Pool resources should be created
     */
    readonly locations: types.outputs.DataPoolLocationResponse[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets the status of the data pool at the time the operation was called
     */
    readonly provisioningState: string;
    /**
     * The system meta data relating to this resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the properties of a Data Pool
 * Azure REST API version: 2021-11-01-preview.
 */
export function getDataPoolOutput(args: GetDataPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataPoolResult> {
    return pulumi.output(args).apply((a: any) => getDataPool(a, opts))
}

export interface GetDataPoolOutputArgs {
    /**
     * The name of the ADP account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Data Pool
     */
    dataPoolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
