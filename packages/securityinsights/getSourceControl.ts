import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a source control byt its identifier.
 *
 * Uses Azure REST API version 2023-05-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native securityinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSourceControl(args: GetSourceControlArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceControlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getSourceControl", {
        "resourceGroupName": args.resourceGroupName,
        "sourceControlId": args.sourceControlId,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSourceControlArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Source control Id
     */
    sourceControlId: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents a SourceControl in Azure Security Insights.
 */
export interface GetSourceControlResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Array of source control content types.
     */
    readonly contentTypes: string[];
    /**
     * A description of the source control
     */
    readonly description?: string;
    /**
     * The display name of the source control
     */
    readonly displayName: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Information regarding the latest deployment for the source control.
     */
    readonly lastDeploymentInfo?: types.outputs.DeploymentInfoResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The repository type of the source control
     */
    readonly repoType: string;
    /**
     * Repository metadata.
     */
    readonly repository: types.outputs.RepositoryResponse;
    /**
     * Information regarding the resources created in user's repository.
     */
    readonly repositoryResourceInfo?: types.outputs.RepositoryResourceInfoResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The version number associated with the source control
     */
    readonly version?: string;
}
/**
 * Gets a source control byt its identifier.
 *
 * Uses Azure REST API version 2023-05-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native securityinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSourceControlOutput(args: GetSourceControlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceControlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getSourceControl", {
        "resourceGroupName": args.resourceGroupName,
        "sourceControlId": args.sourceControlId,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSourceControlOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Source control Id
     */
    sourceControlId: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}