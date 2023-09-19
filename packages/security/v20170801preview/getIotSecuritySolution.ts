import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Details of a specific iot security solution
 */
export function getIotSecuritySolution(args: GetIotSecuritySolutionArgs, opts?: pulumi.InvokeOptions): Promise<GetIotSecuritySolutionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20170801preview:getIotSecuritySolution", {
        "resourceGroupName": args.resourceGroupName,
        "solutionName": args.solutionName,
    }, opts);
}

export interface GetIotSecuritySolutionArgs {
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The solution manager name
     */
    solutionName: string;
}

/**
 * Security Solution
 */
export interface GetIotSecuritySolutionResult {
    /**
     * List of resources that were automatically discovered as relevant to the security solution.
     */
    readonly autoDiscoveredResources: string[];
    /**
     * Disabled data sources. Disabling these data sources compromises the system.
     */
    readonly disabledDataSources?: string[];
    /**
     * Resource display name.
     */
    readonly displayName: string;
    /**
     * List of additional export to workspace data options
     */
    readonly export?: string[];
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * IoT Hub resource IDs
     */
    readonly iotHubs: string[];
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * List of recommendation configuration
     */
    readonly recommendationsConfiguration?: types.outputs.RecommendationConfigurationPropertiesResponse[];
    /**
     * Security solution status
     */
    readonly status?: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Properties of the solution's user defined resources.
     */
    readonly userDefinedResources?: types.outputs.UserDefinedResourcesPropertiesResponse;
    /**
     * Workspace resource ID
     */
    readonly workspace: string;
}
/**
 * Details of a specific iot security solution
 */
export function getIotSecuritySolutionOutput(args: GetIotSecuritySolutionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotSecuritySolutionResult> {
    return pulumi.output(args).apply((a: any) => getIotSecuritySolution(a, opts))
}

export interface GetIotSecuritySolutionOutputArgs {
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The solution manager name
     */
    solutionName: pulumi.Input<string>;
}
