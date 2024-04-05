import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing KeyGroup within a profile.
 */
export function getKeyGroup(args: GetKeyGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetKeyGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn/v20230701preview:getKeyGroup", {
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
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Contains a list of references of UrlSigningKey type secret objects.
 */
export interface GetKeyGroupResult {
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
 */
export function getKeyGroupOutput(args: GetKeyGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKeyGroupResult> {
    return pulumi.output(args).apply((a: any) => getKeyGroup(a, opts))
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
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}