import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The EngagementFabric account
 */
export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:engagementfabric/v20180901preview:getAccount", {
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
 */
export function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountResult> {
    return pulumi.output(args).apply((a: any) => getAccount(a, opts))
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
