import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing KeyGroup within a profile.
 *
 * Uses Azure REST API version 2024-06-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cdn [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getKeyGroup(args: GetKeyGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetKeyGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn:getKeyGroup", {
        "keyGroupName": args.keyGroupName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetKeyGroupArgs {
    /**
     * Name of the KeyGroup under the profile.
     */
    keyGroupName: string;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium which is unique within the resource group.
     */
    profileName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Contains a list of references of UrlSigningKey type secret objects.
 */
export interface GetKeyGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    readonly deploymentStatus: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Names of UrlSigningKey type secret objects
     */
    readonly keyReferences?: types.outputs.ResourceReferenceResponse[];
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Provisioning status
     */
    readonly provisioningState: string;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets an existing KeyGroup within a profile.
 *
 * Uses Azure REST API version 2024-06-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cdn [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getKeyGroupOutput(args: GetKeyGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetKeyGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cdn:getKeyGroup", {
        "keyGroupName": args.keyGroupName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetKeyGroupOutputArgs {
    /**
     * Name of the KeyGroup under the profile.
     */
    keyGroupName: pulumi.Input<string>;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}