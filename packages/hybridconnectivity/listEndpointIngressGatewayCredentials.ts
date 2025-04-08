import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the ingress gateway endpoint credentials
 *
 * Uses Azure REST API version 2024-12-01.
 *
 * Other available API versions: 2023-03-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridconnectivity [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listEndpointIngressGatewayCredentials(args: ListEndpointIngressGatewayCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListEndpointIngressGatewayCredentialsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridconnectivity:listEndpointIngressGatewayCredentials", {
        "endpointName": args.endpointName,
        "expiresin": args.expiresin,
        "resourceUri": args.resourceUri,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListEndpointIngressGatewayCredentialsArgs {
    /**
     * The endpoint name.
     */
    endpointName: string;
    /**
     * The is how long the endpoint access token is valid (in seconds).
     */
    expiresin?: number;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
    /**
     * The name of the service. If not provided, the request will by pass the generation of service configuration token.
     */
    serviceName?: string | types.enums.ServiceName;
}

/**
 * The ingress gateway access credentials
 */
export interface ListEndpointIngressGatewayCredentialsResult {
    /**
     * Access key for hybrid connection.
     */
    readonly accessKey: string;
    /**
     * The expiration of access key in unix time.
     */
    readonly expiresOn?: number;
    /**
     * The ingress hostname.
     */
    readonly hostname: string;
    /**
     * Azure Relay hybrid connection name for the resource.
     */
    readonly hybridConnectionName: string;
    /**
     * The namespace name.
     */
    readonly namespaceName: string;
    /**
     * The suffix domain name of relay namespace.
     */
    readonly namespaceNameSuffix: string;
    /**
     * The arc ingress gateway server app id.
     */
    readonly serverId: string;
    /**
     * The token to access the enabled service.
     */
    readonly serviceConfigurationToken?: string;
    /**
     * The target resource home tenant id.
     */
    readonly tenantId: string;
}
/**
 * Gets the ingress gateway endpoint credentials
 *
 * Uses Azure REST API version 2024-12-01.
 *
 * Other available API versions: 2023-03-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridconnectivity [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listEndpointIngressGatewayCredentialsOutput(args: ListEndpointIngressGatewayCredentialsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListEndpointIngressGatewayCredentialsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridconnectivity:listEndpointIngressGatewayCredentials", {
        "endpointName": args.endpointName,
        "expiresin": args.expiresin,
        "resourceUri": args.resourceUri,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListEndpointIngressGatewayCredentialsOutputArgs {
    /**
     * The endpoint name.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The is how long the endpoint access token is valid (in seconds).
     */
    expiresin?: pulumi.Input<number>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * The name of the service. If not provided, the request will by pass the generation of service configuration token.
     */
    serviceName?: pulumi.Input<string | types.enums.ServiceName>;
}