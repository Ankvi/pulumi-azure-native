import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Get a domain.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native domainregistration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDomain(args: GetDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:domainregistration:getDomain", {
        "domainName": args.domainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDomainArgs {
    /**
     * Name of the domain.
     */
    domainName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Information about a domain.
 */
export interface GetDomainResult {
    readonly authCode?: string;
    /**
     * <code>true</code> if the domain should be automatically renewed; otherwise, <code>false</code>.
     */
    readonly autoRenew?: boolean;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Domain creation timestamp.
     */
    readonly createdTime: string;
    /**
     * Current DNS type
     */
    readonly dnsType?: string;
    /**
     * Azure DNS Zone to use
     */
    readonly dnsZoneId?: string;
    /**
     * Reasons why domain is not renewable.
     */
    readonly domainNotRenewableReasons: string[];
    /**
     * Domain expiration timestamp.
     */
    readonly expirationTime: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource. If the resource is an app, you can refer to https://github.com/Azure/app-service-linux-docs/blob/master/Things_You_Should_Know/kind_property.md#app-service-resource-kind-reference for details supported values for kind.
     */
    readonly kind?: string;
    /**
     * Timestamp when the domain was renewed last time.
     */
    readonly lastRenewedTime: string;
    /**
     * Resource Location.
     */
    readonly location: string;
    /**
     * All hostnames derived from the domain and assigned to Azure resources.
     */
    readonly managedHostNames: types.outputs.HostNameResponse[];
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Name servers.
     */
    readonly nameServers: string[];
    /**
     * <code>true</code> if domain privacy is enabled for this domain; otherwise, <code>false</code>.
     */
    readonly privacy?: boolean;
    /**
     * Domain provisioning state.
     */
    readonly provisioningState: string;
    /**
     * <code>true</code> if Azure can assign this domain to App Service apps; otherwise, <code>false</code>. This value will be <code>true</code> if domain registration status is active and 
     *  it is hosted on name servers Azure has programmatic access to.
     */
    readonly readyForDnsRecordManagement: boolean;
    /**
     * Domain registration status.
     */
    readonly registrationStatus: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Target DNS type (would be used for migration)
     */
    readonly targetDnsType?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Get a domain.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native domainregistration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDomainOutput(args: GetDomainOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDomainResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:domainregistration:getDomain", {
        "domainName": args.domainName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDomainOutputArgs {
    /**
     * Name of the domain.
     */
    domainName: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}