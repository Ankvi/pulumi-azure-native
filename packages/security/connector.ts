import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The connector setting
 * Azure REST API version: 2020-01-01-preview. Prior API version in Azure Native 1.x: 2020-01-01-preview.
 */
export class Connector extends pulumi.CustomResource {
    /**
     * Get an existing Connector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Connector {
        return new Connector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:Connector';

    /**
     * Returns true if the given object is an instance of Connector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Connector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Connector.__pulumiType;
    }

    /**
     * Settings for authentication management, these settings are relevant only for the cloud connector.
     */
    public readonly authenticationDetails!: pulumi.Output<types.outputs.AwAssumeRoleAuthenticationDetailsPropertiesResponse | types.outputs.AwsCredsAuthenticationDetailsPropertiesResponse | types.outputs.GcpCredentialsDetailsPropertiesResponse | undefined>;
    /**
     * Settings for hybrid compute management. These settings are relevant only for Arc autoProvision (Hybrid Compute).
     */
    public readonly hybridComputeSettings!: pulumi.Output<types.outputs.HybridComputeSettingsPropertiesResponse | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Connector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["authenticationDetails"] = args ? args.authenticationDetails : undefined;
            resourceInputs["connectorName"] = args ? args.connectorName : undefined;
            resourceInputs["hybridComputeSettings"] = args ? args.hybridComputeSettings : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authenticationDetails"] = undefined /*out*/;
            resourceInputs["hybridComputeSettings"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20200101preview:Connector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Connector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Connector resource.
 */
export interface ConnectorArgs {
    /**
     * Settings for authentication management, these settings are relevant only for the cloud connector.
     */
    authenticationDetails?: pulumi.Input<types.inputs.AwAssumeRoleAuthenticationDetailsPropertiesArgs | types.inputs.AwsCredsAuthenticationDetailsPropertiesArgs | types.inputs.GcpCredentialsDetailsPropertiesArgs>;
    /**
     * Name of the cloud account connector
     */
    connectorName?: pulumi.Input<string>;
    /**
     * Settings for hybrid compute management. These settings are relevant only for Arc autoProvision (Hybrid Compute).
     */
    hybridComputeSettings?: pulumi.Input<types.inputs.HybridComputeSettingsPropertiesArgs>;
}