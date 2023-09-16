import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The Get Domain Service operation retrieves a json representation of the Domain Service.
 */
export function getDomainService(args: GetDomainServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:aad/v20221201:getDomainService", {
        "domainServiceName": args.domainServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDomainServiceArgs {
    /**
     * The name of the domain service.
     */
    domainServiceName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Domain service.
 */
export interface GetDomainServiceResult {
    /**
     * Configuration diagnostics data containing latest execution from client.
     */
    readonly configDiagnostics?: types.outputs.aad.v20221201.ConfigDiagnosticsResponse;
    /**
     * Deployment Id
     */
    readonly deploymentId: string;
    /**
     * Domain Configuration Type
     */
    readonly domainConfigurationType?: string;
    /**
     * The name of the Azure domain that the user would like to deploy Domain Services to.
     */
    readonly domainName?: string;
    /**
     * DomainSecurity Settings
     */
    readonly domainSecuritySettings?: types.outputs.aad.v20221201.DomainSecuritySettingsResponse;
    /**
     * Resource etag
     */
    readonly etag?: string;
    /**
     * Enabled or Disabled flag to turn on Group-based filtered sync
     */
    readonly filteredSync?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Secure LDAP Settings
     */
    readonly ldapsSettings?: types.outputs.aad.v20221201.LdapsSettingsResponse;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Migration Properties
     */
    readonly migrationProperties: types.outputs.aad.v20221201.MigrationPropertiesResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Notification Settings
     */
    readonly notificationSettings?: types.outputs.aad.v20221201.NotificationSettingsResponse;
    /**
     * the current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * List of ReplicaSets
     */
    readonly replicaSets?: types.outputs.aad.v20221201.ReplicaSetResponse[];
    /**
     * Resource Forest Settings
     */
    readonly resourceForestSettings?: types.outputs.aad.v20221201.ResourceForestSettingsResponse;
    /**
     * Sku Type
     */
    readonly sku?: string;
    /**
     * The unique sync application id of the Azure AD Domain Services deployment.
     */
    readonly syncApplicationId: string;
    /**
     * SyncOwner ReplicaSet Id
     */
    readonly syncOwner: string;
    /**
     * All or CloudOnly, All users in AAD are synced to AAD DS domain or only users actively syncing in the cloud
     */
    readonly syncScope?: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.aad.v20221201.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure Active Directory Tenant Id
     */
    readonly tenantId: string;
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Data Model Version
     */
    readonly version: number;
}
/**
 * The Get Domain Service operation retrieves a json representation of the Domain Service.
 */
export function getDomainServiceOutput(args: GetDomainServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDomainServiceResult> {
    return pulumi.output(args).apply((a: any) => getDomainService(a, opts))
}

export interface GetDomainServiceOutputArgs {
    /**
     * The name of the domain service.
     */
    domainServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
