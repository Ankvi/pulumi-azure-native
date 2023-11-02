import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements GuestAgent GET method.
 * Azure REST API version: 2022-12-15-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview.
 */
export function getGuestAgent(args: GetGuestAgentArgs, opts?: pulumi.InvokeOptions): Promise<GetGuestAgentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getGuestAgent", {
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
     * The name of the resource group. The name is case insensitive.
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
     * Username / Password Credentials to provision guest agent.
     */
    readonly credentials?: types.outputs.GuestCredentialResponse;
    /**
     * HTTP Proxy configuration for the VM.
     */
    readonly httpProxyConfig?: types.outputs.HttpProxyConfigurationResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The guest agent provisioning action.
     */
    readonly provisioningAction?: string;
    /**
     * The provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The guest agent status.
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Implements GuestAgent GET method.
 * Azure REST API version: 2022-12-15-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview.
 */
export function getGuestAgentOutput(args: GetGuestAgentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGuestAgentResult> {
    return pulumi.output(args).apply((a: any) => getGuestAgent(a, opts))
}

export interface GetGuestAgentOutputArgs {
    /**
     * Name of the GuestAgent.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the vm.
     */
    virtualMachineName: pulumi.Input<string>;
}
