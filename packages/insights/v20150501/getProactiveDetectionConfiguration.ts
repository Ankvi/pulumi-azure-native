import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the ProactiveDetection configuration for this configuration id.
 */
export function getProactiveDetectionConfiguration(args: GetProactiveDetectionConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetProactiveDetectionConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights/v20150501:getProactiveDetectionConfiguration", {
        "configurationId": args.configurationId,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetProactiveDetectionConfigurationArgs {
    /**
     * The ProactiveDetection configuration ID. This is unique within a Application Insights component.
     */
    configurationId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: string;
}

/**
 * Properties that define a ProactiveDetection configuration.
 */
export interface GetProactiveDetectionConfigurationResult {
    /**
     * Custom email addresses for this rule notifications
     */
    readonly customEmails?: string[];
    /**
     * A flag that indicates whether this rule is enabled by the user
     */
    readonly enabled?: boolean;
    /**
     * The last time this rule was updated
     */
    readonly lastUpdatedTime?: string;
    /**
     * The rule name
     */
    readonly name?: string;
    /**
     * Static definitions of the ProactiveDetection configuration rule (same values for all components).
     */
    readonly ruleDefinitions?: types.outputs.insights.v20150501.ApplicationInsightsComponentProactiveDetectionConfigurationResponseRuleDefinitions;
    /**
     * A flag that indicated whether notifications on this rule should be sent to subscription owners
     */
    readonly sendEmailsToSubscriptionOwners?: boolean;
}
/**
 * Get the ProactiveDetection configuration for this configuration id.
 */
export function getProactiveDetectionConfigurationOutput(args: GetProactiveDetectionConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProactiveDetectionConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getProactiveDetectionConfiguration(a, opts))
}

export interface GetProactiveDetectionConfigurationOutputArgs {
    /**
     * The ProactiveDetection configuration ID. This is unique within a Application Insights component.
     */
    configurationId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: pulumi.Input<string>;
}
