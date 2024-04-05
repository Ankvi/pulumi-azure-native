import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List of the EngagementFabric channel descriptions
 */
export function listAccountChannelTypes(args: ListAccountChannelTypesArgs, opts?: pulumi.InvokeOptions): Promise<ListAccountChannelTypesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:engagementfabric/v20180901preview:listAccountChannelTypes", {
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
 */
export function listAccountChannelTypesOutput(args: ListAccountChannelTypesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAccountChannelTypesResult> {
    return pulumi.output(args).apply((a: any) => listAccountChannelTypes(a, opts))
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