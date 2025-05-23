import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets details from a list of feature names.
 *
 * Uses Azure REST API version 2024-04-01-preview.
 *
 * Other available API versions: 2021-12-01, 2023-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native purview [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    readonly features: {[key: string]: boolean};
}
/**
 * Gets details from a list of feature names.
 *
 * Uses Azure REST API version 2024-04-01-preview.
 *
 * Other available API versions: 2021-12-01, 2023-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native purview [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listFeatureAccountOutput(args: ListFeatureAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListFeatureAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:purview:listFeatureAccount", {
        "accountName": args.accountName,
        "features": args.features,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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