import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a Cognitive Services account specified by the parameters.
 */
export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices/v20170418:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Cognitive Services Account is an Azure resource representing the provisioned account, its type, location and SKU.
 */
export interface GetAccountResult {
    /**
     * Entity Tag
     */
    readonly etag: string;
    /**
     * The id of the created account
     */
    readonly id: string;
    /**
     * The identity of Cognitive Services account.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The Kind of the resource.
     */
    readonly kind?: string;
    /**
     * The location of the resource
     */
    readonly location?: string;
    /**
     * The name of the created account
     */
    readonly name: string;
    /**
     * Properties of Cognitive Services account.
     */
    readonly properties: types.outputs.CognitiveServicesAccountPropertiesResponse;
    /**
     * The SKU of Cognitive Services account.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Returns a Cognitive Services account specified by the parameters.
 */
export function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountResult> {
    return pulumi.output(args).apply((a: any) => getAccount(a, opts))
}

export interface GetAccountOutputArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
