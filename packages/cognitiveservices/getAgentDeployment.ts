import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an Agent Deployment by name.
 *
 * Uses Azure REST API version 2025-10-01-preview.
 *
 * Other available API versions: 2025-12-01, 2026-01-15-preview, 2026-03-01, 2026-03-15-preview, 2026-05-01, 2026-05-15-preview, 2026-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cognitiveservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAgentDeployment(args: GetAgentDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetAgentDeploymentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices:getAgentDeployment", {
        "accountName": args.accountName,
        "appName": args.appName,
        "deploymentName": args.deploymentName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAgentDeploymentArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: string;
    /**
     * The name of the application associated with the Cognitive Services Account
     */
    appName: string;
    /**
     * The name of the deployment associated with the Cognitive Services Account
     */
    deploymentName: string;
    /**
     * The name of Cognitive Services account's project.
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Agent Deployment resource
 */
export interface GetAgentDeploymentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly properties: types.outputs.HostedAgentDeploymentResponse | types.outputs.ManagedAgentDeploymentResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets an Agent Deployment by name.
 *
 * Uses Azure REST API version 2025-10-01-preview.
 *
 * Other available API versions: 2025-12-01, 2026-01-15-preview, 2026-03-01, 2026-03-15-preview, 2026-05-01, 2026-05-15-preview, 2026-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cognitiveservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAgentDeploymentOutput(args: GetAgentDeploymentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAgentDeploymentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cognitiveservices:getAgentDeployment", {
        "accountName": args.accountName,
        "appName": args.appName,
        "deploymentName": args.deploymentName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAgentDeploymentOutputArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the application associated with the Cognitive Services Account
     */
    appName: pulumi.Input<string>;
    /**
     * The name of the deployment associated with the Cognitive Services Account
     */
    deploymentName: pulumi.Input<string>;
    /**
     * The name of Cognitive Services account's project.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}