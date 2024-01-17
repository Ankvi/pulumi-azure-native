import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the BitLocker Keys for all drives in the specified job.
 * Azure REST API version: 2021-01-01.
 */
export function listBitLockerKey(args: ListBitLockerKeyArgs, opts?: pulumi.InvokeOptions): Promise<ListBitLockerKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:importexport:listBitLockerKey", {
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListBitLockerKeyArgs {
    /**
     * The name of the import/export job.
     */
    jobName: string;
    /**
     * The resource group name uniquely identifies the resource group within the user subscription.
     */
    resourceGroupName: string;
}

/**
 * GetBitLockerKeys response
 */
export interface ListBitLockerKeyResult {
    /**
     * drive status
     */
    readonly value?: types.outputs.DriveBitLockerKeyResponse[];
}
/**
 * Returns the BitLocker Keys for all drives in the specified job.
 * Azure REST API version: 2021-01-01.
 */
export function listBitLockerKeyOutput(args: ListBitLockerKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListBitLockerKeyResult> {
    return pulumi.output(args).apply((a: any) => listBitLockerKey(a, opts))
}

export interface ListBitLockerKeyOutputArgs {
    /**
     * The name of the import/export job.
     */
    jobName: pulumi.Input<string>;
    /**
     * The resource group name uniquely identifies the resource group within the user subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}