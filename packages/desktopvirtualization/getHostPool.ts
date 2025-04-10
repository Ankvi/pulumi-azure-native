import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a host pool.
 *
 * Uses Azure REST API version 2022-09-09.
 *
 * Other available API versions: 2022-04-01-preview, 2022-10-14-preview, 2023-09-05, 2023-10-04-preview, 2023-11-01-preview, 2024-01-16-preview, 2024-03-06-preview, 2024-04-03, 2024-04-08-preview, 2024-08-08-preview, 2024-11-01-preview.
 */
export function getHostPool(args: GetHostPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetHostPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:desktopvirtualization:getHostPool", {
        "hostPoolName": args.hostPoolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHostPoolArgs {
    /**
     * The name of the host pool within the specified resource group
     */
    hostPoolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents a HostPool definition.
 */
export interface GetHostPoolResult {
    /**
     * The session host configuration for updating agent, monitoring agent, and stack component.
     */
    readonly agentUpdate?: types.outputs.AgentUpdatePropertiesResponse;
    /**
     * List of applicationGroup links.
     */
    readonly applicationGroupReferences: string[];
    /**
     * Is cloud pc resource.
     */
    readonly cloudPcResource: boolean;
    /**
     * Custom rdp property of HostPool.
     */
    readonly customRdpProperty?: string;
    /**
     * Description of HostPool.
     */
    readonly description?: string;
    /**
     * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. 
     */
    readonly etag: string;
    /**
     * Friendly name of HostPool.
     */
    readonly friendlyName?: string;
    /**
     * HostPool type for desktop.
     */
    readonly hostPoolType: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    readonly identity?: types.outputs.ResourceModelWithAllowedPropertySetResponseIdentity;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    readonly kind?: string;
    /**
     * The type of the load balancer.
     */
    readonly loadBalancerType: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
     */
    readonly managedBy?: string;
    /**
     * The max session limit of HostPool.
     */
    readonly maxSessionLimit?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * ObjectId of HostPool. (internal use)
     */
    readonly objectId: string;
    /**
     * PersonalDesktopAssignment type for HostPool.
     */
    readonly personalDesktopAssignmentType?: string;
    readonly plan?: types.outputs.ResourceModelWithAllowedPropertySetResponsePlan;
    /**
     * The type of preferred application group type, default to Desktop Application Group
     */
    readonly preferredAppGroupType: string;
    /**
     * The registration info of HostPool.
     */
    readonly registrationInfo?: types.outputs.RegistrationInfoResponse;
    /**
     * The ring number of HostPool.
     */
    readonly ring?: number;
    readonly sku?: types.outputs.ResourceModelWithAllowedPropertySetResponseSku;
    /**
     * ClientId for the registered Relying Party used to issue WVD SSO certificates.
     */
    readonly ssoClientId?: string;
    /**
     * Path to Azure KeyVault storing the secret used for communication to ADFS.
     */
    readonly ssoClientSecretKeyVaultPath?: string;
    /**
     * The type of single sign on Secret Type.
     */
    readonly ssoSecretType?: string;
    /**
     * URL to customer ADFS server for signing WVD SSO certificates.
     */
    readonly ssoadfsAuthority?: string;
    /**
     * The flag to turn on/off StartVMOnConnect feature.
     */
    readonly startVMOnConnect?: boolean;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
     * Is validation environment.
     */
    readonly validationEnvironment?: boolean;
    /**
     * VM template for sessionhosts configuration within hostpool.
     */
    readonly vmTemplate?: string;
}
/**
 * Get a host pool.
 *
 * Uses Azure REST API version 2022-09-09.
 *
 * Other available API versions: 2022-04-01-preview, 2022-10-14-preview, 2023-09-05, 2023-10-04-preview, 2023-11-01-preview, 2024-01-16-preview, 2024-03-06-preview, 2024-04-03, 2024-04-08-preview, 2024-08-08-preview, 2024-11-01-preview.
 */
export function getHostPoolOutput(args: GetHostPoolOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetHostPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:desktopvirtualization:getHostPool", {
        "hostPoolName": args.hostPoolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHostPoolOutputArgs {
    /**
     * The name of the host pool within the specified resource group
     */
    hostPoolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}