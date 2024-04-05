import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified SIM group.
 */
export function getSimGroup(args: GetSimGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetSimGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork/v20240201:getSimGroup", {
        "resourceGroupName": args.resourceGroupName,
        "simGroupName": args.simGroupName,
    }, opts);
}

export interface GetSimGroupArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the SIM Group.
     */
    simGroupName: string;
}

/**
 * SIM group resource.
 */
export interface GetSimGroupResult {
    /**
     * A key to encrypt the SIM data that belongs to this SIM group.
     */
    readonly encryptionKey?: types.outputs.KeyVaultKeyResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The identity used to retrieve the encryption key from Azure key vault.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Mobile network that this SIM group belongs to. The mobile network must be in the same location as the SIM group.
     */
    readonly mobileNetwork?: types.outputs.MobileNetworkResourceIdResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the SIM group resource.
     */
    readonly provisioningState: string;
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
 * Gets information about the specified SIM group.
 */
export function getSimGroupOutput(args: GetSimGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSimGroupResult> {
    return pulumi.output(args).apply((a: any) => getSimGroup(a, opts))
}

export interface GetSimGroupOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SIM Group.
     */
    simGroupName: pulumi.Input<string>;
}