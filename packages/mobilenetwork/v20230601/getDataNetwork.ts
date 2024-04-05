import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified data network.
 */
export function getDataNetwork(args: GetDataNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetDataNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork/v20230601:getDataNetwork", {
        "dataNetworkName": args.dataNetworkName,
        "mobileNetworkName": args.mobileNetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataNetworkArgs {
    /**
     * The name of the data network.
     */
    dataNetworkName: string;
    /**
     * The name of the mobile network.
     */
    mobileNetworkName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Data network resource. Must be created in the same location as its parent mobile network.
 */
export interface GetDataNetworkResult {
    /**
     * An optional description for this data network.
     */
    readonly description?: string;
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
     * The provisioning state of the data network resource.
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
 * Gets information about the specified data network.
 */
export function getDataNetworkOutput(args: GetDataNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataNetworkResult> {
    return pulumi.output(args).apply((a: any) => getDataNetwork(a, opts))
}

export interface GetDataNetworkOutputArgs {
    /**
     * The name of the data network.
     */
    dataNetworkName: pulumi.Input<string>;
    /**
     * The name of the mobile network.
     */
    mobileNetworkName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}