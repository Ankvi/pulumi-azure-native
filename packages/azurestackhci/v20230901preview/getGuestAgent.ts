import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements GuestAgent GET method.
 */
export function getGuestAgent(args: GetGuestAgentArgs, opts?: pulumi.InvokeOptions): Promise<GetGuestAgentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20230901preview:getGuestAgent", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetGuestAgentArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
     */
    resourceUri: string;
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
 */
export function getGuestAgentOutput(args: GetGuestAgentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGuestAgentResult> {
    return pulumi.output(args).apply((a: any) => getGuestAgent(a, opts))
}

export interface GetGuestAgentOutputArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
     */
    resourceUri: pulumi.Input<string>;
}
