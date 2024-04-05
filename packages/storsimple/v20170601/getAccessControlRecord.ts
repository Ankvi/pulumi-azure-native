import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns the properties of the specified access control record name.
 */
export function getAccessControlRecord(args: GetAccessControlRecordArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessControlRecordResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storsimple/v20170601:getAccessControlRecord", {
        "accessControlRecordName": args.accessControlRecordName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessControlRecordArgs {
    /**
     * Name of access control record to be fetched.
     */
    accessControlRecordName: string;
    /**
     * The manager name
     */
    managerName: string;
    /**
     * The resource group name
     */
    resourceGroupName: string;
}

/**
 * The access control record.
 */
export interface GetAccessControlRecordResult {
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * The iSCSI initiator name (IQN).
     */
    readonly initiatorName: string;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: string;
    /**
     * The name of the object.
     */
    readonly name: string;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * The number of volumes using the access control record.
     */
    readonly volumeCount: number;
}
/**
 * Returns the properties of the specified access control record name.
 */
export function getAccessControlRecordOutput(args: GetAccessControlRecordOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccessControlRecordResult> {
    return pulumi.output(args).apply((a: any) => getAccessControlRecord(a, opts))
}

export interface GetAccessControlRecordOutputArgs {
    /**
     * Name of access control record to be fetched.
     */
    accessControlRecordName: pulumi.Input<string>;
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
}