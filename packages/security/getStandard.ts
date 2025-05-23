import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific security standard for the requested scope
 *
 * Uses Azure REST API version 2021-08-01-preview.
 */
export function getStandard(args: GetStandardArgs, opts?: pulumi.InvokeOptions): Promise<GetStandardResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getStandard", {
        "resourceGroupName": args.resourceGroupName,
        "standardId": args.standardId,
    }, opts);
}

export interface GetStandardArgs {
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The Security Standard key - unique key for the standard type
     */
    standardId: string;
}

/**
 * Security Standard on a resource
 */
export interface GetStandardResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * category of the standard provided
     */
    readonly category?: string;
    /**
     * List of component objects containing component unique keys (such as assessment keys) to apply to standard scope.  Currently only supports assessment keys.
     */
    readonly components?: types.outputs.StandardComponentPropertiesResponse[];
    /**
     * description of the standard
     */
    readonly description?: string;
    /**
     * display name of the standard, equivalent to the standardId
     */
    readonly displayName?: string;
    /**
     * Entity tag is used for comparing two or more entities from the same requested resource.
     */
    readonly etag?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Kind of the resource
     */
    readonly kind?: string;
    /**
     * Location where the resource is stored
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * standard type (Custom or BuiltIn only currently)
     */
    readonly standardType: string;
    /**
     * List of all standard supported clouds.
     */
    readonly supportedClouds?: string[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * A list of key value pairs that describe the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Get a specific security standard for the requested scope
 *
 * Uses Azure REST API version 2021-08-01-preview.
 */
export function getStandardOutput(args: GetStandardOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStandardResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getStandard", {
        "resourceGroupName": args.resourceGroupName,
        "standardId": args.standardId,
    }, opts);
}

export interface GetStandardOutputArgs {
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Security Standard key - unique key for the standard type
     */
    standardId: pulumi.Input<string>;
}