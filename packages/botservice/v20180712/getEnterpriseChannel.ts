import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns an Enterprise Channel specified by the parameters.
 */
export function getEnterpriseChannel(args: GetEnterpriseChannelArgs, opts?: pulumi.InvokeOptions): Promise<GetEnterpriseChannelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:botservice/v20180712:getEnterpriseChannel", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetEnterpriseChannelArgs {
    /**
     * The name of the Bot resource group in the user subscription.
     */
    resourceGroupName: string;
    /**
     * The name of the Bot resource.
     */
    resourceName: string;
}

/**
 * Enterprise Channel resource definition
 */
export interface GetEnterpriseChannelResult {
    /**
     * Entity Tag
     */
    readonly etag?: string;
    /**
     * Specifies the resource ID.
     */
    readonly id: string;
    /**
     * Required. Gets or sets the Kind of the resource.
     */
    readonly kind?: string;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: string;
    /**
     * Specifies the name of the resource.
     */
    readonly name: string;
    /**
     * The set of properties specific to an Enterprise Channel resource.
     */
    readonly properties: types.outputs.EnterpriseChannelPropertiesResponse;
    /**
     * Gets or sets the SKU of the resource.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies the type of the resource.
     */
    readonly type: string;
}
/**
 * Returns an Enterprise Channel specified by the parameters.
 */
export function getEnterpriseChannelOutput(args: GetEnterpriseChannelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEnterpriseChannelResult> {
    return pulumi.output(args).apply((a: any) => getEnterpriseChannel(a, opts))
}

export interface GetEnterpriseChannelOutputArgs {
    /**
     * The name of the Bot resource group in the user subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Bot resource.
     */
    resourceName: pulumi.Input<string>;
}