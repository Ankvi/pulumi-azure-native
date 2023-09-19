import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified machine learning team account.
 * Azure REST API version: 2017-05-01-preview.
 */
export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningexperimentation:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountArgs {
    /**
     * The name of the machine learning team account.
     */
    accountName: string;
    /**
     * The name of the resource group to which the machine learning team account belongs.
     */
    resourceGroupName: string;
}

/**
 * An object that represents a machine learning team account.
 */
export interface GetAccountResult {
    /**
     * The immutable id associated with this team account.
     */
    readonly accountId: string;
    /**
     * The creation date of the machine learning team account in ISO8601 format.
     */
    readonly creationDate: string;
    /**
     * The description of this workspace.
     */
    readonly description?: string;
    /**
     * The uri for this machine learning team account.
     */
    readonly discoveryUri: string;
    /**
     * The friendly name for this workspace. This will be the workspace name in the arm id when the workspace object gets created
     */
    readonly friendlyName?: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The fully qualified arm id of the user key vault.
     */
    readonly keyVaultId: string;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The current deployment state of team account resource. The provisioningState is to indicate states for resource provisioning.
     */
    readonly provisioningState: string;
    /**
     * The no of users/seats who can access this team account. This property defines the charge on the team account.
     */
    readonly seats?: string;
    /**
     * The properties of the storage account for the machine learning team account.
     */
    readonly storageAccount: types.outputs.StorageAccountPropertiesResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The fully qualified arm id of the vso account to be used for this team account.
     */
    readonly vsoAccountId: string;
}
/**
 * Gets the properties of the specified machine learning team account.
 * Azure REST API version: 2017-05-01-preview.
 */
export function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountResult> {
    return pulumi.output(args).apply((a: any) => getAccount(a, opts))
}

export interface GetAccountOutputArgs {
    /**
     * The name of the machine learning team account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the machine learning team account belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
