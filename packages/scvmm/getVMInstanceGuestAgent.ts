import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements GuestAgent GET method.
 *
 * Uses Azure REST API version 2023-04-01-preview.
 */
export function getVMInstanceGuestAgent(args: GetVMInstanceGuestAgentArgs, opts?: pulumi.InvokeOptions): Promise<GetVMInstanceGuestAgentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scvmm:getVMInstanceGuestAgent", {
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the guest agent provisioning action.
     */
    readonly provisioningAction?: string;
    /**
     * Gets or sets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Gets or sets the guest agent status.
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
    /**
     * Gets or sets a unique identifier for this resource.
     */
    readonly uuid: string;
}
/**
 * Implements GuestAgent GET method.
 *
 * Uses Azure REST API version 2023-04-01-preview.
 */
export function getVMInstanceGuestAgentOutput(args: GetVMInstanceGuestAgentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVMInstanceGuestAgentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:scvmm:getVMInstanceGuestAgent", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetVMInstanceGuestAgentOutputArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
     */
    resourceUri: pulumi.Input<string>;
}