import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2023-01-15.
 */
export function getRecoveryPointAccessToken(args: GetRecoveryPointAccessTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetRecoveryPointAccessTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices:getRecoveryPointAccessToken", {
        "containerName": args.containerName,
        "eTag": args.eTag,
        "fabricName": args.fabricName,
        "location": args.location,
        "properties": args.properties,
        "protectedItemName": args.protectedItemName,
        "recoveryPointId": args.recoveryPointId,
        "resourceGroupName": args.resourceGroupName,
        "tags": args.tags,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetRecoveryPointAccessTokenArgs {
    /**
     * Name of the container.
     */
    containerName: string;
    /**
     * Optional ETag.
     */
    eTag?: string;
    /**
     * Fabric name associated with the container.
     */
    fabricName: string;
    /**
     * Resource location.
     */
    location?: string;
    /**
     * AADPropertiesResource properties
     */
    properties?: types.inputs.AADProperties;
    /**
     * Name of the Protected Item.
     */
    protectedItemName: string;
    /**
     * Recovery Point Id
     */
    recoveryPointId: string;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: string;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * The name of the recovery services vault.
     */
    vaultName: string;
}

export interface GetRecoveryPointAccessTokenResult {
    /**
     * Optional ETag.
     */
    readonly eTag?: string;
    /**
     * Resource Id represents the complete path to the resource.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name associated with the resource.
     */
    readonly name: string;
    /**
     * CrrAccessTokenResource properties
     */
    readonly properties: types.outputs.WorkloadCrrAccessTokenResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type: string;
}
/**
 * Uses Azure REST API version 2023-01-15.
 */
export function getRecoveryPointAccessTokenOutput(args: GetRecoveryPointAccessTokenOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRecoveryPointAccessTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:recoveryservices:getRecoveryPointAccessToken", {
        "containerName": args.containerName,
        "eTag": args.eTag,
        "fabricName": args.fabricName,
        "location": args.location,
        "properties": args.properties,
        "protectedItemName": args.protectedItemName,
        "recoveryPointId": args.recoveryPointId,
        "resourceGroupName": args.resourceGroupName,
        "tags": args.tags,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetRecoveryPointAccessTokenOutputArgs {
    /**
     * Name of the container.
     */
    containerName: pulumi.Input<string>;
    /**
     * Optional ETag.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Fabric name associated with the container.
     */
    fabricName: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * AADPropertiesResource properties
     */
    properties?: pulumi.Input<types.inputs.AADPropertiesArgs>;
    /**
     * Name of the Protected Item.
     */
    protectedItemName: pulumi.Input<string>;
    /**
     * Recovery Point Id
     */
    recoveryPointId: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the recovery services vault.
     */
    vaultName: pulumi.Input<string>;
}