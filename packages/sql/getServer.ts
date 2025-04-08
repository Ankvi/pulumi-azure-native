import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a server.
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2014-04-01, 2015-05-01-preview, 2019-06-01-preview, 2020-02-02-preview, 2020-08-01-preview, 2020-11-01-preview, 2021-02-01-preview, 2021-05-01-preview, 2021-08-01-preview, 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getServer(args: GetServerArgs, opts?: pulumi.InvokeOptions): Promise<GetServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getServer", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerArgs {
    /**
     * The child resources to include in the response.
     */
    expand?: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * An Azure SQL Database server.
 */
export interface GetServerResult {
    /**
     * Administrator username for the server. Once created it cannot be changed.
     */
    readonly administratorLogin?: string;
    /**
     * The Azure Active Directory administrator of the server. This can only be used at server create time. If used for server update, it will be ignored or it will result in an error. For updates individual APIs will need to be used.
     */
    readonly administrators?: types.outputs.ServerExternalAdministratorResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Status of external governance.
     */
    readonly externalGovernanceStatus: string;
    /**
     * The Client id used for cross tenant CMK scenario
     */
    readonly federatedClientId?: string;
    /**
     * The fully qualified domain name of the server.
     */
    readonly fullyQualifiedDomainName: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The Azure Active Directory identity of the server.
     */
    readonly identity?: types.outputs.ResourceIdentityResponse;
    /**
     * Whether or not to enable IPv6 support for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    readonly isIPv6Enabled?: string;
    /**
     * A CMK URI of the key to use for encryption.
     */
    readonly keyId?: string;
    /**
     * Kind of sql server. This is metadata used for the Azure portal experience.
     */
    readonly kind: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Minimal TLS version. Allowed values: 'None', 1.0', '1.1', '1.2', '1.3'
     */
    readonly minimalTlsVersion?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The resource id of a user assigned identity to be used by default.
     */
    readonly primaryUserAssignedIdentityId?: string;
    /**
     * List of private endpoint connections on a server
     */
    readonly privateEndpointConnections: types.outputs.ServerPrivateEndpointConnectionResponse[];
    /**
     * Whether or not public endpoint access is allowed for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled' or 'SecuredByPerimeter'
     */
    readonly publicNetworkAccess?: string;
    /**
     * Whether or not to restrict outbound network access for this server.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    readonly restrictOutboundNetworkAccess?: string;
    /**
     * The state of the server.
     */
    readonly state: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The version of the server.
     */
    readonly version?: string;
    /**
     * Whether or not existing server has a workspace created and if it allows connection from workspace
     */
    readonly workspaceFeature: string;
}
/**
 * Gets a server.
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2014-04-01, 2015-05-01-preview, 2019-06-01-preview, 2020-02-02-preview, 2020-08-01-preview, 2020-11-01-preview, 2021-02-01-preview, 2021-05-01-preview, 2021-08-01-preview, 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getServerOutput(args: GetServerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getServer", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerOutputArgs {
    /**
     * The child resources to include in the response.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}