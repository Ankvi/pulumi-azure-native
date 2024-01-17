import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieve the credential identified by credential name.
 * Azure REST API version: 2022-08-08.
 *
 * Other available API versions: 2023-05-15-preview, 2023-11-01.
 */
export function getCredential(args: GetCredentialArgs, opts?: pulumi.InvokeOptions): Promise<GetCredentialResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getCredential", {
        "automationAccountName": args.automationAccountName,
        "credentialName": args.credentialName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCredentialArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * The name of credential.
     */
    credentialName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * Definition of the credential.
 */
export interface GetCredentialResult {
    /**
     * Gets the creation time.
     */
    readonly creationTime: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * Gets the last modified time.
     */
    readonly lastModifiedTime: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * Gets the user name of the credential.
     */
    readonly userName: string;
}
/**
 * Retrieve the credential identified by credential name.
 * Azure REST API version: 2022-08-08.
 *
 * Other available API versions: 2023-05-15-preview, 2023-11-01.
 */
export function getCredentialOutput(args: GetCredentialOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCredentialResult> {
    return pulumi.output(args).apply((a: any) => getCredential(a, opts))
}

export interface GetCredentialOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The name of credential.
     */
    credentialName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}