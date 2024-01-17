import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an alert processing rule by name.
 * Azure REST API version: 2021-08-08.
 *
 * Other available API versions: 2023-05-01-preview.
 */
export function getAlertProcessingRuleByName(args: GetAlertProcessingRuleByNameArgs, opts?: pulumi.InvokeOptions): Promise<GetAlertProcessingRuleByNameResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:alertsmanagement:getAlertProcessingRuleByName", {
        "alertProcessingRuleName": args.alertProcessingRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAlertProcessingRuleByNameArgs {
    /**
     * The name of the alert processing rule that needs to be fetched.
     */
    alertProcessingRuleName: string;
    /**
     * Resource group name where the resource is created.
     */
    resourceGroupName: string;
}

/**
 * Alert processing rule object containing target scopes, conditions and scheduling logic.
 */
export interface GetAlertProcessingRuleByNameResult {
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * Alert processing rule properties.
     */
    readonly properties: types.outputs.AlertProcessingRulePropertiesResponse;
    /**
     * Alert processing rule system data.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type
     */
    readonly type: string;
}
/**
 * Get an alert processing rule by name.
 * Azure REST API version: 2021-08-08.
 *
 * Other available API versions: 2023-05-01-preview.
 */
export function getAlertProcessingRuleByNameOutput(args: GetAlertProcessingRuleByNameOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAlertProcessingRuleByNameResult> {
    return pulumi.output(args).apply((a: any) => getAlertProcessingRuleByName(a, opts))
}

export interface GetAlertProcessingRuleByNameOutputArgs {
    /**
     * The name of the alert processing rule that needs to be fetched.
     */
    alertProcessingRuleName: pulumi.Input<string>;
    /**
     * Resource group name where the resource is created.
     */
    resourceGroupName: pulumi.Input<string>;
}