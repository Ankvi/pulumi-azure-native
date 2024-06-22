import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets details from a list of feature names.
 * Azure REST API version: 2021-12-01.
 *
 * Other available API versions: 2023-05-01-preview, 2024-04-01-preview.
 */
export function listFeatureAccount(args: ListFeatureAccountArgs, opts?: pulumi.InvokeOptions): Promise<ListFeatureAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:purview:listFeatureAccount", {
        "accountName": args.accountName,
        "features": args.features,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListFeatureAccountArgs {
    /**
     * The name of the account.
     */
    accountName: string;
    /**
     * Set of features
     */
    features?: string[];
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * List of features with enabled status
 */
export interface ListFeatureAccountResult {
    /**
     * Features with enabled status
     */
    readonly features?: {[key: string]: boolean};
}
/**
 * Gets details from a list of feature names.
 * Azure REST API version: 2021-12-01.
 *
 * Other available API versions: 2023-05-01-preview, 2024-04-01-preview.
 */
export function listFeatureAccountOutput(args: ListFeatureAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListFeatureAccountResult> {
    return pulumi.output(args).apply((a: any) => listFeatureAccount(a, opts))
}

export interface ListFeatureAccountOutputArgs {
    /**
     * The name of the account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Set of features
     */
    features?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}