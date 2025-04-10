import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents settings of an environment, from which environment instances would be created
 *
 * Uses Azure REST API version 2018-10-15. In version 1.x of the Azure Native provider, it used API version 2018-10-15.
 */
export class EnvironmentSetting extends pulumi.CustomResource {
    /**
     * Get an existing EnvironmentSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EnvironmentSetting {
        return new EnvironmentSetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:labservices:EnvironmentSetting';

    /**
     * Returns true if the given object is an instance of EnvironmentSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EnvironmentSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EnvironmentSetting.__pulumiType;
    }

    /**
     * Describes the user's progress in configuring their environment setting
     */
    public readonly configurationState!: pulumi.Output<string | undefined>;
    /**
     * Describes the environment and its resource settings
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Time when the template VM was last changed.
     */
    public /*out*/ readonly lastChanged!: pulumi.Output<string>;
    /**
     * Time when the template VM was last sent for publishing.
     */
    public /*out*/ readonly lastPublished!: pulumi.Output<string>;
    /**
     * The details of the latest operation. ex: status, error
     */
    public /*out*/ readonly latestOperationResult!: pulumi.Output<types.outputs.LatestOperationResultResponse>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Describes the readiness of this environment setting
     */
    public /*out*/ readonly publishingState!: pulumi.Output<string>;
    /**
     * The resource specific settings
     */
    public readonly resourceSettings!: pulumi.Output<types.outputs.ResourceSettingsResponse>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Brief title describing the environment and its resource settings
     */
    public readonly title!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    public readonly uniqueIdentifier!: pulumi.Output<string | undefined>;

    /**
     * Create a EnvironmentSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnvironmentSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.labAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labAccountName'");
            }
            if ((!args || args.labName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceSettings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceSettings'");
            }
            resourceInputs["configurationState"] = args ? args.configurationState : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["environmentSettingName"] = args ? args.environmentSettingName : undefined;
            resourceInputs["labAccountName"] = args ? args.labAccountName : undefined;
            resourceInputs["labName"] = args ? args.labName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceSettings"] = args ? args.resourceSettings : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["uniqueIdentifier"] = args ? args.uniqueIdentifier : undefined;
            resourceInputs["lastChanged"] = undefined /*out*/;
            resourceInputs["lastPublished"] = undefined /*out*/;
            resourceInputs["latestOperationResult"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["publishingState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["configurationState"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["lastChanged"] = undefined /*out*/;
            resourceInputs["lastPublished"] = undefined /*out*/;
            resourceInputs["latestOperationResult"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publishingState"] = undefined /*out*/;
            resourceInputs["resourceSettings"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:labservices/v20181015:EnvironmentSetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EnvironmentSetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EnvironmentSetting resource.
 */
export interface EnvironmentSettingArgs {
    /**
     * Describes the user's progress in configuring their environment setting
     */
    configurationState?: pulumi.Input<string | types.enums.ConfigurationState>;
    /**
     * Describes the environment and its resource settings
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the environment Setting.
     */
    environmentSettingName?: pulumi.Input<string>;
    /**
     * The name of the lab Account.
     */
    labAccountName: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The provisioning status of the resource.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource specific settings
     */
    resourceSettings: pulumi.Input<types.inputs.ResourceSettingsArgs>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Brief title describing the environment and its resource settings
     */
    title?: pulumi.Input<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    uniqueIdentifier?: pulumi.Input<string>;
}