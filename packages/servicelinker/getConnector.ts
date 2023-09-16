import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns Connector resource for a given name.
 * Azure REST API version: 2022-11-01-preview.
 */
export function getConnector(args: GetConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicelinker:getConnector", {
        "connectorName": args.connectorName,
        "location": args.location,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface GetConnectorArgs {
    /**
     * The name of resource.
     */
    connectorName: string;
    /**
     * The name of Azure region.
     */
    location: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The ID of the target subscription.
     */
    subscriptionId?: string;
}

/**
 * Linker of source and target resource
 */
export interface GetConnectorResult {
    /**
     * The authentication type.
     */
    readonly authInfo?: types.outputs.servicelinker.AccessKeyInfoBaseResponse | types.outputs.servicelinker.SecretAuthInfoResponse | types.outputs.servicelinker.ServicePrincipalCertificateAuthInfoResponse | types.outputs.servicelinker.ServicePrincipalSecretAuthInfoResponse | types.outputs.servicelinker.SystemAssignedIdentityAuthInfoResponse | types.outputs.servicelinker.UserAccountAuthInfoResponse | types.outputs.servicelinker.UserAssignedIdentityAuthInfoResponse;
    /**
     * The application client type
     */
    readonly clientType?: string;
    /**
     * The connection information consumed by applications, including secrets, connection strings.
     */
    readonly configurationInfo?: types.outputs.servicelinker.ConfigurationInfoResponse;
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
    readonly publicNetworkSolution?: types.outputs.servicelinker.PublicNetworkSolutionResponse;
    /**
     * connection scope in source service.
     */
    readonly scope?: string;
    /**
     * An option to store secret value in secure place
     */
    readonly secretStore?: types.outputs.servicelinker.SecretStoreResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.servicelinker.SystemDataResponse;
    /**
     * The target service properties
     */
    readonly targetService?: types.outputs.servicelinker.AzureResourceResponse | types.outputs.servicelinker.ConfluentBootstrapServerResponse | types.outputs.servicelinker.ConfluentSchemaRegistryResponse | types.outputs.servicelinker.SelfHostedServerResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The VNet solution.
     */
    readonly vNetSolution?: types.outputs.servicelinker.VNetSolutionResponse;
}
/**
 * Returns Connector resource for a given name.
 * Azure REST API version: 2022-11-01-preview.
 */
export function getConnectorOutput(args: GetConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectorResult> {
    return pulumi.output(args).apply((a: any) => getConnector(a, opts))
}

export interface GetConnectorOutputArgs {
    /**
     * The name of resource.
     */
    connectorName: pulumi.Input<string>;
    /**
     * The name of Azure region.
     */
    location: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the target subscription.
     */
    subscriptionId?: pulumi.Input<string>;
}
