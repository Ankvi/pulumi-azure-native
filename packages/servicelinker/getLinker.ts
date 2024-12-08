import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns Linker resource for a given name.
 * Azure REST API version: 2022-11-01-preview.
 *
 * Other available API versions: 2021-11-01-preview, 2023-04-01-preview, 2024-04-01, 2024-07-01-preview.
 */
export function getLinker(args: GetLinkerArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicelinker:getLinker", {
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
    readonly authInfo?: types.outputs.AccessKeyInfoBaseResponse | types.outputs.SecretAuthInfoResponse | types.outputs.ServicePrincipalCertificateAuthInfoResponse | types.outputs.ServicePrincipalSecretAuthInfoResponse | types.outputs.SystemAssignedIdentityAuthInfoResponse | types.outputs.UserAccountAuthInfoResponse | types.outputs.UserAssignedIdentityAuthInfoResponse;
    /**
     * The application client type
     */
    readonly clientType?: string;
    /**
     * The connection information consumed by applications, including secrets, connection strings.
     */
    readonly configurationInfo?: types.outputs.ConfigurationInfoResponse;
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
    readonly publicNetworkSolution?: types.outputs.PublicNetworkSolutionResponse;
    /**
     * connection scope in source service.
     */
    readonly scope?: string;
    /**
     * An option to store secret value in secure place
     */
    readonly secretStore?: types.outputs.SecretStoreResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The target service properties
     */
    readonly targetService?: types.outputs.AzureResourceResponse | types.outputs.ConfluentBootstrapServerResponse | types.outputs.ConfluentSchemaRegistryResponse | types.outputs.SelfHostedServerResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The VNet solution.
     */
    readonly vNetSolution?: types.outputs.VNetSolutionResponse;
}
/**
 * Returns Linker resource for a given name.
 * Azure REST API version: 2022-11-01-preview.
 *
 * Other available API versions: 2021-11-01-preview, 2023-04-01-preview, 2024-04-01, 2024-07-01-preview.
 */
export function getLinkerOutput(args: GetLinkerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLinkerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicelinker:getLinker", {
        "linkerName": args.linkerName,
        "resourceUri": args.resourceUri,
    }, opts);
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