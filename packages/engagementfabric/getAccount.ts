import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The EngagementFabric account
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:engagementfabric:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountArgs {
    /**
     * Account Name
     */
    accountName: string;
    /**
     * Resource Group Name
     */
    resourceGroupName: string;
}

/**
 * The EngagementFabric account
 */
export interface GetAccountResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The ID of the resource
     */
    readonly id: string;
    /**
     * The location of the resource
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The SKU of the resource
     */
    readonly sku: types.outputs.SKUResponse;
    /**
     * The tags of the resource
     */
    readonly tags?: {[key: string]: string};
    /**
     * The fully qualified type of the resource
     */
    readonly type: string;
}
/**
 * The EngagementFabric account
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:engagementfabric:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountOutputArgs {
    /**
     * Account Name
     */
    accountName: pulumi.Input<string>;
    /**
     * Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
}