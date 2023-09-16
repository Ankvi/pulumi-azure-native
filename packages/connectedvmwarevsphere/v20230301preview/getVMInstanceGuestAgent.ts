import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Implements GuestAgent GET method.
 */
export function getVMInstanceGuestAgent(args: GetVMInstanceGuestAgentArgs, opts?: pulumi.InvokeOptions): Promise<GetVMInstanceGuestAgentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedvmwarevsphere/v20230301preview:getVMInstanceGuestAgent", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetVMInstanceGuestAgentArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
     */
    resourceUri: string;
}

/**
 * Defines the GuestAgent.
 */
export interface GetVMInstanceGuestAgentResult {
    /**
     * Username / Password Credentials to provision guest agent.
     */
    readonly credentials?: types.outputs.connectedvmwarevsphere.v20230301preview.GuestCredentialResponse;
    /**
     * Gets the name of the corresponding resource in Kubernetes.
     */
    readonly customResourceName: string;
    /**
     * HTTP Proxy configuration for the VM.
     */
    readonly httpProxyConfig?: types.outputs.connectedvmwarevsphere.v20230301preview.HttpProxyConfigurationResponse;
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
    readonly statuses: types.outputs.connectedvmwarevsphere.v20230301preview.ResourceStatusResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.connectedvmwarevsphere.v20230301preview.SystemDataResponse;
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
export function getVMInstanceGuestAgentOutput(args: GetVMInstanceGuestAgentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVMInstanceGuestAgentResult> {
    return pulumi.output(args).apply((a: any) => getVMInstanceGuestAgent(a, opts))
}

export interface GetVMInstanceGuestAgentOutputArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
     */
    resourceUri: pulumi.Input<string>;
}
