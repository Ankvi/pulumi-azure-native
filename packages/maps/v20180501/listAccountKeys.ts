import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the keys to use with the Maps APIs. A key is used to authenticate and authorize access to the Maps REST APIs. Only one key is needed at a time; two are given to provide seamless key regeneration.
 */
export function listAccountKeys(args: ListAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListAccountKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:maps/v20180501:listAccountKeys", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAccountKeysArgs {
    /**
     * The name of the Maps Account.
     */
    accountName: string;
    /**
     * The name of the Azure Resource Group.
     */
    resourceGroupName: string;
}

/**
 * The set of keys which can be used to access the Maps REST APIs. Two keys are provided for key rotation without interruption.
 */
export interface ListAccountKeysResult {
    /**
     * The full Azure resource identifier of the Maps Account.
     */
    readonly id: string;
    /**
     * The primary key for accessing the Maps REST APIs.
     */
    readonly primaryKey: string;
    /**
     * The secondary key for accessing the Maps REST APIs.
     */
    readonly secondaryKey: string;
}
/**
 * Get the keys to use with the Maps APIs. A key is used to authenticate and authorize access to the Maps REST APIs. Only one key is needed at a time; two are given to provide seamless key regeneration.
 */
export function listAccountKeysOutput(args: ListAccountKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAccountKeysResult> {
    return pulumi.output(args).apply((a: any) => listAccountKeys(a, opts))
}

export interface ListAccountKeysOutputArgs {
    /**
     * The name of the Maps Account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Azure Resource Group.
     */
    resourceGroupName: pulumi.Input<string>;
}
