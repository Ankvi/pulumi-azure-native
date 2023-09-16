import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Fetches the managed proxy details
 * Azure REST API version: 2023-03-15.
 */
export function listEndpointManagedProxyDetails(args: ListEndpointManagedProxyDetailsArgs, opts?: pulumi.InvokeOptions): Promise<ListEndpointManagedProxyDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridconnectivity:listEndpointManagedProxyDetails", {
        "endpointName": args.endpointName,
        "hostname": args.hostname,
        "resourceUri": args.resourceUri,
        "service": args.service,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListEndpointManagedProxyDetailsArgs {
    /**
     * The endpoint name.
     */
    endpointName: string;
    /**
     * The target host name.
     */
    hostname?: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: string;
    /**
     * The name of the service.
     */
    service: string;
    /**
     * The name of the service. It is an optional property, if not provided, service configuration tokens issue code would be by passed.
     */
    serviceName?: string | types.enums.ServiceName;
}

/**
 * Managed Proxy
 */
export interface ListEndpointManagedProxyDetailsResult {
    /**
     * The expiration time of short lived proxy name in unix epoch.
     */
    readonly expiresOn: number;
    /**
     * The short lived proxy name.
     */
    readonly proxy: string;
}
/**
 * Fetches the managed proxy details
 * Azure REST API version: 2023-03-15.
 */
export function listEndpointManagedProxyDetailsOutput(args: ListEndpointManagedProxyDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListEndpointManagedProxyDetailsResult> {
    return pulumi.output(args).apply((a: any) => listEndpointManagedProxyDetails(a, opts))
}

export interface ListEndpointManagedProxyDetailsOutputArgs {
    /**
     * The endpoint name.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The target host name.
     */
    hostname?: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * The name of the service.
     */
    service: pulumi.Input<string>;
    /**
     * The name of the service. It is an optional property, if not provided, service configuration tokens issue code would be by passed.
     */
    serviceName?: pulumi.Input<string | types.enums.ServiceName>;
}
