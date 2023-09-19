import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements GuestAgent GET method.
 */
export function getGuestAgent(args: GetGuestAgentArgs, opts?: pulumi.InvokeOptions): Promise<GetGuestAgentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedvmwarevsphere/v20230301preview:getGuestAgent", {
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
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the vm.
     */
    virtualMachineName: pulumi.Input<string>;
}
