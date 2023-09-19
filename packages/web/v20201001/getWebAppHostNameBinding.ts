import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the named hostname binding for an app (or deployment slot, if specified).
 */
export function getWebAppHostNameBinding(args: GetWebAppHostNameBindingArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppHostNameBindingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201001:getWebAppHostNameBinding", {
        "hostName": args.hostName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppHostNameBindingArgs {
    /**
     * Hostname in the hostname binding.
     */
    hostName: string;
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
 * A hostname binding object.
 */
export interface GetWebAppHostNameBindingResult {
    /**
     * Azure resource name.
     */
    readonly azureResourceName?: string;
    /**
     * Azure resource type.
     */
    readonly azureResourceType?: string;
    /**
     * Custom DNS record type.
     */
    readonly customHostNameDnsRecordType?: string;
    /**
     * Fully qualified ARM domain resource URI.
     */
    readonly domainId?: string;
    /**
     * Hostname type.
     */
    readonly hostNameType?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * App Service app name.
     */
    readonly siteName?: string;
    /**
     * SSL type
     */
    readonly sslState?: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * SSL certificate thumbprint
     */
    readonly thumbprint?: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Virtual IP address assigned to the hostname if IP based SSL is enabled.
     */
    readonly virtualIP: string;
}
/**
 * Get the named hostname binding for an app (or deployment slot, if specified).
 */
export function getWebAppHostNameBindingOutput(args: GetWebAppHostNameBindingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppHostNameBindingResult> {
    return pulumi.output(args).apply((a: any) => getWebAppHostNameBinding(a, opts))
}

export interface GetWebAppHostNameBindingOutputArgs {
    /**
     * Hostname in the hostname binding.
     */
    hostName: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
