import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements GuestAgent GET method.
 *
 * Uses Azure REST API version 2023-03-01-preview.
 *
 * Other available API versions: 2022-07-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native connectedvmwarevsphere [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getGuestAgent(args: GetGuestAgentArgs, opts?: pulumi.InvokeOptions): Promise<GetGuestAgentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedvmwarevsphere:getGuestAgent", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineName": args.virtualMachineName,
    }, opts);
}

export interface GetGuestAgentArgs {
    /**
     * Name of the GuestAgent.
     */
    name: string;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: string;
    /**
     * Name of the vm.
     */
    virtualMachineName: string;
}

/**
 * Defines the GuestAgent.
 */
export interface GetGuestAgentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Username / Password Credentials to provision guest agent.
     */
    readonly credentials?: types.outputs.GuestCredentialResponse;
    /**
     * Gets the name of the corresponding resource in Kubernetes.
     */
    readonly customResourceName: string;
    /**
     * HTTP Proxy configuration for the VM.
     */
    readonly httpProxyConfig?: types.outputs.HttpProxyConfigurationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource id of the private link scope this machine is assigned to, if any.
     */
    readonly privateLinkScopeResourceId?: string;
    /**
     * Gets or sets the guest agent provisioning action.
     */
    readonly provisioningAction?: string;
    /**
     * Gets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Gets or sets the guest agent status.
     */
    readonly status: string;
    /**
     * The resource status information.
     */
    readonly statuses: types.outputs.ResourceStatusResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Gets or sets a unique identifier for this resource.
     */
    readonly uuid: string;
}
/**
 * Implements GuestAgent GET method.
 *
 * Uses Azure REST API version 2023-03-01-preview.
 *
 * Other available API versions: 2022-07-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native connectedvmwarevsphere [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getGuestAgentOutput(args: GetGuestAgentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGuestAgentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:connectedvmwarevsphere:getGuestAgent", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "virtualMachineName": args.virtualMachineName,
    }, opts);
}

export interface GetGuestAgentOutputArgs {
    /**
     * Name of the GuestAgent.
     */
    name: pulumi.Input<string>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the vm.
     */
    virtualMachineName: pulumi.Input<string>;
}