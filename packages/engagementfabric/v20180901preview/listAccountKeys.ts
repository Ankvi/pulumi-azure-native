import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The list of the EngagementFabric account keys
 */
export function listAccountKeys(args: ListAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListAccountKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:engagementfabric/v20180901preview:listAccountKeys", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAccountKeysArgs {
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
 * The list of the EngagementFabric account keys
 */
export interface ListAccountKeysResult {
    /**
     * Account keys
     */
    readonly value: types.outputs.engagementfabric.v20180901preview.KeyDescriptionResponse[];
}
/**
 * The list of the EngagementFabric account keys
 */
export function listAccountKeysOutput(args: ListAccountKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAccountKeysResult> {
    return pulumi.output(args).apply((a: any) => listAccountKeys(a, opts))
}

export interface ListAccountKeysOutputArgs {
    /**
     * Account Name
     */
    accountName: pulumi.Input<string>;
    /**
     * Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
}
