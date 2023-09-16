import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the ProactiveDetection configuration for this configuration id.
 * Azure REST API version: 2018-05-01-preview.
 */
export function getProactiveDetectionConfiguration(args: GetProactiveDetectionConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetProactiveDetectionConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights:getProactiveDetectionConfiguration", {
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
 * A ProactiveDetection configuration definition.
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
     * Azure resource Id
     */
    readonly id: string;
    /**
     * The last time this rule was updated
     */
    readonly lastUpdatedTime: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * The rule name
     */
    readonly name: string;
    /**
     * Static definitions of the ProactiveDetection configuration rule (same values for all components).
     */
    readonly ruleDefinitions?: types.outputs.insights.ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesResponseRuleDefinitions;
    /**
     * A flag that indicated whether notifications on this rule should be sent to subscription owners
     */
    readonly sendEmailsToSubscriptionOwners?: boolean;
    /**
     * Azure resource type
     */
    readonly type: string;
}
/**
 * Get the ProactiveDetection configuration for this configuration id.
 * Azure REST API version: 2018-05-01-preview.
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
