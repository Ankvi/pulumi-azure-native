import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Configuration profile assignment is an association between a VM and automanage profile configuration.
 *
 * Uses Azure REST API version 2022-05-04. In version 2.x of the Azure Native provider, it used API version 2022-05-04.
 *
 * Other available API versions: 2021-04-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automanage [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ConfigurationProfileHCIAssignment extends pulumi.CustomResource {
    /**
     * Get an existing ConfigurationProfileHCIAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConfigurationProfileHCIAssignment {
        return new ConfigurationProfileHCIAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:automanage:ConfigurationProfileHCIAssignment';

    /**
     * Returns true if the given object is an instance of ConfigurationProfileHCIAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConfigurationProfileHCIAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConfigurationProfileHCIAssignment.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Azure resource id. Indicates if this resource is managed by another Azure resource.
     */
    public /*out*/ readonly managedBy!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the configuration profile assignment.
     */
    public readonly properties!: pulumi.Output<types.outputs.ConfigurationProfileAssignmentPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ConfigurationProfileHCIAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConfigurationProfileHCIAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["configurationProfileAssignmentName"] = args ? args.configurationProfileAssignmentName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:automanage/v20210430preview:ConfigurationProfileHCIAssignment" }, { type: "azure-native:automanage/v20220504:ConfigurationProfileHCIAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConfigurationProfileHCIAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConfigurationProfileHCIAssignment resource.
 */
export interface ConfigurationProfileHCIAssignmentArgs {
    /**
     * The name of the Arc machine.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Name of the configuration profile assignment. Only default is supported.
     */
    configurationProfileAssignmentName?: pulumi.Input<string>;
    /**
     * Properties of the configuration profile assignment.
     */
    properties?: pulumi.Input<types.inputs.ConfigurationProfileAssignmentPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}