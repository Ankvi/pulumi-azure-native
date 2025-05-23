import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A CommunityProviderHub resource
 *
 * Uses Azure REST API version 2023-11-01. In version 2.x of the Azure Native provider, it used API version 2023-11-01.
 */
export class CommunityTraining extends pulumi.CustomResource {
    /**
     * Get an existing CommunityTraining resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CommunityTraining {
        return new CommunityTraining(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:community:CommunityTraining';

    /**
     * Returns true if the given object is an instance of CommunityTraining.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CommunityTraining {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CommunityTraining.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * To indicate whether the Community Training instance has Disaster Recovery enabled
     */
    public readonly disasterRecoveryEnabled!: pulumi.Output<boolean>;
    /**
     * The identity configuration of the Community Training resource
     */
    public readonly identityConfiguration!: pulumi.Output<types.outputs.IdentityConfigurationPropertiesResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The email address of the portal admin
     */
    public readonly portalAdminEmailAddress!: pulumi.Output<string>;
    /**
     * The portal name (website name) of the Community Training instance
     */
    public readonly portalName!: pulumi.Output<string>;
    /**
     * The email address of the portal owner. Will be used as the primary contact
     */
    public readonly portalOwnerEmailAddress!: pulumi.Output<string>;
    /**
     * The organization name of the portal owner
     */
    public readonly portalOwnerOrganizationName!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The SKU (Stock Keeping Unit) assigned to this resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * To indicate whether the Community Training instance has Zone Redundancy enabled
     */
    public readonly zoneRedundancyEnabled!: pulumi.Output<boolean>;

    /**
     * Create a CommunityTraining resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CommunityTrainingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.disasterRecoveryEnabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'disasterRecoveryEnabled'");
            }
            if ((!args || args.identityConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identityConfiguration'");
            }
            if ((!args || args.portalAdminEmailAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portalAdminEmailAddress'");
            }
            if ((!args || args.portalName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portalName'");
            }
            if ((!args || args.portalOwnerEmailAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portalOwnerEmailAddress'");
            }
            if ((!args || args.portalOwnerOrganizationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portalOwnerOrganizationName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.zoneRedundancyEnabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneRedundancyEnabled'");
            }
            resourceInputs["communityTrainingName"] = args ? args.communityTrainingName : undefined;
            resourceInputs["disasterRecoveryEnabled"] = args ? args.disasterRecoveryEnabled : undefined;
            resourceInputs["identityConfiguration"] = args ? (args.identityConfiguration ? pulumi.output(args.identityConfiguration).apply(types.inputs.identityConfigurationPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["portalAdminEmailAddress"] = args ? args.portalAdminEmailAddress : undefined;
            resourceInputs["portalName"] = args ? args.portalName : undefined;
            resourceInputs["portalOwnerEmailAddress"] = args ? args.portalOwnerEmailAddress : undefined;
            resourceInputs["portalOwnerOrganizationName"] = args ? args.portalOwnerOrganizationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zoneRedundancyEnabled"] = args ? args.zoneRedundancyEnabled : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["disasterRecoveryEnabled"] = undefined /*out*/;
            resourceInputs["identityConfiguration"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["portalAdminEmailAddress"] = undefined /*out*/;
            resourceInputs["portalName"] = undefined /*out*/;
            resourceInputs["portalOwnerEmailAddress"] = undefined /*out*/;
            resourceInputs["portalOwnerOrganizationName"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zoneRedundancyEnabled"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:community/v20231101:CommunityTraining" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CommunityTraining.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CommunityTraining resource.
 */
export interface CommunityTrainingArgs {
    /**
     * The name of the Community Training Resource
     */
    communityTrainingName?: pulumi.Input<string>;
    /**
     * To indicate whether the Community Training instance has Disaster Recovery enabled
     */
    disasterRecoveryEnabled: pulumi.Input<boolean>;
    /**
     * The identity configuration of the Community Training resource
     */
    identityConfiguration: pulumi.Input<types.inputs.IdentityConfigurationPropertiesArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The email address of the portal admin
     */
    portalAdminEmailAddress: pulumi.Input<string>;
    /**
     * The portal name (website name) of the Community Training instance
     */
    portalName: pulumi.Input<string>;
    /**
     * The email address of the portal owner. Will be used as the primary contact
     */
    portalOwnerEmailAddress: pulumi.Input<string>;
    /**
     * The organization name of the portal owner
     */
    portalOwnerOrganizationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU (Stock Keeping Unit) assigned to this resource.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * To indicate whether the Community Training instance has Zone Redundancy enabled
     */
    zoneRedundancyEnabled: pulumi.Input<boolean>;
}