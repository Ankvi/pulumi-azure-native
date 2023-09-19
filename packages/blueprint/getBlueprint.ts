import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a blueprint definition.
 * Azure REST API version: 2018-11-01-preview.
 */
export function getBlueprint(args: GetBlueprintArgs, opts?: pulumi.InvokeOptions): Promise<GetBlueprintResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:blueprint:getBlueprint", {
        "blueprintName": args.blueprintName,
        "resourceScope": args.resourceScope,
    }, opts);
}

export interface GetBlueprintArgs {
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
 * Represents a Blueprint definition.
 */
export interface GetBlueprintResult {
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
     * Layout view of the blueprint definition for UI reference.
     */
    readonly layout: any;
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
    readonly targetScope: string;
    /**
     * Type of this resource.
     */
    readonly type: string;
    /**
     * Published versions of this blueprint definition.
     */
    readonly versions?: any;
}
/**
 * Get a blueprint definition.
 * Azure REST API version: 2018-11-01-preview.
 */
export function getBlueprintOutput(args: GetBlueprintOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBlueprintResult> {
    return pulumi.output(args).apply((a: any) => getBlueprint(a, opts))
}

export interface GetBlueprintOutputArgs {
    /**
     * Name of the blueprint definition.
     */
    blueprintName: pulumi.Input<string>;
    /**
     * The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}').
     */
    resourceScope: pulumi.Input<string>;
}
