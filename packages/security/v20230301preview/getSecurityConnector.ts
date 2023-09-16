import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Retrieves details of a specific security connector
 */
export function getSecurityConnector(args: GetSecurityConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20230301preview:getSecurityConnector", {
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
    readonly environmentData?: types.outputs.security.v20230301preview.AwsEnvironmentDataResponse | types.outputs.security.v20230301preview.AzureDevOpsScopeEnvironmentDataResponse | types.outputs.security.v20230301preview.GcpProjectEnvironmentDataResponse | types.outputs.security.v20230301preview.GithubScopeEnvironmentDataResponse | types.outputs.security.v20230301preview.GitlabScopeEnvironmentDataResponse;
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
    readonly offerings?: (types.outputs.security.v20230301preview.CspmMonitorAwsOfferingResponse | types.outputs.security.v20230301preview.CspmMonitorAzureDevOpsOfferingResponse | types.outputs.security.v20230301preview.CspmMonitorGcpOfferingResponse | types.outputs.security.v20230301preview.CspmMonitorGitLabOfferingResponse | types.outputs.security.v20230301preview.CspmMonitorGithubOfferingResponse | types.outputs.security.v20230301preview.DefenderCspmAwsOfferingResponse | types.outputs.security.v20230301preview.DefenderCspmGcpOfferingResponse | types.outputs.security.v20230301preview.DefenderFoDatabasesAwsOfferingResponse | types.outputs.security.v20230301preview.DefenderForContainersAwsOfferingResponse | types.outputs.security.v20230301preview.DefenderForContainersGcpOfferingResponse | types.outputs.security.v20230301preview.DefenderForDatabasesGcpOfferingResponse | types.outputs.security.v20230301preview.DefenderForDevOpsAzureDevOpsOfferingResponse | types.outputs.security.v20230301preview.DefenderForDevOpsGitLabOfferingResponse | types.outputs.security.v20230301preview.DefenderForDevOpsGithubOfferingResponse | types.outputs.security.v20230301preview.DefenderForServersAwsOfferingResponse | types.outputs.security.v20230301preview.DefenderForServersGcpOfferingResponse | types.outputs.security.v20230301preview.InformationProtectionAwsOfferingResponse)[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.security.v20230301preview.SystemDataResponse;
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
