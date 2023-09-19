import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Maps Account.
 */
export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:maps/v20180501:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountArgs {
    /**
     * The name of the Maps Account.
     */
    accountName: string;
    /**
     * The name of the Azure Resource Group.
     */
    resourceGroupName: string;
}

/**
 * An Azure resource which represents access to a suite of Maps REST APIs.
 */
export interface GetAccountResult {
    /**
     * The fully qualified Maps Account resource identifier.
     */
    readonly id: string;
    /**
     * The location of the resource.
     */
    readonly location: string;
    /**
     * The name of the Maps Account, which is unique within a Resource Group.
     */
    readonly name: string;
    /**
     * The map account properties.
     */
    readonly properties: types.outputs.MapsAccountPropertiesResponse;
    /**
     * The SKU of this account.
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Gets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
     */
    readonly tags: {[key: string]: string};
    /**
     * Azure resource type.
     */
    readonly type: string;
}
/**
 * Get a Maps Account.
 */
export function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountResult> {
    return pulumi.output(args).apply((a: any) => getAccount(a, opts))
}

export interface GetAccountOutputArgs {
    /**
     * The name of the Maps Account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Azure Resource Group.
     */
    resourceGroupName: pulumi.Input<string>;
}
