import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Custom domain analysis.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2022-10-01, 2022-11-01-preview, 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listContainerAppCustomHostNameAnalysis(args: ListContainerAppCustomHostNameAnalysisArgs, opts?: pulumi.InvokeOptions): Promise<ListContainerAppCustomHostNameAnalysisResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:listContainerAppCustomHostNameAnalysis", {
        "containerAppName": args.containerAppName,
        "customHostname": args.customHostname,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListContainerAppCustomHostNameAnalysisArgs {
    /**
     * Name of the Container App.
     */
    containerAppName: string;
    /**
     * Custom hostname.
     */
    customHostname?: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Custom domain analysis.
 */
export interface ListContainerAppCustomHostNameAnalysisResult {
    /**
     * A records visible for this hostname.
     */
    readonly aRecords?: string[];
    /**
     * Alternate CName records visible for this hostname.
     */
    readonly alternateCNameRecords?: string[];
    /**
     * Alternate TXT records visible for this hostname.
     */
    readonly alternateTxtRecords?: string[];
    /**
     * CName records visible for this hostname.
     */
    readonly cNameRecords?: string[];
    /**
     * <code>true</code> if there is a conflict on the Container App's managed environment level custom domain; otherwise, <code>false</code>.
     */
    readonly conflictWithEnvironmentCustomDomain: boolean;
    /**
     * Name of the conflicting Container App on the Managed Environment if it's within the same subscription.
     */
    readonly conflictingContainerAppResourceId: string;
    /**
     * Raw failure information if DNS verification fails.
     */
    readonly customDomainVerificationFailureInfo: types.outputs.CustomHostnameAnalysisResultResponseCustomDomainVerificationFailureInfo;
    /**
     * DNS verification test result.
     */
    readonly customDomainVerificationTest: string;
    /**
     * <code>true</code> if there is a conflict on the Container App's managed environment; otherwise, <code>false</code>.
     */
    readonly hasConflictOnManagedEnvironment: boolean;
    /**
     * Host name that was analyzed
     */
    readonly hostName: string;
    /**
     * <code>true</code> if hostname is already verified; otherwise, <code>false</code>.
     */
    readonly isHostnameAlreadyVerified: boolean;
    /**
     * TXT records visible for this hostname.
     */
    readonly txtRecords?: string[];
}
/**
 * Custom domain analysis.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2022-10-01, 2022-11-01-preview, 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listContainerAppCustomHostNameAnalysisOutput(args: ListContainerAppCustomHostNameAnalysisOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListContainerAppCustomHostNameAnalysisResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:listContainerAppCustomHostNameAnalysis", {
        "containerAppName": args.containerAppName,
        "customHostname": args.customHostname,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListContainerAppCustomHostNameAnalysisOutputArgs {
    /**
     * Name of the Container App.
     */
    containerAppName: pulumi.Input<string>;
    /**
     * Custom hostname.
     */
    customHostname?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}