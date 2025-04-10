import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Virtual machine guest diagnostic settings resource.
 *
 * Uses Azure REST API version 2018-06-01-preview. In version 1.x of the Azure Native provider, it used API version 2018-06-01-preview.
 */
export class GuestDiagnosticsSettingsAssociation extends pulumi.CustomResource {
    /**
     * Get an existing GuestDiagnosticsSettingsAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GuestDiagnosticsSettingsAssociation {
        return new GuestDiagnosticsSettingsAssociation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:insights:GuestDiagnosticsSettingsAssociation';

    /**
     * Returns true if the given object is an instance of GuestDiagnosticsSettingsAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GuestDiagnosticsSettingsAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GuestDiagnosticsSettingsAssociation.__pulumiType;
    }

    /**
     * The guest diagnostic settings name.
     */
    public readonly guestDiagnosticSettingsName!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GuestDiagnosticsSettingsAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GuestDiagnosticsSettingsAssociationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.guestDiagnosticSettingsName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'guestDiagnosticSettingsName'");
            }
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            resourceInputs["associationName"] = args ? args.associationName : undefined;
            resourceInputs["guestDiagnosticSettingsName"] = args ? args.guestDiagnosticSettingsName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["guestDiagnosticSettingsName"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights/v20180601preview:GuestDiagnosticsSettingsAssociation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GuestDiagnosticsSettingsAssociation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GuestDiagnosticsSettingsAssociation resource.
 */
export interface GuestDiagnosticsSettingsAssociationArgs {
    /**
     * The name of the diagnostic settings association.
     */
    associationName?: pulumi.Input<string>;
    /**
     * The guest diagnostic settings name.
     */
    guestDiagnosticSettingsName: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The fully qualified ID of the resource, including the resource name and resource type.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}