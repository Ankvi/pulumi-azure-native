import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns the extended information of the specified manager name.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function getManagerExtendedInfo(args: GetManagerExtendedInfoArgs, opts?: pulumi.InvokeOptions): Promise<GetManagerExtendedInfoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storsimple:getManagerExtendedInfo", {
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagerExtendedInfoArgs {
    /**
     * The manager name
     */
    managerName: string;
    /**
     * The resource group name
     */
    resourceGroupName: string;
}

/**
 * The extended info of the manager.
 */
export interface GetManagerExtendedInfoResult {
    /**
     * Represents the encryption algorithm used to encrypt the keys. None - if Key is saved in plain text format. Algorithm name - if key is encrypted
     */
    readonly algorithm: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Represents the CEK of the resource.
     */
    readonly encryptionKey?: string;
    /**
     * Represents the Cert thumbprint that was used to encrypt the CEK.
     */
    readonly encryptionKeyThumbprint?: string;
    /**
     * The etag of the resource.
     */
    readonly etag?: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * Represents the CIK of the resource.
     */
    readonly integrityKey: string;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: string;
    /**
     * The name of the object.
     */
    readonly name: string;
    /**
     * Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it.
     */
    readonly portalCertificateThumbprint?: string;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * The version of the extended info being persisted.
     */
    readonly version?: string;
}
/**
 * Returns the extended information of the specified manager name.
 *
 * Uses Azure REST API version 2017-06-01.
 */
export function getManagerExtendedInfoOutput(args: GetManagerExtendedInfoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagerExtendedInfoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:storsimple:getManagerExtendedInfo", {
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagerExtendedInfoOutputArgs {
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
}