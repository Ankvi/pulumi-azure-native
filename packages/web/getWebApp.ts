import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets the details of a web, mobile, or API app.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2016-08-01, 2018-11-01, 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebApp(args: GetWebAppArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebApp", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * A web app, a mobile app backend, or an API app.
 */
export interface GetWebAppResult {
    /**
     * Management information availability state for the app.
     */
    readonly availabilityState: string;
    /**
     * <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
     */
    readonly clientAffinityEnabled?: boolean;
    /**
     * <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
     */
    readonly clientCertEnabled?: boolean;
    /**
     * client certificate authentication comma-separated exclusion paths
     */
    readonly clientCertExclusionPaths?: string;
    /**
     * This composes with ClientCertEnabled setting.
     * - ClientCertEnabled: false means ClientCert is ignored.
     * - ClientCertEnabled: true and ClientCertMode: Required means ClientCert is required.
     * - ClientCertEnabled: true and ClientCertMode: Optional means ClientCert is optional or accepted.
     */
    readonly clientCertMode?: string;
    /**
     * Size of the function container.
     */
    readonly containerSize?: number;
    /**
     * Unique identifier that verifies the custom domains assigned to the app. Customer will add this id to a txt record for verification.
     */
    readonly customDomainVerificationId?: string;
    /**
     * Maximum allowed daily memory-time quota (applicable on dynamic apps only).
     */
    readonly dailyMemoryTimeQuota?: number;
    /**
     * Default hostname of the app. Read-only.
     */
    readonly defaultHostName: string;
    /**
     * <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
     */
    readonly enabled?: boolean;
    /**
     * Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
     * the app is not served on those hostnames.
     */
    readonly enabledHostNames: string[];
    /**
     * Extended Location.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Hostname SSL states are used to manage the SSL bindings for app's hostnames.
     */
    readonly hostNameSslStates?: types.outputs.HostNameSslStateResponse[];
    /**
     * Hostnames associated with the app.
     */
    readonly hostNames: string[];
    /**
     * <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
     *  If <code>true</code>, the app is only accessible via API management process.
     */
    readonly hostNamesDisabled?: boolean;
    /**
     * App Service Environment to use for the app.
     */
    readonly hostingEnvironmentProfile?: types.outputs.HostingEnvironmentProfileResponse;
    /**
     * HttpsOnly: configures a web site to accept only https requests. Issues redirect for
     * http requests
     */
    readonly httpsOnly?: boolean;
    /**
     * Hyper-V sandbox.
     */
    readonly hyperV?: boolean;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Managed service identity.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * Specifies an operation id if this site has a pending operation.
     */
    readonly inProgressOperationId: string;
    /**
     * <code>true</code> if the app is a default container; otherwise, <code>false</code>.
     */
    readonly isDefaultContainer: boolean;
    /**
     * Obsolete: Hyper-V sandbox.
     */
    readonly isXenon?: boolean;
    /**
     * Identity to use for Key Vault Reference authentication.
     */
    readonly keyVaultReferenceIdentity?: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Last time the app was modified, in UTC. Read-only.
     */
    readonly lastModifiedTimeUtc: string;
    /**
     * Resource Location.
     */
    readonly location: string;
    /**
     * Azure Resource Manager ID of the customer's selected Managed Environment on which to host this app. This must be of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.App/managedEnvironments/{managedEnvironmentName}
     */
    readonly managedEnvironmentId?: string;
    /**
     * Maximum number of workers.
     * This only applies to Functions container.
     */
    readonly maxNumberOfWorkers: number;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
     */
    readonly outboundIpAddresses: string;
    /**
     * List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants except dataComponent. Read-only.
     */
    readonly possibleOutboundIpAddresses: string;
    /**
     * Property to allow or block all public traffic. Allowed Values: 'Enabled', 'Disabled' or an empty string.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Site redundancy mode
     */
    readonly redundancyMode?: string;
    /**
     * Name of the repository site.
     */
    readonly repositorySiteName: string;
    /**
     * <code>true</code> if reserved; otherwise, <code>false</code>.
     */
    readonly reserved?: boolean;
    /**
     * Name of the resource group the app belongs to. Read-only.
     */
    readonly resourceGroup: string;
    /**
     * <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
     */
    readonly scmSiteAlsoStopped?: boolean;
    /**
     * Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
     */
    readonly serverFarmId?: string;
    /**
     * Configuration of the app.
     */
    readonly siteConfig?: types.outputs.SiteConfigResponse;
    /**
     * Status of the last deployment slot swap operation.
     */
    readonly slotSwapStatus: types.outputs.SlotSwapStatusResponse;
    /**
     * Current state of the app.
     */
    readonly state: string;
    /**
     * Checks if Customer provided storage account is required
     */
    readonly storageAccountRequired?: boolean;
    /**
     * App suspended till in case memory-time quota is exceeded.
     */
    readonly suspendedTill: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies which deployment slot this app will swap into. Read-only.
     */
    readonly targetSwapSlot: string;
    /**
     * Azure Traffic Manager hostnames associated with the app. Read-only.
     */
    readonly trafficManagerHostNames: string[];
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * State indicating whether the app has exceeded its quota usage. Read-only.
     */
    readonly usageState: string;
    /**
     * Azure Resource Manager ID of the Virtual network and subnet to be joined by Regional VNET Integration.
     * This must be of the form /subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}
     */
    readonly virtualNetworkSubnetId?: string;
    /**
     * To enable accessing content over virtual network
     */
    readonly vnetContentShareEnabled?: boolean;
    /**
     * To enable pulling image over Virtual Network
     */
    readonly vnetImagePullEnabled?: boolean;
    /**
     * Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied.
     */
    readonly vnetRouteAllEnabled?: boolean;
}
/**
 * Description for Gets the details of a web, mobile, or API app.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2016-08-01, 2018-11-01, 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebAppOutput(args: GetWebAppOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebApp", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}