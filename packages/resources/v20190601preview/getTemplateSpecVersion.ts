import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Template Spec version from a specific Template Spec.
 */
export function getTemplateSpecVersion(args: GetTemplateSpecVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetTemplateSpecVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources/v20190601preview:getTemplateSpecVersion", {
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
     * An array of Template Spec artifacts.
     */
    readonly artifacts?: types.outputs.TemplateSpecTemplateArtifactResponse[];
    /**
     * Template Spec version description.
     */
    readonly description?: string;
    /**
     * String Id used to locate any resource on Azure.
     */
    readonly id: string;
    /**
     * The location of the Template Spec Version. It must match the location of the parent Template Spec.
     */
    readonly location: string;
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
     * The Azure Resource Manager template content.
     */
    readonly template?: any;
    /**
     * Type of this resource.
     */
    readonly type: string;
}
/**
 * Gets a Template Spec version from a specific Template Spec.
 */
export function getTemplateSpecVersionOutput(args: GetTemplateSpecVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTemplateSpecVersionResult> {
    return pulumi.output(args).apply((a: any) => getTemplateSpecVersion(a, opts))
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