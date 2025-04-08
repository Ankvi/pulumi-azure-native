import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Specifies information about the gallery inVMAccessControlProfile version that you want to create or update.
 *
 * Uses Azure REST API version 2024-03-03. In version 2.x of the Azure Native provider, it used API version 2024-03-03.
 */
export class GalleryInVMAccessControlProfileVersion extends pulumi.CustomResource {
    /**
     * Get an existing GalleryInVMAccessControlProfileVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GalleryInVMAccessControlProfileVersion {
        return new GalleryInVMAccessControlProfileVersion(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute:GalleryInVMAccessControlProfileVersion';

    /**
     * Returns true if the given object is an instance of GalleryInVMAccessControlProfileVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GalleryInVMAccessControlProfileVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GalleryInVMAccessControlProfileVersion.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * This property allows you to specify if the requests will be allowed to access the host endpoints. Possible values are: 'Allow', 'Deny'.
     */
    public readonly defaultAccess!: pulumi.Output<string>;
    /**
     * If set to true, Virtual Machines deployed from the latest version of the Resource Profile won't use this Profile version.
     */
    public readonly excludeFromLatest!: pulumi.Output<boolean | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * This property allows you to specify whether the access control rules are in Audit mode, in Enforce mode or Disabled. Possible values are: 'Audit', 'Enforce' or 'Disabled'.
     */
    public readonly mode!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The timestamp for when the Resource Profile Version is published.
     */
    public /*out*/ readonly publishedDate!: pulumi.Output<string>;
    /**
     * This is the replication status of the gallery image version.
     */
    public /*out*/ readonly replicationStatus!: pulumi.Output<types.outputs.ReplicationStatusResponse>;
    /**
     * This is the Access Control Rules specification for an inVMAccessControlProfile version.
     */
    public readonly rules!: pulumi.Output<types.outputs.AccessControlRulesResponse | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The target regions where the Resource Profile version is going to be replicated to. This property is updatable.
     */
    public readonly targetLocations!: pulumi.Output<types.outputs.TargetRegionResponse[] | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GalleryInVMAccessControlProfileVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GalleryInVMAccessControlProfileVersionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.defaultAccess === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultAccess'");
            }
            if ((!args || args.galleryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'galleryName'");
            }
            if ((!args || args.inVMAccessControlProfileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'inVMAccessControlProfileName'");
            }
            if ((!args || args.mode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mode'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["defaultAccess"] = args ? args.defaultAccess : undefined;
            resourceInputs["excludeFromLatest"] = args ? args.excludeFromLatest : undefined;
            resourceInputs["galleryName"] = args ? args.galleryName : undefined;
            resourceInputs["inVMAccessControlProfileName"] = args ? args.inVMAccessControlProfileName : undefined;
            resourceInputs["inVMAccessControlProfileVersionName"] = args ? args.inVMAccessControlProfileVersionName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetLocations"] = args ? args.targetLocations : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publishedDate"] = undefined /*out*/;
            resourceInputs["replicationStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["defaultAccess"] = undefined /*out*/;
            resourceInputs["excludeFromLatest"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publishedDate"] = undefined /*out*/;
            resourceInputs["replicationStatus"] = undefined /*out*/;
            resourceInputs["rules"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetLocations"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute/v20240303:GalleryInVMAccessControlProfileVersion" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GalleryInVMAccessControlProfileVersion.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GalleryInVMAccessControlProfileVersion resource.
 */
export interface GalleryInVMAccessControlProfileVersionArgs {
    /**
     * This property allows you to specify if the requests will be allowed to access the host endpoints. Possible values are: 'Allow', 'Deny'.
     */
    defaultAccess: pulumi.Input<string | types.enums.EndpointAccess>;
    /**
     * If set to true, Virtual Machines deployed from the latest version of the Resource Profile won't use this Profile version.
     */
    excludeFromLatest?: pulumi.Input<boolean>;
    /**
     * The name of the Shared Image Gallery in which the inVMAccessControlProfile resides.
     */
    galleryName: pulumi.Input<string>;
    /**
     * The name of the gallery inVMAccessControlProfile in which the inVMAccessControlProfile version is to be created.
     */
    inVMAccessControlProfileName: pulumi.Input<string>;
    /**
     * The name of the gallery inVMAccessControlProfile version to be created. Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
     */
    inVMAccessControlProfileVersionName?: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * This property allows you to specify whether the access control rules are in Audit mode, in Enforce mode or Disabled. Possible values are: 'Audit', 'Enforce' or 'Disabled'.
     */
    mode: pulumi.Input<string | types.enums.AccessControlRulesMode>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * This is the Access Control Rules specification for an inVMAccessControlProfile version.
     */
    rules?: pulumi.Input<types.inputs.AccessControlRulesArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The target regions where the Resource Profile version is going to be replicated to. This property is updatable.
     */
    targetLocations?: pulumi.Input<pulumi.Input<types.inputs.TargetRegionArgs>[]>;
}