import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Certificate used for Custom Domain bindings of Container Apps in a Managed Environment
 */
export function getConnectedEnvironmentsCertificate(args: GetConnectedEnvironmentsCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectedEnvironmentsCertificateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app/v20230501:getConnectedEnvironmentsCertificate", {
        "certificateName": args.certificateName,
        "connectedEnvironmentName": args.connectedEnvironmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectedEnvironmentsCertificateArgs {
    /**
     * Name of the Certificate.
     */
    certificateName: string;
    /**
     * Name of the Connected Environment.
     */
    connectedEnvironmentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Certificate used for Custom Domain bindings of Container Apps in a Managed Environment
 */
export interface GetConnectedEnvironmentsCertificateResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Certificate resource specific properties
     */
    readonly properties: types.outputs.app.v20230501.CertificateResponseProperties;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.app.v20230501.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Certificate used for Custom Domain bindings of Container Apps in a Managed Environment
 */
export function getConnectedEnvironmentsCertificateOutput(args: GetConnectedEnvironmentsCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectedEnvironmentsCertificateResult> {
    return pulumi.output(args).apply((a: any) => getConnectedEnvironmentsCertificate(a, opts))
}

export interface GetConnectedEnvironmentsCertificateOutputArgs {
    /**
     * Name of the Certificate.
     */
    certificateName: pulumi.Input<string>;
    /**
     * Name of the Connected Environment.
     */
    connectedEnvironmentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
