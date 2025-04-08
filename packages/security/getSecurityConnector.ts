import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves details of a specific security connector
 *
 * Uses Azure REST API version 2024-08-01-preview.
 *
 * Other available API versions: 2021-07-01-preview, 2021-12-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2023-03-01-preview, 2023-10-01-preview, 2024-03-01-preview, 2024-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native security [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSecurityConnector(args: GetSecurityConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getSecurityConnector", {
        "resourceGroupName": args.resourceGroupName,
        "securityConnectorName": args.securityConnectorName,
    }, opts);
}

export interface GetSecurityConnectorArgs {
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The security connector name.
     */
    securityConnectorName: string;
}

/**
 * The security connector resource.
 */
export interface GetSecurityConnectorResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The security connector environment data.
     */
    readonly environmentData?: types.outputs.AwsEnvironmentDataResponse | types.outputs.AzureDevOpsScopeEnvironmentDataResponse | types.outputs.DockerHubEnvironmentDataResponse | types.outputs.GcpProjectEnvironmentDataResponse | types.outputs.GithubScopeEnvironmentDataResponse | types.outputs.GitlabScopeEnvironmentDataResponse | types.outputs.JFrogEnvironmentDataResponse;
    /**
     * The multi cloud resource's cloud name.
     */
    readonly environmentName?: string;
    /**
     * Entity tag is used for comparing two or more entities from the same requested resource.
     */
    readonly etag?: string;
    /**
     * The multi cloud resource identifier (account id in case of AWS connector, project number in case of GCP connector).
     */
    readonly hierarchyIdentifier?: string;
    /**
     * The date on which the trial period will end, if applicable. Trial period exists for 30 days after upgrading to payed offerings.
     */
    readonly hierarchyIdentifierTrialEndDate: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Kind of the resource
     */
    readonly kind?: string;
    /**
     * Location where the resource is stored
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * A collection of offerings for the security connector.
     */
    readonly offerings?: (types.outputs.CspmMonitorAwsOfferingResponse | types.outputs.CspmMonitorAzureDevOpsOfferingResponse | types.outputs.CspmMonitorDockerHubOfferingResponse | types.outputs.CspmMonitorGcpOfferingResponse | types.outputs.CspmMonitorGitLabOfferingResponse | types.outputs.CspmMonitorGithubOfferingResponse | types.outputs.CspmMonitorJFrogOfferingResponse | types.outputs.DefenderCspmAwsOfferingResponse | types.outputs.DefenderCspmDockerHubOfferingResponse | types.outputs.DefenderCspmGcpOfferingResponse | types.outputs.DefenderCspmJFrogOfferingResponse | types.outputs.DefenderFoDatabasesAwsOfferingResponse | types.outputs.DefenderForContainersAwsOfferingResponse | types.outputs.DefenderForContainersDockerHubOfferingResponse | types.outputs.DefenderForContainersGcpOfferingResponse | types.outputs.DefenderForContainersJFrogOfferingResponse | types.outputs.DefenderForDatabasesGcpOfferingResponse | types.outputs.DefenderForServersAwsOfferingResponse | types.outputs.DefenderForServersGcpOfferingResponse)[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * A list of key value pairs that describe the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Retrieves details of a specific security connector
 *
 * Uses Azure REST API version 2024-08-01-preview.
 *
 * Other available API versions: 2021-07-01-preview, 2021-12-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2023-03-01-preview, 2023-10-01-preview, 2024-03-01-preview, 2024-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native security [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSecurityConnectorOutput(args: GetSecurityConnectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSecurityConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getSecurityConnector", {
        "resourceGroupName": args.resourceGroupName,
        "securityConnectorName": args.securityConnectorName,
    }, opts);
}

export interface GetSecurityConnectorOutputArgs {
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The security connector name.
     */
    securityConnectorName: pulumi.Input<string>;
}