import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an alert processing rule by name.
 *
 * Uses Azure REST API version 2021-08-08.
 *
 * Other available API versions: 2021-08-08-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native alertsmanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2021-08-08.
 *
 * Other available API versions: 2021-08-08-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native alertsmanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAlertProcessingRuleByNameOutput(args: GetAlertProcessingRuleByNameOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAlertProcessingRuleByNameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:alertsmanagement:getAlertProcessingRuleByName", {
        "alertProcessingRuleName": args.alertProcessingRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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