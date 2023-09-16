import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Returns Linker resource for a given name.
 */
export function getLinker(args: GetLinkerArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicelinker/v20221101preview:getLinker", {
        "linkerName": args.linkerName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetLinkerArgs {
    /**
     * The name Linker resource.
     */
    linkerName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: string;
}

/**
 * Linker of source and target resource
 */
export interface GetLinkerResult {
    /**
     * The authentication type.
     */
    readonly authInfo?: types.outputs.servicelinker.v20221101preview.AccessKeyInfoBaseResponse | types.outputs.servicelinker.v20221101preview.SecretAuthInfoResponse | types.outputs.servicelinker.v20221101preview.ServicePrincipalCertificateAuthInfoResponse | types.outputs.servicelinker.v20221101preview.ServicePrincipalSecretAuthInfoResponse | types.outputs.servicelinker.v20221101preview.SystemAssignedIdentityAuthInfoResponse | types.outputs.servicelinker.v20221101preview.UserAccountAuthInfoResponse | types.outputs.servicelinker.v20221101preview.UserAssignedIdentityAuthInfoResponse;
    /**
     * The application client type
     */
    readonly clientType?: string;
    /**
     * The connection information consumed by applications, including secrets, connection strings.
     */
    readonly configurationInfo?: types.outputs.servicelinker.v20221101preview.ConfigurationInfoResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state. 
     */
    readonly provisioningState: string;
    /**
     * The network solution.
     */
    readonly publicNetworkSolution?: types.outputs.servicelinker.v20221101preview.PublicNetworkSolutionResponse;
    /**
     * connection scope in source service.
     */
    readonly scope?: string;
    /**
     * An option to store secret value in secure place
     */
    readonly secretStore?: types.outputs.servicelinker.v20221101preview.SecretStoreResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.servicelinker.v20221101preview.SystemDataResponse;
    /**
     * The target service properties
     */
    readonly targetService?: types.outputs.servicelinker.v20221101preview.AzureResourceResponse | types.outputs.servicelinker.v20221101preview.ConfluentBootstrapServerResponse | types.outputs.servicelinker.v20221101preview.ConfluentSchemaRegistryResponse | types.outputs.servicelinker.v20221101preview.SelfHostedServerResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The VNet solution.
     */
    readonly vNetSolution?: types.outputs.servicelinker.v20221101preview.VNetSolutionResponse;
}
/**
 * Returns Linker resource for a given name.
 */
export function getLinkerOutput(args: GetLinkerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLinkerResult> {
    return pulumi.output(args).apply((a: any) => getLinker(a, opts))
}

export interface GetLinkerOutputArgs {
    /**
     * The name Linker resource.
     */
    linkerName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: pulumi.Input<string>;
}
