import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents an ARM resource for /subscriptions/xxx/resourceGroups/xxx/providers/Microsoft.SecurityDevOps/gitHubConnectors.
 */
export function getGitHubConnector(args: GetGitHubConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetGitHubConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securitydevops/v20220901preview:getGitHubConnector", {
        "gitHubConnectorName": args.gitHubConnectorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGitHubConnectorArgs {
    /**
     * Name of the GitHub Connector.
     */
    gitHubConnectorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents an ARM resource for /subscriptions/xxx/resourceGroups/xxx/providers/Microsoft.SecurityDevOps/gitHubConnectors.
 */
export interface GetGitHubConnectorResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of the ARM resource for /subscriptions/xxx/resourceGroups/xxx/providers/Microsoft.SecurityDevOps/gitHubConnectors.
     */
    readonly properties: types.outputs.GitHubConnectorPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Represents an ARM resource for /subscriptions/xxx/resourceGroups/xxx/providers/Microsoft.SecurityDevOps/gitHubConnectors.
 */
export function getGitHubConnectorOutput(args: GetGitHubConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGitHubConnectorResult> {
    return pulumi.output(args).apply((a: any) => getGitHubConnector(a, opts))
}

export interface GetGitHubConnectorOutputArgs {
    /**
     * Name of the GitHub Connector.
     */
    gitHubConnectorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}