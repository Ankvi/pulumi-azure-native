import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves details of a specific security connector
 * Azure REST API version: 2023-03-01-preview.
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
     * The security connector environment data.
     */
    readonly environmentData?: types.outputs.security.AwsEnvironmentDataResponse | types.outputs.security.AzureDevOpsScopeEnvironmentDataResponse | types.outputs.security.GcpProjectEnvironmentDataResponse | types.outputs.security.GithubScopeEnvironmentDataResponse | types.outputs.security.GitlabScopeEnvironmentDataResponse;
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
    readonly offerings?: (types.outputs.security.CspmMonitorAwsOfferingResponse | types.outputs.security.CspmMonitorAzureDevOpsOfferingResponse | types.outputs.security.CspmMonitorGcpOfferingResponse | types.outputs.security.CspmMonitorGitLabOfferingResponse | types.outputs.security.CspmMonitorGithubOfferingResponse | types.outputs.security.DefenderCspmAwsOfferingResponse | types.outputs.security.DefenderCspmGcpOfferingResponse | types.outputs.security.DefenderFoDatabasesAwsOfferingResponse | types.outputs.security.DefenderForContainersAwsOfferingResponse | types.outputs.security.DefenderForContainersGcpOfferingResponse | types.outputs.security.DefenderForDatabasesGcpOfferingResponse | types.outputs.security.DefenderForDevOpsAzureDevOpsOfferingResponse | types.outputs.security.DefenderForDevOpsGitLabOfferingResponse | types.outputs.security.DefenderForDevOpsGithubOfferingResponse | types.outputs.security.DefenderForServersAwsOfferingResponse | types.outputs.security.DefenderForServersGcpOfferingResponse | types.outputs.security.InformationProtectionAwsOfferingResponse)[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.security.SystemDataResponse;
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
 * Azure REST API version: 2023-03-01-preview.
 */
export function getSecurityConnectorOutput(args: GetSecurityConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityConnectorResult> {
    return pulumi.output(args).apply((a: any) => getSecurityConnector(a, opts))
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
