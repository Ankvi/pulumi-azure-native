import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Solution Template Resource
 *
 * Uses Azure REST API version 2025-06-01.
 */
export function getSolutionTemplate(args: GetSolutionTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetSolutionTemplateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edge:getSolutionTemplate", {
        "resourceGroupName": args.resourceGroupName,
        "solutionTemplateName": args.solutionTemplateName,
    }, opts);
}

export interface GetSolutionTemplateArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the SolutionTemplate
     */
    solutionTemplateName: string;
}

/**
 * Solution Template Resource. Contains capabilities and operations for creating versions.
 */
export interface GetSolutionTemplateResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
     */
    readonly eTag: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.SolutionTemplatePropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
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
 * Get a Solution Template Resource
 *
 * Uses Azure REST API version 2025-06-01.
 */
export function getSolutionTemplateOutput(args: GetSolutionTemplateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSolutionTemplateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:edge:getSolutionTemplate", {
        "resourceGroupName": args.resourceGroupName,
        "solutionTemplateName": args.solutionTemplateName,
    }, opts);
}

export interface GetSolutionTemplateOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SolutionTemplate
     */
    solutionTemplateName: pulumi.Input<string>;
}