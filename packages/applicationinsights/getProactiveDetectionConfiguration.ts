import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the ProactiveDetection configuration for this configuration id.
 *
 * Uses Azure REST API version 2018-05-01-preview.
 *
 * Other available API versions: 2015-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native applicationinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProactiveDetectionConfiguration(args: GetProactiveDetectionConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetProactiveDetectionConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:applicationinsights:getProactiveDetectionConfiguration", {
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
    readonly location?: string;
    /**
     * Azure resource name
     */
    readonly name?: string;
    /**
     * Properties that define a ProactiveDetection configuration.
     */
    readonly properties: types.outputs.ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesResponse;
    /**
     * Azure resource type
     */
    readonly type: string;
}
/**
 * Get the ProactiveDetection configuration for this configuration id.
 *
 * Uses Azure REST API version 2018-05-01-preview.
 *
 * Other available API versions: 2015-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native applicationinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProactiveDetectionConfigurationOutput(args: GetProactiveDetectionConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProactiveDetectionConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:applicationinsights:getProactiveDetectionConfiguration", {
        "configurationId": args.configurationId,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
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