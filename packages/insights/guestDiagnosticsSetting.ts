import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Virtual machine guest diagnostics settings resource.
 *
 * Uses Azure REST API version 2018-06-01-preview. In version 1.x of the Azure Native provider, it used API version 2018-06-01-preview.
 */
export class GuestDiagnosticsSetting extends pulumi.CustomResource {
    /**
     * Get an existing GuestDiagnosticsSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GuestDiagnosticsSetting {
        return new GuestDiagnosticsSetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:insights:GuestDiagnosticsSetting';

    /**
     * Returns true if the given object is an instance of GuestDiagnosticsSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GuestDiagnosticsSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GuestDiagnosticsSetting.__pulumiType;
    }

    /**
     * the array of data source object which are configured to collect and send data
     */
    public readonly dataSources!: pulumi.Output<types.outputs.DataSourceResponse[] | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Operating system type for the configuration
     */
    public readonly osType!: pulumi.Output<string | undefined>;
    public readonly proxySetting!: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GuestDiagnosticsSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GuestDiagnosticsSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dataSources"] = args ? args.dataSources : undefined;
            resourceInputs["diagnosticSettingsName"] = args ? args.diagnosticSettingsName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["osType"] = args ? args.osType : undefined;
            resourceInputs["proxySetting"] = args ? args.proxySetting : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataSources"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["proxySetting"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights/v20180601preview:GuestDiagnosticsSetting" }, { type: "azure-native:insights/v20180601preview:guestDiagnosticsSetting" }, { type: "azure-native:insights:guestDiagnosticsSetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GuestDiagnosticsSetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GuestDiagnosticsSetting resource.
 */
export interface GuestDiagnosticsSettingArgs {
    /**
     * the array of data source object which are configured to collect and send data
     */
    dataSources?: pulumi.Input<pulumi.Input<types.inputs.DataSourceArgs>[]>;
    /**
     * The name of the diagnostic setting.
     */
    diagnosticSettingsName?: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Operating system type for the configuration
     */
    osType?: pulumi.Input<string>;
    proxySetting?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}