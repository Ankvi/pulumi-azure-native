import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the properties of a Confidential Ledger.
 * Azure REST API version: 2022-05-13.
 *
 * Other available API versions: 2023-01-26-preview, 2023-06-28-preview, 2024-07-09-preview.
 */
export function getLedger(args: GetLedgerArgs, opts?: pulumi.InvokeOptions): Promise<GetLedgerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confidentialledger:getLedger", {
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
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Confidential Ledger. Contains the properties of Confidential Ledger Resource.
 */
export interface GetLedgerResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The Azure location where the Confidential Ledger is running.
     */
    readonly location?: string;
    /**
     * Name of the Resource.
     */
    readonly name: string;
    /**
     * Properties of Confidential Ledger Resource.
     */
    readonly properties: types.outputs.LedgerPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Additional tags for Confidential Ledger
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Retrieves the properties of a Confidential Ledger.
 * Azure REST API version: 2022-05-13.
 *
 * Other available API versions: 2023-01-26-preview, 2023-06-28-preview, 2024-07-09-preview.
 */
export function getLedgerOutput(args: GetLedgerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLedgerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:confidentialledger:getLedger", {
        "ledgerName": args.ledgerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLedgerOutputArgs {
    /**
     * Name of the Confidential Ledger
     */
    ledgerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}