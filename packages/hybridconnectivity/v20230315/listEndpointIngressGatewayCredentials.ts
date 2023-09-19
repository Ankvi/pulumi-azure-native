import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the ingress gateway endpoint credentials
 */
export function listEndpointIngressGatewayCredentials(args: ListEndpointIngressGatewayCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListEndpointIngressGatewayCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridconnectivity/v20230315:listEndpointIngressGatewayCredentials", {
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
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: string;
    /**
     * The name of the service.
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
 */
export function listEndpointIngressGatewayCredentialsOutput(args: ListEndpointIngressGatewayCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListEndpointIngressGatewayCredentialsResult> {
    return pulumi.output(args).apply((a: any) => listEndpointIngressGatewayCredentials(a, opts))
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
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * The name of the service.
     */
    serviceName?: pulumi.Input<string | types.enums.ServiceName>;
}
