import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns RecommendationsService Account resource for a given name.
 * Azure REST API version: 2022-02-01.
 *
 * Other available API versions: 2022-03-01-preview.
 */
export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recommendationsservice:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountArgs {
    /**
     * The name of the RecommendationsService Account resource.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Account resource details.
 */
export interface GetAccountResult {
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
     * Account resource properties.
     */
    readonly properties: types.outputs.AccountResourceResponseProperties;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
 * Returns RecommendationsService Account resource for a given name.
 * Azure REST API version: 2022-02-01.
 *
 * Other available API versions: 2022-03-01-preview.
 */
export function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:recommendationsservice:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountOutputArgs {
    /**
     * The name of the RecommendationsService Account resource.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}