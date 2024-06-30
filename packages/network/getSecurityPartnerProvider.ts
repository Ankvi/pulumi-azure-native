import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Security Partner Provider.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01.
 */
export function getSecurityPartnerProvider(args: GetSecurityPartnerProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityPartnerProviderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getSecurityPartnerProvider", {
        "resourceGroupName": args.resourceGroupName,
        "securityPartnerProviderName": args.securityPartnerProviderName,
    }, opts);
}

export interface GetSecurityPartnerProviderArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the Security Partner Provider.
     */
    securityPartnerProviderName: string;
}

/**
 * Security Partner Provider resource.
 */
export interface GetSecurityPartnerProviderResult {
    /**
     * The connection status with the Security Partner Provider.
     */
    readonly connectionStatus: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the Security Partner Provider resource.
     */
    readonly provisioningState: string;
    /**
     * The security provider name.
     */
    readonly securityProviderName?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The virtualHub to which the Security Partner Provider belongs.
     */
    readonly virtualHub?: types.outputs.SubResourceResponse;
}
/**
 * Gets the specified Security Partner Provider.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01.
 */
export function getSecurityPartnerProviderOutput(args: GetSecurityPartnerProviderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityPartnerProviderResult> {
    return pulumi.output(args).apply((a: any) => getSecurityPartnerProvider(a, opts))
}

export interface GetSecurityPartnerProviderOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Security Partner Provider.
     */
    securityPartnerProviderName: pulumi.Input<string>;
}