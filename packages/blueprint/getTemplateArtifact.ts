import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a blueprint artifact.
 *
 * Uses Azure REST API version 2018-11-01-preview.
 */
export function getTemplateArtifact(args: GetTemplateArtifactArgs, opts?: pulumi.InvokeOptions): Promise<GetTemplateArtifactResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:blueprint:getTemplateArtifact", {
        "artifactName": args.artifactName,
        "blueprintName": args.blueprintName,
        "resourceScope": args.resourceScope,
    }, opts);
}

export interface GetTemplateArtifactArgs {
    /**
     * Name of the blueprint artifact.
     */
    artifactName: string;
    /**
     * Name of the blueprint definition.
     */
    blueprintName: string;
    /**
     * The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}').
     */
    resourceScope: string;
}

/**
 * Blueprint artifact that deploys a Resource Manager template.
 */
export interface GetTemplateArtifactResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Artifacts which need to be deployed before the specified artifact.
     */
    readonly dependsOn?: string[];
    /**
     * Multi-line explain this resource.
     */
    readonly description?: string;
    /**
     * One-liner string explain this resource.
     */
    readonly displayName?: string;
    /**
     * String Id used to locate any resource on Azure.
     */
    readonly id: string;
    /**
     * Specifies the kind of blueprint artifact.
     * Expected value is 'template'.
     */
    readonly kind: "template";
    /**
     * Name of this resource.
     */
    readonly name: string;
    /**
     * Resource Manager template blueprint artifact parameter values.
     */
    readonly parameters: {[key: string]: types.outputs.ParameterValueResponse};
    /**
     * If applicable, the name of the resource group placeholder to which the Resource Manager template blueprint artifact will be deployed.
     */
    readonly resourceGroup?: string;
    /**
     * The Resource Manager template blueprint artifact body.
     */
    readonly template: any;
    /**
     * Type of this resource.
     */
    readonly type: string;
}
/**
 * Get a blueprint artifact.
 *
 * Uses Azure REST API version 2018-11-01-preview.
 */
export function getTemplateArtifactOutput(args: GetTemplateArtifactOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTemplateArtifactResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:blueprint:getTemplateArtifact", {
        "artifactName": args.artifactName,
        "blueprintName": args.blueprintName,
        "resourceScope": args.resourceScope,
    }, opts);
}

export interface GetTemplateArtifactOutputArgs {
    /**
     * Name of the blueprint artifact.
     */
    artifactName: pulumi.Input<string>;
    /**
     * Name of the blueprint definition.
     */
    blueprintName: pulumi.Input<string>;
    /**
     * The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}').
     */
    resourceScope: pulumi.Input<string>;
}