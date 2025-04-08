import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of the EngagementFabric channel descriptions
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function listAccountChannelTypes(args: ListAccountChannelTypesArgs, opts?: pulumi.InvokeOptions): Promise<ListAccountChannelTypesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:engagementfabric:listAccountChannelTypes", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAccountChannelTypesArgs {
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
 * List of the EngagementFabric channel descriptions
 */
export interface ListAccountChannelTypesResult {
    /**
     * Channel descriptions
     */
    readonly value?: types.outputs.ChannelTypeDescriptionResponse[];
}
/**
 * List of the EngagementFabric channel descriptions
 *
 * Uses Azure REST API version 2018-09-01-preview.
 */
export function listAccountChannelTypesOutput(args: ListAccountChannelTypesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListAccountChannelTypesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:engagementfabric:listAccountChannelTypes", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAccountChannelTypesOutputArgs {
    /**
     * Account Name
     */
    accountName: pulumi.Input<string>;
    /**
     * Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
}