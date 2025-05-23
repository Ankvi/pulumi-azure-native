import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Template Spec with a given name.
 *
 * Uses Azure REST API version 2022-02-01.
 *
 * Other available API versions: 2021-03-01-preview, 2021-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native resources [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTemplateSpec(args: GetTemplateSpecArgs, opts?: pulumi.InvokeOptions): Promise<GetTemplateSpecResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources:getTemplateSpec", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "templateSpecName": args.templateSpecName,
    }, opts);
}

export interface GetTemplateSpecArgs {
    /**
     * Allows for expansion of additional Template Spec details in the response. Optional.
     */
    expand?: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the Template Spec.
     */
    templateSpecName: string;
}

/**
 * Template Spec object.
 */
export interface GetTemplateSpecResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Template Spec description.
     */
    readonly description?: string;
    /**
     * Template Spec display name.
     */
    readonly displayName?: string;
    /**
     * String Id used to locate any resource on Azure.
     */
    readonly id: string;
    /**
     * The location of the Template Spec. It cannot be changed after Template Spec creation. It must be one of the supported Azure locations.
     */
    readonly location: string;
    /**
     * The Template Spec metadata. Metadata is an open-ended object and is typically a collection of key-value pairs.
     */
    readonly metadata?: any;
    /**
     * Name of this resource.
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Type of this resource.
     */
    readonly type: string;
    /**
     * High-level information about the versions within this Template Spec. The keys are the version names. Only populated if the $expand query parameter is set to 'versions'.
     */
    readonly versions: {[key: string]: types.outputs.TemplateSpecVersionInfoResponse};
}
/**
 * Gets a Template Spec with a given name.
 *
 * Uses Azure REST API version 2022-02-01.
 *
 * Other available API versions: 2021-03-01-preview, 2021-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native resources [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTemplateSpecOutput(args: GetTemplateSpecOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTemplateSpecResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:resources:getTemplateSpec", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "templateSpecName": args.templateSpecName,
    }, opts);
}

export interface GetTemplateSpecOutputArgs {
    /**
     * Allows for expansion of additional Template Spec details in the response. Optional.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Template Spec.
     */
    templateSpecName: pulumi.Input<string>;
}