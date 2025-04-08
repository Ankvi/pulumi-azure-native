import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A lab.
 *
 * Uses Azure REST API version 2018-09-15. In version 2.x of the Azure Native provider, it used API version 2018-09-15.
 */
export class Lab extends pulumi.CustomResource {
    /**
     * Get an existing Lab resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Lab {
        return new Lab(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devtestlab:Lab';

    /**
     * Returns true if the given object is an instance of Lab.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Lab {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Lab.__pulumiType;
    }

    /**
     * The properties of any lab announcement associated with this lab
     */
    public readonly announcement!: pulumi.Output<types.outputs.LabAnnouncementPropertiesResponse | undefined>;
    /**
     * The lab's artifact storage account.
     */
    public /*out*/ readonly artifactsStorageAccount!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The creation date of the lab.
     */
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    /**
     * The lab's default premium storage account.
     */
    public /*out*/ readonly defaultPremiumStorageAccount!: pulumi.Output<string>;
    /**
     * The lab's default storage account.
     */
    public /*out*/ readonly defaultStorageAccount!: pulumi.Output<string>;
    /**
     * The access rights to be granted to the user when provisioning an environment
     */
    public readonly environmentPermission!: pulumi.Output<string | undefined>;
    /**
     * Extended properties of the lab used for experimental features
     */
    public readonly extendedProperties!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
     */
    public readonly labStorageType!: pulumi.Output<string | undefined>;
    /**
     * The load balancer used to for lab VMs that use shared IP address.
     */
    public /*out*/ readonly loadBalancerId!: pulumi.Output<string>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
     */
    public readonly mandatoryArtifactsResourceIdsLinux!: pulumi.Output<string[] | undefined>;
    /**
     * The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
     */
    public readonly mandatoryArtifactsResourceIdsWindows!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The Network Security Group attached to the lab VMs Network interfaces to restrict open ports.
     */
    public /*out*/ readonly networkSecurityGroupId!: pulumi.Output<string>;
    /**
     * The lab's premium data disk storage account.
     */
    public /*out*/ readonly premiumDataDiskStorageAccount!: pulumi.Output<string>;
    /**
     * The setting to enable usage of premium data disks.
     * When its value is 'Enabled', creation of standard or premium data disks is allowed.
     * When its value is 'Disabled', only creation of standard data disks is allowed.
     */
    public readonly premiumDataDisks!: pulumi.Output<string | undefined>;
    /**
     * The provisioning status of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The public IP address for the lab's load balancer.
     */
    public /*out*/ readonly publicIpId!: pulumi.Output<string>;
    /**
     * The properties of any lab support message associated with this lab
     */
    public readonly support!: pulumi.Output<types.outputs.LabSupportPropertiesResponse | undefined>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    public /*out*/ readonly uniqueIdentifier!: pulumi.Output<string>;
    /**
     * The lab's Key vault.
     */
    public /*out*/ readonly vaultName!: pulumi.Output<string>;
    /**
     * The resource group in which all new lab virtual machines will be created. To let DevTest Labs manage resource group creation, set this value to null.
     */
    public /*out*/ readonly vmCreationResourceGroup!: pulumi.Output<string>;

    /**
     * Create a Lab resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LabArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["announcement"] = args ? args.announcement : undefined;
            resourceInputs["environmentPermission"] = args ? args.environmentPermission : undefined;
            resourceInputs["extendedProperties"] = args ? args.extendedProperties : undefined;
            resourceInputs["labStorageType"] = (args ? args.labStorageType : undefined) ?? "Premium";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mandatoryArtifactsResourceIdsLinux"] = args ? args.mandatoryArtifactsResourceIdsLinux : undefined;
            resourceInputs["mandatoryArtifactsResourceIdsWindows"] = args ? args.mandatoryArtifactsResourceIdsWindows : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["premiumDataDisks"] = args ? args.premiumDataDisks : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["support"] = args ? args.support : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["artifactsStorageAccount"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["defaultPremiumStorageAccount"] = undefined /*out*/;
            resourceInputs["defaultStorageAccount"] = undefined /*out*/;
            resourceInputs["loadBalancerId"] = undefined /*out*/;
            resourceInputs["networkSecurityGroupId"] = undefined /*out*/;
            resourceInputs["premiumDataDiskStorageAccount"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIpId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
            resourceInputs["vaultName"] = undefined /*out*/;
            resourceInputs["vmCreationResourceGroup"] = undefined /*out*/;
        } else {
            resourceInputs["announcement"] = undefined /*out*/;
            resourceInputs["artifactsStorageAccount"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["defaultPremiumStorageAccount"] = undefined /*out*/;
            resourceInputs["defaultStorageAccount"] = undefined /*out*/;
            resourceInputs["environmentPermission"] = undefined /*out*/;
            resourceInputs["extendedProperties"] = undefined /*out*/;
            resourceInputs["labStorageType"] = undefined /*out*/;
            resourceInputs["loadBalancerId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mandatoryArtifactsResourceIdsLinux"] = undefined /*out*/;
            resourceInputs["mandatoryArtifactsResourceIdsWindows"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkSecurityGroupId"] = undefined /*out*/;
            resourceInputs["premiumDataDiskStorageAccount"] = undefined /*out*/;
            resourceInputs["premiumDataDisks"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIpId"] = undefined /*out*/;
            resourceInputs["support"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
            resourceInputs["vaultName"] = undefined /*out*/;
            resourceInputs["vmCreationResourceGroup"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devtestlab/v20150521preview:Lab" }, { type: "azure-native:devtestlab/v20160515:Lab" }, { type: "azure-native:devtestlab/v20180915:Lab" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Lab.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Lab resource.
 */
export interface LabArgs {
    /**
     * The properties of any lab announcement associated with this lab
     */
    announcement?: pulumi.Input<types.inputs.LabAnnouncementPropertiesArgs>;
    /**
     * The access rights to be granted to the user when provisioning an environment
     */
    environmentPermission?: pulumi.Input<string | types.enums.EnvironmentPermission>;
    /**
     * Extended properties of the lab used for experimental features
     */
    extendedProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
     */
    labStorageType?: pulumi.Input<string | types.enums.StorageType>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
     */
    mandatoryArtifactsResourceIdsLinux?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
     */
    mandatoryArtifactsResourceIdsWindows?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the lab.
     */
    name?: pulumi.Input<string>;
    /**
     * The setting to enable usage of premium data disks.
     * When its value is 'Enabled', creation of standard or premium data disks is allowed.
     * When its value is 'Disabled', only creation of standard data disks is allowed.
     */
    premiumDataDisks?: pulumi.Input<string | types.enums.PremiumDataDisk>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The properties of any lab support message associated with this lab
     */
    support?: pulumi.Input<types.inputs.LabSupportPropertiesArgs>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}