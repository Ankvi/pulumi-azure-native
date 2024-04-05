import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get assigned Gateway Certificate Authority details.
 */
export function getGatewayCertificateAuthority(args: GetGatewayCertificateAuthorityArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayCertificateAuthorityResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20230501preview:getGatewayCertificateAuthority", {
        "certificateId": args.certificateId,
        "gatewayId": args.gatewayId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetGatewayCertificateAuthorityArgs {
    /**
     * Identifier of the certificate entity. Must be unique in the current API Management service instance.
     */
    certificateId: string;
    /**
     * Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
     */
    gatewayId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Gateway certificate authority details.
 */
export interface GetGatewayCertificateAuthorityResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Determines whether certificate authority is trusted.
     */
    readonly isTrusted?: boolean;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get assigned Gateway Certificate Authority details.
 */
export function getGatewayCertificateAuthorityOutput(args: GetGatewayCertificateAuthorityOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGatewayCertificateAuthorityResult> {
    return pulumi.output(args).apply((a: any) => getGatewayCertificateAuthority(a, opts))
}

export interface GetGatewayCertificateAuthorityOutputArgs {
    /**
     * Identifier of the certificate entity. Must be unique in the current API Management service instance.
     */
    certificateId: pulumi.Input<string>;
    /**
     * Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
     */
    gatewayId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}