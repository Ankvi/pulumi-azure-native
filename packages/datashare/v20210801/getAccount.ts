import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get an account
 */
export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare/v20210801:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountArgs {
    /**
     * The name of the share account.
     */
    accountName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * An account data transfer object.
 */
export interface GetAccountResult {
    /**
     * Time at which the account was created.
     */
    readonly createdAt: string;
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * Identity Info on the Account
     */
    readonly identity: types.outputs.datashare.v20210801.IdentityResponse;
    /**
     * Location of the azure resource.
     */
    readonly location?: string;
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Provisioning state of the Account
     */
    readonly provisioningState: string;
    /**
     * System Data of the Azure resource.
     */
    readonly systemData: types.outputs.datashare.v20210801.SystemDataResponse;
    /**
     * Tags on the azure resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Type of the azure resource
     */
    readonly type: string;
    /**
     * Email of the user who created the resource
     */
    readonly userEmail: string;
    /**
     * Name of the user who created the resource
     */
    readonly userName: string;
}
/**
 * Get an account
 */
export function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountResult> {
    return pulumi.output(args).apply((a: any) => getAccount(a, opts))
}

export interface GetAccountOutputArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
