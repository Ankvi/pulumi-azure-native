import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Template Spec version from a specific Template Spec.
 *
 * Uses Azure REST API version 2022-02-01.
 *
 * Other available API versions: 2021-03-01-preview, 2021-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native resources [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTemplateSpecVersion(args: GetTemplateSpecVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetTemplateSpecVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources:getTemplateSpecVersion", {
        "resourceGroupName": args.resourceGroupName,
        "templateSpecName": args.templateSpecName,
        "templateSpecVersion": args.templateSpecVersion,
    }, opts);
}

export interface GetTemplateSpecVersionArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the Template Spec.
     */
    templateSpecName: string;
    /**
     * The version of the Template Spec.
     */
    templateSpecVersion: string;
}

/**
 * Template Spec Version object.
 */
export interface GetTemplateSpecVersionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Template Spec version description.
     */
    readonly description?: string;
    /**
     * String Id used to locate any resource on Azure.
     */
    readonly id: string;
    /**
     * An array of linked template artifacts.
     */
    readonly linkedTemplates?: types.outputs.LinkedTemplateArtifactResponse[];
    /**
     * The location of the Template Spec Version. It must match the location of the parent Template Spec.
     */
    readonly location: string;
    /**
     * The main Azure Resource Manager template content.
     */
    readonly mainTemplate?: any;
    /**
     * The version metadata. Metadata is an open-ended object and is typically a collection of key-value pairs.
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
     * The Azure Resource Manager template UI definition content.
     */
    readonly uiFormDefinition?: any;
}
/**
 * Gets a Template Spec version from a specific Template Spec.
 *
 * Uses Azure REST API version 2022-02-01.
 *
 * Other available API versions: 2021-03-01-preview, 2021-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native resources [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTemplateSpecVersionOutput(args: GetTemplateSpecVersionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTemplateSpecVersionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:resources:getTemplateSpecVersion", {
        "resourceGroupName": args.resourceGroupName,
        "templateSpecName": args.templateSpecName,
        "templateSpecVersion": args.templateSpecVersion,
    }, opts);
}

export interface GetTemplateSpecVersionOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Template Spec.
     */
    templateSpecName: pulumi.Input<string>;
    /**
     * The version of the Template Spec.
     */
    templateSpecVersion: pulumi.Input<string>;
}