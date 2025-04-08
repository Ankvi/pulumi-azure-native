import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a AssessmentProject
 *
 * Uses Azure REST API version 2024-01-01-preview.
 *
 * Other available API versions: 2023-03-15, 2023-04-01-preview, 2023-05-01-preview, 2023-09-09-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native migrate [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAssessmentProjectsOperation(args: GetAssessmentProjectsOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetAssessmentProjectsOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getAssessmentProjectsOperation", {
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAssessmentProjectsOperationArgs {
    /**
     * Assessment Project Name
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Assessment project site resource.
 */
export interface GetAssessmentProjectsOperationResult {
    /**
     * Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects.
     */
    readonly assessmentSolutionId?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Time when this project was created. Date-Time represented in ISO-8601 format.
     */
    readonly createdTimestamp: string;
    /**
     * The ARM id of the storage account used for interactions when public access is
     * disabled.
     */
    readonly customerStorageAccountArmId?: string;
    /**
     * The ARM id of service map workspace created by customer.
     */
    readonly customerWorkspaceId?: string;
    /**
     * Location of service map workspace created by customer.
     */
    readonly customerWorkspaceLocation?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * The list of private endpoint connections to the project.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Assessment project status.
     */
    readonly projectStatus?: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState?: string;
    /**
     * This value can be set to 'enabled' to avoid breaking changes on existing
     * customer resources and templates. If set to 'disabled', traffic over public
     * interface is not allowed, and private endpoint connections would be the
     * exclusive access method.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Endpoint at which the collector agent can call agent REST API.
     */
    readonly serviceEndpoint: string;
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
    /**
     * Time when this project was last updated. Date-Time represented in ISO-8601
     * format.
     */
    readonly updatedTimestamp: string;
}
/**
 * Get a AssessmentProject
 *
 * Uses Azure REST API version 2024-01-01-preview.
 *
 * Other available API versions: 2023-03-15, 2023-04-01-preview, 2023-05-01-preview, 2023-09-09-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native migrate [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAssessmentProjectsOperationOutput(args: GetAssessmentProjectsOperationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAssessmentProjectsOperationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getAssessmentProjectsOperation", {
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAssessmentProjectsOperationOutputArgs {
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}