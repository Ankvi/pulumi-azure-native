import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the properties of a Confidential Ledger.
 */
export function getLedger(args: GetLedgerArgs, opts?: pulumi.InvokeOptions): Promise<GetLedgerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confidentialledger/v20230126preview:getLedger", {
        "ledgerName": args.ledgerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLedgerArgs {
    /**
     * Name of the Confidential Ledger
     */
    ledgerName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Confidential Ledger. Contains the properties of Confidential Ledger Resource.
 */
export interface GetLedgerResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of Confidential Ledger Resource.
     */
    readonly properties: types.outputs.LedgerPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves the properties of a Confidential Ledger.
 */
export function getLedgerOutput(args: GetLedgerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLedgerResult> {
    return pulumi.output(args).apply((a: any) => getLedger(a, opts))
}

export interface GetLedgerOutputArgs {
    /**
     * Name of the Confidential Ledger
     */
    ledgerName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}