import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * User this method to get details of a specific IoT Security solution based on solution name
 * Azure REST API version: 2019-08-01.
 *
 * Other available API versions: 2017-08-01-preview.
 */
export function getIotSecuritySolution(args: GetIotSecuritySolutionArgs, opts?: pulumi.InvokeOptions): Promise<GetIotSecuritySolutionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getIotSecuritySolution", {
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
     * The name of the IoT Security solution.
     */
    solutionName: string;
}

/**
 * IoT Security solution configuration and resource information.
 */
export interface GetIotSecuritySolutionResult {
    /**
     * List of additional workspaces
     */
    readonly additionalWorkspaces?: types.outputs.AdditionalWorkspacesPropertiesResponse[];
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
     * List of additional options for exporting to workspace data.
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
     * List of the configuration status for each recommendation type.
     */
    readonly recommendationsConfiguration?: types.outputs.RecommendationConfigurationPropertiesResponse[];
    /**
     * Status of the IoT Security solution.
     */
    readonly status?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Unmasked IP address logging status
     */
    readonly unmaskedIpLoggingStatus?: string;
    /**
     * Properties of the IoT Security solution's user defined resources.
     */
    readonly userDefinedResources?: types.outputs.UserDefinedResourcesPropertiesResponse;
    /**
     * Workspace resource ID
     */
    readonly workspace?: string;
}
/**
 * User this method to get details of a specific IoT Security solution based on solution name
 * Azure REST API version: 2019-08-01.
 *
 * Other available API versions: 2017-08-01-preview.
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
     * The name of the IoT Security solution.
     */
    solutionName: pulumi.Input<string>;
}
