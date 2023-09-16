import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a valid sender username for a domains resource.
 */
export function getSenderUsername(args: GetSenderUsernameArgs, opts?: pulumi.InvokeOptions): Promise<GetSenderUsernameResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:communication/v20230331:getSenderUsername", {
        "domainName": args.domainName,
        "emailServiceName": args.emailServiceName,
        "resourceGroupName": args.resourceGroupName,
        "senderUsername": args.senderUsername,
    }, opts);
}

export interface GetSenderUsernameArgs {
    /**
     * The name of the Domains resource.
     */
    domainName: string;
    /**
     * The name of the EmailService resource.
     */
    emailServiceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The valid sender Username.
     */
    senderUsername: string;
}

/**
 * A class representing a SenderUsername resource.
 */
export interface GetSenderUsernameResult {
    /**
     * The location where the SenderUsername resource data is stored at rest.
     */
    readonly dataLocation: string;
    /**
     * The display name for the senderUsername.
     */
    readonly displayName?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the resource. Unknown is the default state for Communication Services.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.communication.v20230331.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * A sender senderUsername to be used when sending emails.
     */
    readonly username: string;
}
/**
 * Get a valid sender username for a domains resource.
 */
export function getSenderUsernameOutput(args: GetSenderUsernameOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSenderUsernameResult> {
    return pulumi.output(args).apply((a: any) => getSenderUsername(a, opts))
}

export interface GetSenderUsernameOutputArgs {
    /**
     * The name of the Domains resource.
     */
    domainName: pulumi.Input<string>;
    /**
     * The name of the EmailService resource.
     */
    emailServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The valid sender Username.
     */
    senderUsername: pulumi.Input<string>;
}
