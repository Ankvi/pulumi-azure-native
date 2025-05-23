import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a published version of a blueprint definition.
 *
 * Uses Azure REST API version 2018-11-01-preview.
 */
export function getPublishedBlueprint(args: GetPublishedBlueprintArgs, opts?: pulumi.InvokeOptions): Promise<GetPublishedBlueprintResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:blueprint:getPublishedBlueprint", {
        "blueprintName": args.blueprintName,
        "resourceScope": args.resourceScope,
        "versionId": args.versionId,
    }, opts);
}

export interface GetPublishedBlueprintArgs {
    /**
     * Name of the blueprint definition.
     */
    blueprintName: string;
    /**
     * The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}').
     */
    resourceScope: string;
    /**
     * Version of the published blueprint definition.
     */
    versionId: string;
}

/**
 * Represents a published blueprint.
 */
export interface GetPublishedBlueprintResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Name of the published blueprint definition.
     */
    readonly blueprintName?: string;
    /**
     * Version-specific change notes.
     */
    readonly changeNotes?: string;
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
     * Name of this resource.
     */
    readonly name: string;
    /**
     * Parameters required by this blueprint definition.
     */
    readonly parameters?: {[key: string]: types.outputs.ParameterDefinitionResponse};
    /**
     * Resource group placeholders defined by this blueprint definition.
     */
    readonly resourceGroups?: {[key: string]: types.outputs.ResourceGroupDefinitionResponse};
    /**
     * Status of the blueprint. This field is readonly.
     */
    readonly status: types.outputs.BlueprintStatusResponse;
    /**
     * The scope where this blueprint definition can be assigned.
     */
    readonly targetScope?: string;
    /**
     * Type of this resource.
     */
    readonly type: string;
}
/**
 * Get a published version of a blueprint definition.
 *
 * Uses Azure REST API version 2018-11-01-preview.
 */
export function getPublishedBlueprintOutput(args: GetPublishedBlueprintOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPublishedBlueprintResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:blueprint:getPublishedBlueprint", {
        "blueprintName": args.blueprintName,
        "resourceScope": args.resourceScope,
        "versionId": args.versionId,
    }, opts);
}

export interface GetPublishedBlueprintOutputArgs {
    /**
     * Name of the blueprint definition.
     */
    blueprintName: pulumi.Input<string>;
    /**
     * The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}').
     */
    resourceScope: pulumi.Input<string>;
    /**
     * Version of the published blueprint definition.
     */
    versionId: pulumi.Input<string>;
}