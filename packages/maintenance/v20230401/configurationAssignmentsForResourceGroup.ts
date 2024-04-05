import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Configuration Assignment
 */
export class ConfigurationAssignmentsForResourceGroup extends pulumi.CustomResource {
    /**
     * Get an existing ConfigurationAssignmentsForResourceGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConfigurationAssignmentsForResourceGroup {
        return new ConfigurationAssignmentsForResourceGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:maintenance/v20230401:ConfigurationAssignmentsForResourceGroup';

    /**
     * Returns true if the given object is an instance of ConfigurationAssignmentsForResourceGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConfigurationAssignmentsForResourceGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConfigurationAssignmentsForResourceGroup.__pulumiType;
    }

    /**
     * Properties of the configuration assignment
     */
    public readonly filter!: pulumi.Output<types.outputs.ConfigurationAssignmentFilterPropertiesResponse | undefined>;
    /**
     * Location of the resource
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The maintenance configuration Id
     */
    public readonly maintenanceConfigurationId!: pulumi.Output<string | undefined>;
    /**
     * Name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The unique resourceId
     */
    public readonly resourceId!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Type of the resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ConfigurationAssignmentsForResourceGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConfigurationAssignmentsForResourceGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["configurationAssignmentName"] = args ? args.configurationAssignmentName : undefined;
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maintenanceConfigurationId"] = args ? args.maintenanceConfigurationId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["filter"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maintenanceConfigurationId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resourceId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:maintenance:ConfigurationAssignmentsForResourceGroup" }, { type: "azure-native:maintenance/v20230901preview:ConfigurationAssignmentsForResourceGroup" }, { type: "azure-native:maintenance/v20231001preview:ConfigurationAssignmentsForResourceGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConfigurationAssignmentsForResourceGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConfigurationAssignmentsForResourceGroup resource.
 */
export interface ConfigurationAssignmentsForResourceGroupArgs {
    /**
     * Configuration assignment name
     */
    configurationAssignmentName?: pulumi.Input<string>;
    /**
     * Properties of the configuration assignment
     */
    filter?: pulumi.Input<types.inputs.ConfigurationAssignmentFilterPropertiesArgs>;
    /**
     * Location of the resource
     */
    location?: pulumi.Input<string>;
    /**
     * The maintenance configuration Id
     */
    maintenanceConfigurationId?: pulumi.Input<string>;
    /**
     * Resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The unique resourceId
     */
    resourceId?: pulumi.Input<string>;
}