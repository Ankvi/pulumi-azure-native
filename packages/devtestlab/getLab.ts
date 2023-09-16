import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get lab.
 * Azure REST API version: 2018-09-15.
 */
export function getLab(args: GetLabArgs, opts?: pulumi.InvokeOptions): Promise<GetLabResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab:getLab", {
        "expand": args.expand,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLabArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
     */
    expand?: string;
    /**
     * The name of the lab.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * A lab.
 */
export interface GetLabResult {
    /**
     * The properties of any lab announcement associated with this lab
     */
    readonly announcement?: types.outputs.devtestlab.LabAnnouncementPropertiesResponse;
    /**
     * The lab's artifact storage account.
     */
    readonly artifactsStorageAccount: string;
    /**
     * The creation date of the lab.
     */
    readonly createdDate: string;
    /**
     * The lab's default premium storage account.
     */
    readonly defaultPremiumStorageAccount: string;
    /**
     * The lab's default storage account.
     */
    readonly defaultStorageAccount: string;
    /**
     * The access rights to be granted to the user when provisioning an environment
     */
    readonly environmentPermission?: string;
    /**
     * Extended properties of the lab used for experimental features
     */
    readonly extendedProperties?: {[key: string]: string};
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
     */
    readonly labStorageType?: string;
    /**
     * The load balancer used to for lab VMs that use shared IP address.
     */
    readonly loadBalancerId: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
     */
    readonly mandatoryArtifactsResourceIdsLinux?: string[];
    /**
     * The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
     */
    readonly mandatoryArtifactsResourceIdsWindows?: string[];
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The Network Security Group attached to the lab VMs Network interfaces to restrict open ports.
     */
    readonly networkSecurityGroupId: string;
    /**
     * The lab's premium data disk storage account.
     */
    readonly premiumDataDiskStorageAccount: string;
    /**
     * The setting to enable usage of premium data disks.
     * When its value is 'Enabled', creation of standard or premium data disks is allowed.
     * When its value is 'Disabled', only creation of standard data disks is allowed.
     */
    readonly premiumDataDisks?: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: string;
    /**
     * The public IP address for the lab's load balancer.
     */
    readonly publicIpId: string;
    /**
     * The properties of any lab support message associated with this lab
     */
    readonly support?: types.outputs.devtestlab.LabSupportPropertiesResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: string;
    /**
     * The lab's Key vault.
     */
    readonly vaultName: string;
    /**
     * The resource group in which all new lab virtual machines will be created. To let DevTest Labs manage resource group creation, set this value to null.
     */
    readonly vmCreationResourceGroup: string;
}
/**
 * Get lab.
 * Azure REST API version: 2018-09-15.
 */
export function getLabOutput(args: GetLabOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLabResult> {
    return pulumi.output(args).apply((a: any) => getLab(a, opts))
}

export interface GetLabOutputArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
