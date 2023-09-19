import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Software update configuration properties.
 */
export class SoftwareUpdateConfigurationByName extends pulumi.CustomResource {
    /**
     * Get an existing SoftwareUpdateConfigurationByName resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SoftwareUpdateConfigurationByName {
        return new SoftwareUpdateConfigurationByName(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:automation/v20190601:SoftwareUpdateConfigurationByName';

    /**
     * Returns true if the given object is an instance of SoftwareUpdateConfigurationByName.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SoftwareUpdateConfigurationByName {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SoftwareUpdateConfigurationByName.__pulumiType;
    }

    /**
     * CreatedBy property, which only appears in the response.
     */
    public /*out*/ readonly createdBy!: pulumi.Output<string>;
    /**
     * Creation time of the resource, which only appears in the response.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * Details of provisioning error
     */
    public readonly error!: pulumi.Output<types.outputs.ErrorResponseResponse | undefined>;
    /**
     * LastModifiedBy property, which only appears in the response.
     */
    public /*out*/ readonly lastModifiedBy!: pulumi.Output<string>;
    /**
     * Last time resource was modified, which only appears in the response.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state for the software update configuration, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Schedule information for the Software update configuration
     */
    public readonly scheduleInfo!: pulumi.Output<types.outputs.SUCSchedulePropertiesResponse>;
    /**
     * Tasks information for the Software update configuration.
     */
    public readonly tasks!: pulumi.Output<types.outputs.SoftwareUpdateConfigurationTasksResponse | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * update specific properties for the Software update configuration
     */
    public readonly updateConfiguration!: pulumi.Output<types.outputs.UpdateConfigurationResponse>;

    /**
     * Create a SoftwareUpdateConfigurationByName resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SoftwareUpdateConfigurationByNameArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.automationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.scheduleInfo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scheduleInfo'");
            }
            if ((!args || args.updateConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'updateConfiguration'");
            }
            resourceInputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            resourceInputs["error"] = args ? args.error : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scheduleInfo"] = args ? (args.scheduleInfo ? pulumi.output(args.scheduleInfo).apply(types.inputs.sucschedulePropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["softwareUpdateConfigurationName"] = args ? args.softwareUpdateConfigurationName : undefined;
            resourceInputs["tasks"] = args ? args.tasks : undefined;
            resourceInputs["updateConfiguration"] = args ? args.updateConfiguration : undefined;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["error"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["scheduleInfo"] = undefined /*out*/;
            resourceInputs["tasks"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updateConfiguration"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:automation:SoftwareUpdateConfigurationByName" }, { type: "azure-native:automation/v20170515preview:SoftwareUpdateConfigurationByName" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SoftwareUpdateConfigurationByName.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SoftwareUpdateConfigurationByName resource.
 */
export interface SoftwareUpdateConfigurationByNameArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Details of provisioning error
     */
    error?: pulumi.Input<types.inputs.ErrorResponseArgs>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Schedule information for the Software update configuration
     */
    scheduleInfo: pulumi.Input<types.inputs.SUCSchedulePropertiesArgs>;
    /**
     * The name of the software update configuration to be created.
     */
    softwareUpdateConfigurationName?: pulumi.Input<string>;
    /**
     * Tasks information for the Software update configuration.
     */
    tasks?: pulumi.Input<types.inputs.SoftwareUpdateConfigurationTasksArgs>;
    /**
     * update specific properties for the Software update configuration
     */
    updateConfiguration: pulumi.Input<types.inputs.UpdateConfigurationArgs>;
}
