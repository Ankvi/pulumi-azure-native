import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get file shares provisioning parameters recommendation.
 *
 * Uses Azure REST API version 2025-06-01-preview.
 *
 * Other available API versions: 2025-09-01-preview, 2026-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native fileshares [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFileShareProvisioningRecommendation(args: GetFileShareProvisioningRecommendationArgs, opts?: pulumi.InvokeOptions): Promise<GetFileShareProvisioningRecommendationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:fileshares:getFileShareProvisioningRecommendation", {
        "location": args.location,
        "properties": args.properties,
    }, opts);
}

export interface GetFileShareProvisioningRecommendationArgs {
    /**
     * The name of the Azure region.
     */
    location: string;
    /**
     * The properties of the file share provisioning recommendation input.
     */
    properties: types.inputs.FileShareProvisioningRecommendationInput;
}

/**
 * Response structure for file share provisioning parameters recommendation API.
 */
export interface GetFileShareProvisioningRecommendationResult {
    /**
     * The properties of the file share provisioning recommendation output.
     */
    readonly properties: types.outputs.FileShareProvisioningRecommendationOutputResponse;
}
/**
 * Get file shares provisioning parameters recommendation.
 *
 * Uses Azure REST API version 2025-06-01-preview.
 *
 * Other available API versions: 2025-09-01-preview, 2026-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native fileshares [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFileShareProvisioningRecommendationOutput(args: GetFileShareProvisioningRecommendationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFileShareProvisioningRecommendationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:fileshares:getFileShareProvisioningRecommendation", {
        "location": args.location,
        "properties": args.properties,
    }, opts);
}

export interface GetFileShareProvisioningRecommendationOutputArgs {
    /**
     * The name of the Azure region.
     */
    location: pulumi.Input<string>;
    /**
     * The properties of the file share provisioning recommendation input.
     */
    properties: pulumi.Input<types.inputs.FileShareProvisioningRecommendationInputArgs>;
}